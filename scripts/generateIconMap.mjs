import fs from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export function generateIconMap() {
  const iconsDir = resolve(__dirname, '../packages/epicenter-icons/src/icons')
  const outputFile = resolve(__dirname, '../packages/epicenter-icons/src/iconMap.js')
  const files = fs.readdirSync(iconsDir)

  const iconMapEntries = files
    .filter(file => file.endsWith('.svg'))
    .map(file => {
      const name = file.replace('.svg', '')
      return `'${name}': () => import('./icons/${file}?raw')`
    })

  const output = `export const iconMap = {\n  ${iconMapEntries.join(',\n  ')}\n}\n`
  fs.writeFileSync(outputFile, output, 'utf-8')
}