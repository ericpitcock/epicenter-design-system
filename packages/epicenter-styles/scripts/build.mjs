import { exec } from 'child_process'
import fs from 'fs'
import path, { join, resolve } from 'path'
import { fileURLToPath } from 'url'
import { promisify } from 'util'

import fsExtra from 'fs-extra'
import glob from 'glob'
import yaml from 'js-yaml'

const { ensureDir, copyFile } = fsExtra
const execAsync = promisify(exec)

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = resolve(__filename, '..')

// Define paths
const packageDir = resolve(__dirname, '..')
const srcFile = join(packageDir, 'index.scss')
const distDir = join(packageDir, 'dist')
const distCSS = join(distDir, 'epicenter-design-system.css')

// Path to local `sass` binary inside `node_modules/.bin/`
const sassCmd = join(packageDir, 'node_modules/.bin/sass')

// SCSS mixins to copy
const mixinsToCopy = [
  join(packageDir, 'scss/mixins/_generate-color-variants.scss')
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

function writeCSS(filePath, yamlData) {
  let cssOutput = `/* stylelint-disable no-duplicate-selectors */\n/* DO NOT EDIT DIRECTLY */\n`

  const fileName = resolve(__dirname, '..', 'scss', 'color', `_${path.basename(filePath).replace('.yaml', '.scss')}`)
  const isThemesFile = path.basename(filePath) === 'themes.yaml'

  const hasChildProperties = Object.values(yamlData).some(
    value => typeof value === 'object'
  )

  if (!hasChildProperties) {
    cssOutput += `:root {\n`

    Object.entries(yamlData).forEach(([key, value]) => {
      cssOutput += `  --${key}: ${value};\n`
    })

    cssOutput += `}\n`
  } else if (isThemesFile) {
    // Use modern color-scheme and light-dark() for themes.yaml
    cssOutput += `:root { color-scheme: light dark; }\n`
    cssOutput += `.dark-theme { color-scheme: dark; }\n`
    cssOutput += `.light-theme { color-scheme: light; }\n\n`

    cssOutput += `:root {\n`

    Object.entries(yamlData).forEach(([key, value]) => {
      const lightValue = value.light || value.dark
      const darkValue = value.dark
      cssOutput += `  --${key}: light-dark(${lightValue}, ${darkValue});\n`
    })

    cssOutput += `}\n`
  } else {
    // Legacy approach for non-themes files
    const darkSelector = '.dark-theme'
    const lightSelector = '.light-theme'

    cssOutput += `${darkSelector} {\n`

    Object.entries(yamlData).forEach(([key, value]) => {
      cssOutput += `  --${key}: ${value.dark};\n`
    })

    cssOutput += `}\n`

    cssOutput += `${lightSelector} {\n`

    Object.entries(yamlData).forEach(([key, value]) => {
      cssOutput += `  --${key}: ${value.light || value.dark};\n`
    })

    cssOutput += `}\n`
  }

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

async function compileSass() {
  console.log('🎨 Compiling SCSS...')
  await ensureDir(distDir)
  try {
    await execAsync(`${sassCmd} ${srcFile} ${distCSS} --style compressed`)
    console.log(`✅ SCSS compiled: ${distCSS}`)
  } catch (error) {
    console.error('❌ SCSS compilation failed:', error.stderr || error)
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
// Build
// ---------------------------------------------------------------------------

async function build() {
  console.log('🚀 Building styles package...')
  try {
    buildColorTokens()
    await compileSass()
    await copyMixins()
    console.log('🎉 Styles build complete!')
  } catch (err) {
    console.error('❌ Build failed:', err)
    process.exit(1)
  }
}

// Run the full build
await build()

// Optionally watch token files for changes
if (watchMode) {
  const chokidar = await import('chokidar')

  console.log('👀 Watching for changes in YAML token files...')

  const watcher = chokidar.default.watch(resolve(__dirname, '../tokens/color/*.yaml'))

  watcher.on('change', async () => {
    console.log('YAML file changed, rebuilding...')
    await build()
  })
}