import fs from 'fs'
import path from 'path'

// Resolve the directory containing your icons
const iconsDir = path.resolve('./icons')
const outputFile = path.resolve('./index.js')

// Read all files in the icons directory
const files = fs.readdirSync(iconsDir)

// Generate the `iconMap` entries
const iconMapEntries = files
  .filter((file) => file.endsWith('.svg')) // Only include `.svg` files
  .map((file) => {
    const name = file.replace('.svg', '') // Strip `.svg` extension
    return `'${name}': () => import('./icons/${file}?raw')`
  })

// Write the generated `iconMap` to the output file
const output = `const iconMap = {
  ${iconMapEntries.join(',\n  ')}
}

const loadIcon = async (name) => {
  if (iconMap[name]) {
    try {
      const { default: rawSvg } = await iconMap[name]()
      return rawSvg
    } catch (error) {
      console.error(\`Failed to load icon: \${name}\`, error)
    }
  } else {
    console.error(\`Icon not found: \${name}\`)
  }

  // Optional fallback SVG
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line></svg>'
}

export { loadIcon }
`

fs.writeFileSync(outputFile, output, 'utf-8')
console.log(`Icon map generated successfully at ${outputFile}`)