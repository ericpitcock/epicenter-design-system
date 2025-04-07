import fs from 'fs'
import { basename, dirname, join, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Recursively collect the base names of all .svg files (without extension)
function getSvgFileNames(dir) {
  let results = []
  const list = fs.readdirSync(dir)
  list.forEach(file => {
    const fullPath = join(dir, file)
    const stat = fs.statSync(fullPath)
    if (stat && stat.isDirectory()) {
      results = results.concat(getSvgFileNames(fullPath))
    } else if (file.endsWith('.svg')) {
      // Only keep the file name without extension
      results.push(basename(file, '.svg'))
    }
  })
  return results
}

export function generateIconArray() {
  const iconsDir = resolve(__dirname, '../packages/epicenter-icons/src/icons')
  const outputFile = resolve(__dirname, '../storybook/helpers/iconsArray.js')
  const svgNames = getSvgFileNames(iconsDir)

  // Create an array of icon names as string literals
  const output = `export const iconsArray = [\n  ${svgNames.map(name => `'${name}'`).join(',\n  ')}\n]\n`

  // Ensure the directory exists
  const outputDir = dirname(outputFile)
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  fs.writeFileSync(outputFile, output, 'utf-8')
}

// generateIconArray()