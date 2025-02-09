import { exec } from 'child_process'
import fsExtra from 'fs-extra'
import { join, resolve } from 'path'
import { fileURLToPath } from 'url'
import { promisify } from 'util'

const { ensureDir, copyFile } = fsExtra
const execAsync = promisify(exec)

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = resolve(__filename, '..')

// Define paths
const packageDir = resolve(__dirname, '../packages/epicenter-styles')
const srcFile = join(packageDir, 'index.scss')
const distDir = join(packageDir, 'dist')
const distCSS = join(distDir, 'epicenter-design-system.css')

// Path to local `sass` binary inside `node_modules/.bin/`
const sassCmd = join(packageDir, 'node_modules/.bin/sass')

// SCSS mixins to copy
const mixinsToCopy = [
  join(packageDir, 'scss/mixins/_generate-color-variants.scss')
]

// Function to compile SCSS using local `sass`
async function compileSass() {
  console.log('🎨 Compiling SCSS...')
  await ensureDir(distDir) // Ensure dist directory exists
  try {
    await execAsync(`${sassCmd} ${srcFile} ${distCSS} --style compressed`)
    console.log(`✅ SCSS compiled: ${distCSS}`)
  } catch (error) {
    console.error('❌ SCSS compilation failed:', error.stderr || error)
    return Promise.reject(error)
  }
}

// Function to copy SCSS mixins
async function copyMixins() {
  console.log('📂 Copying SCSS mixins...')
  for (const mixin of mixinsToCopy) {
    const dest = join(distDir, 'mixins', mixin.split('/').pop())
    await ensureDir(join(distDir, 'mixins'))
    await copyFile(mixin, dest)
    console.log(`✅ Copied: ${mixin} → ${dest}`)
  }
}

// Run the build process
async function buildStyles() {
  console.log('🚀 Building styles package...')
  try {
    await compileSass()
    await copyMixins()
    console.log('🎉 Styles build complete!')
  } catch (err) {
    console.error('❌ Build failed:', err)
  }
}

// Execute the build script
buildStyles()