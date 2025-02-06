import { remove, ensureDir, copy } from 'fs-extra'
import { resolve, join } from 'path'
import { fileURLToPath } from 'url'
import { EXCLUDED_DIRS } from './excludedComponents.js'

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = resolve(__filename, '..')

const packageDir = resolve(__dirname, '../packages/epicenter-vue-components')
const srcDir = resolve(packageDir, 'src')
const distDir = resolve(packageDir, 'dist')

console.log('🚀 Building package...')

// Ensure dist is clean
await remove(distDir)
await ensureDir(distDir)

// Copy `index.js`
await copy(join(srcDir, 'index.js'), join(distDir, 'index.js'))

// Copy `composables/` as is
await copy(join(srcDir, 'composables'), join(distDir, 'composables'))

// Copy `components/` while excluding specific directories and `*.notes.md`
await copy(join(srcDir, 'components'), join(distDir, 'components'), {
  filter: (src) => {
    const isNotesFile = src.endsWith('.notes.md')

    // Extract the last directory name from the path
    const relativePath = src.replace(srcDir + '/', '') // Remove src/ prefix
    const parts = relativePath.split('/')
    const directoryName = parts.length > 1 ? parts[1] : ''

    const isExcludedDir = EXCLUDED_DIRS.includes(directoryName)

    return !isNotesFile && !isExcludedDir
  }
})

console.log('✅ Build complete! Files copied to dist/')