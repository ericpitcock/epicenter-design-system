import fs from 'fs'
import path from 'path'

// Resolve the directory containing your icons
const iconsDir = path.resolve('../packages/epicenter-icons/src/icons')
const outputFile = path.resolve('../packages/epicenter-icons/src/iconMap.js')

// Read all files in the icons directory
const files = fs.readdirSync(iconsDir)

// Generate the `iconMap` entries
const iconMapEntries = files
  .filter((file) => file.endsWith('.svg')) // Only include `.svg` files
  .map((file) => {
    const name = file.replace('.svg', '') // Strip the `.svg` extension
    return `'${name}': () => import('./icons/${file}?raw')`
  })

// Write just the iconMap to the output file
const output = `export const iconMap = {
  ${iconMapEntries.join(',\n  ')}
}
`
fs.writeFileSync(outputFile, output, 'utf-8')
console.log(`Icon map generated successfully at ${outputFile}`)