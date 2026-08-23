import { execFile } from 'child_process'
import fs from 'fs'
import path, { join, resolve } from 'path'
import process from 'process'
import { fileURLToPath } from 'url'
import { promisify } from 'util'

import fsExtra from 'fs-extra'
import { glob } from 'glob'
import yaml from 'js-yaml'
import * as sass from 'sass'

const { ensureDir, copyFile } = fsExtra
const execFileAsync = promisify(execFile)

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = resolve(__filename, '..')

// Define paths
const packageDir = resolve(__dirname, '..')
const distDir = join(packageDir, 'dist')
const distCSS = join(distDir, 'epicenter-design-system.css')

// SCSS mixins to copy — these are the package's public SCSS surface, so both
// the brand-ramp generator and the shared helpers ship.
const mixinsToCopy = [
  join(packageDir, 'scss/mixins/_generate-color-variants.scss'),
  join(packageDir, 'scss/mixins/_mixins.scss')
]

const watchMode = process.argv.includes('--watch')

// ---------------------------------------------------------------------------
// Build color tokens (YAML → SCSS)
// ---------------------------------------------------------------------------

function loadYAMLFiles(pattern) {
  const yamlData = {}
  const fullPattern = resolve(__dirname, pattern)
  const files = glob.sync(fullPattern)
  files.forEach(file => {
    try {
      const data = yaml.load(fs.readFileSync(file, 'utf8'))
      yamlData[file] = data
    } catch (error) {
      console.error('Error:', error)
    }
  })
  return yamlData
}

// The primitive ramps hold unwrapped HSL channel triplets, so referencing one
// without an hsl() wrapper produces an invalid value that fails silently.
const RAMP_TOKEN = /var\(\s*--(?:gray|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-\d+\s*\)/

function assertWrappedInHsl(key, value, filePath) {
  // Anything already inside an hsl() call is fine; strip those and see what is left.
  const bare = String(value).replace(/hsla?\([^()]*(\([^()]*\))?[^()]*\)/g, ' ')
  if (!RAMP_TOKEN.test(bare)) return

  throw new Error(
    `${path.basename(filePath)}: "${key}: ${value}" references a raw HSL triplet ` +
    'without an hsl() wrapper — the resulting value is invalid. Write hsl(var(--…)).'
  )
}

function writeCSS(filePath, yamlData) {
  let cssOutput = `/* stylelint-disable no-duplicate-selectors */\n/* DO NOT EDIT DIRECTLY */\n`

  const fileName = resolve(__dirname, '..', 'scss', 'color', `_${path.basename(filePath).replace('.yaml', '.scss')}`)

  // Themed tokens are recognised by their shape — a { light, dark } pair — not by
  // filename, so a new themed token file gets light-dark() automatically.
  const isThemed = Object.values(yamlData).some(
    value => value && typeof value === 'object' && ('dark' in value || 'light' in value)
  )

  cssOutput += `:root {\n`

  Object.entries(yamlData).forEach(([key, value]) => {
    if (!isThemed) {
      cssOutput += `  --${key}: ${value};\n`
      return
    }

    const darkValue = value.dark ?? value.light
    const lightValue = value.light ?? value.dark
    assertWrappedInHsl(key, darkValue, filePath)
    assertWrappedInHsl(key, lightValue, filePath)
    cssOutput += `  --${key}: light-dark(${lightValue}, ${darkValue});\n`
  })

  cssOutput += `}\n`

  fs.writeFileSync(fileName, cssOutput)
  console.log(`  SCSS file generated: ${fileName}`)
}

function buildColorTokens() {
  console.log('🎨 Building color tokens...')
  try {
    const yamlFilesData = loadYAMLFiles('../tokens/color/*.yaml')
    for (const [filePath, yamlData] of Object.entries(yamlFilesData)) {
      writeCSS(filePath, yamlData)
    }
    console.log('✅ Color tokens built')
  } catch (error) {
    console.error('❌ Color token build failed:', error)
    throw error
  }
}

// ---------------------------------------------------------------------------
// Compile SCSS → CSS
// ---------------------------------------------------------------------------

/**
 * Cascade layers, least- to most-specific in intent.
 *
 * Consumer CSS written outside a layer beats layered CSS regardless of
 * specificity, so overriding a component no longer means out-specifying
 * selectors like `.ep-menu__item .ep-button--menu-item`.
 *
 * Sass forbids `@use` inside `@layer`, so each group is compiled on its own and
 * wrapped here rather than in index.scss.
 */
const LAYERS = [
  { name: 'epicenter.reset', use: 'scss/reset' },
  { name: 'epicenter.tokens', use: 'scss/color' },
  { name: 'epicenter.base', use: 'scss/type' },
  { name: 'epicenter.components', use: 'scss/components' },
  { name: 'epicenter.utilities', use: 'scss/utilities' }
]

async function compileSass() {
  console.log('🎨 Compiling SCSS...')
  await ensureDir(distDir)

  try {
    const chunks = [`@layer ${LAYERS.map(layer => layer.name).join(',')};`]

    for (const layer of LAYERS) {
      const { css } = sass.compileString(`@use '${layer.use}';`, {
        loadPaths: [packageDir],
        style: 'compressed'
      })

      // @charset may only appear once, at the very start of a stylesheet.
      const body = css.replace(/^@charset\s+"[^"]*";\s*/i, '').trim()
      if (body) chunks.push(`@layer ${layer.name}{${body}}`)
    }

    const css = `${chunks.join('\n')}\n`
    fs.writeFileSync(distCSS, css)

    // The landing site serves its own copy; write it here so the two cannot
    // drift (it was previously only produced by a manual watch script).
    const staticDir = resolve(packageDir, '../../static')
    if (fs.existsSync(staticDir)) {
      fs.writeFileSync(join(staticDir, 'epicenter-design-system.css'), css)
    }

    console.log(`✅ SCSS compiled into ${LAYERS.length} cascade layers: ${distCSS}`)
  } catch (error) {
    console.error('❌ SCSS compilation failed:', error.message || error)
    throw error
  }
}

// ---------------------------------------------------------------------------
// Copy SCSS mixins
// ---------------------------------------------------------------------------

async function copyMixins() {
  console.log('📂 Copying SCSS mixins...')
  for (const mixin of mixinsToCopy) {
    const dest = join(distDir, 'mixins', mixin.split('/').pop())
    await ensureDir(join(distDir, 'mixins'))
    await copyFile(mixin, dest)
    console.log(`  Copied: ${mixin} → ${dest}`)
  }
  console.log('✅ Mixins copied')
}

// ---------------------------------------------------------------------------
// Validate the custom-property contract
// ---------------------------------------------------------------------------

async function validateProperties() {
  console.log('🔎 Validating custom-property contract...')
  const script = join(packageDir, 'scripts/validate-properties.mjs')
  try {
    const { stdout } = await execFileAsync(process.execPath, [script])
    console.log(stdout.trimEnd())
  } catch (error) {
    // The validator reports on stdout and signals failure through its exit code,
    // so surface the report before letting the build fail.
    if (error.stdout) console.log(error.stdout.trimEnd())
    if (error.stderr) console.error(error.stderr.trimEnd())
    throw new Error('custom-property contract validation failed')
  }
}

// ---------------------------------------------------------------------------
// Build
// ---------------------------------------------------------------------------

async function build() {
  console.log('🚀 Building styles package...')
  try {
    buildColorTokens()
    await compileSass()
    await validateProperties()
    await copyMixins()
    console.log('🎉 Styles build complete!')
  } catch (err) {
    console.error('❌ Build failed:', err)
    process.exit(1)
  }
}

// Run the full build
await build()

// Optionally watch sources and rebuild
if (watchMode) {
  const chokidar = await import('chokidar')

  console.log('👀 Watching tokens and SCSS for changes...')

  // Watch the SCSS too, not just the tokens — this is now the only watch script,
  // and a component edit needs to reach dist the same way a token edit does.
  const watcher = chokidar.default.watch([
    resolve(__dirname, '../tokens/**/*.yaml'),
    resolve(__dirname, '../scss/**/*.scss'),
    resolve(__dirname, '../index.scss')
  ], {
    // scss/color/* is generated by this build; watching it would loop.
    ignored: resolve(__dirname, '../scss/color/*.scss')
  })

  watcher.on('change', async () => {
    console.log('Change detected, rebuilding...')
    await build()
  })
}