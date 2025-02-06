import fs from 'fs'
import path from 'path'

// Path to the components directory
const componentsDir = path.resolve('../packages/epicenter-vue-components/src/components')

// Output file (index.js in components directory)
const outputFile = path.join(componentsDir, 'index.js')

// Helper function to recursively find all .vue files
const findVueFiles = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files = entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name)
    return entry.isDirectory() ? findVueFiles(fullPath) : fullPath
  })
  return files.filter((file) => file.endsWith('.vue'))
}

// Find all .vue files in the components directory
const vueFiles = findVueFiles(componentsDir)

// Generate import statements and named exports
const importStatements = []
const exportNames = []

vueFiles.forEach((filePath) => {
  // Get the component name and relative path
  const relativePath = path.relative(componentsDir, filePath)
  const componentName = path.basename(filePath, '.vue')

  // Generate the import statement
  importStatements.push(`import ${componentName} from './${relativePath.replace(/\\/g, '/')}'`)

  // Add to named exports
  exportNames.push(componentName)
})

// Generate the default export block
const namedExports = `export {\n  ${exportNames.join(',\n  ')}\n}`
const defaultExport = `export default {\n  ${exportNames.join(',\n  ')}\n}`

// Combine all parts
const outputContent = `${importStatements.join('\n')}\n\n${namedExports}\n\n${defaultExport}`

// Write the output file
fs.writeFileSync(outputFile, outputContent)

console.log(`Export file generated at: ${outputFile}`)