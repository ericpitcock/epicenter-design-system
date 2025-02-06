import { remove, ensureDir, copy } from 'fs-extra'
import { resolve, join } from 'path'
import { fileURLToPath } from 'url'

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = resolve(__filename, '..')

const srcDir = resolve(__dirname, '../packages/epicenter-vue-components/src')
const distDir = resolve(__dirname, '../packages/epicenter-vue-components/dist')

// Ensure dist is clean
await remove(distDir)
await ensureDir(distDir)

// Copy `index.js`
await copy(resolve(__dirname, '../packages/epicenter-vue-components/src/index.js'), join(distDir, 'index.js'))

// Copy `composables/` as is
await copy(join(srcDir, 'composables'), join(distDir, 'composables'))

// Copy `components/` while filtering out `*.notes.md`
await copy(join(srcDir, 'components'), join(distDir, 'components'), {
  filter: (src) => !src.endsWith('.notes.md')
})

console.log('✅ Build complete! Files copied to dist/')