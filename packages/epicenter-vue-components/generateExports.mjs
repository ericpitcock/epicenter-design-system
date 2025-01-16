import fs from 'fs'
import path from 'path'

// Path to the components directory
const componentsDir = path.resolve('src/components')

// Output file (index.js in components directory)
const outputFile = path.join(componentsDir, 'index.js')

// Read all folders in the components directory
const componentFolders = fs.readdirSync(componentsDir).filter((folder) => {
  const folderPath = path.join(componentsDir, folder)
  return fs.statSync(folderPath).isDirectory()
})

// Generate import statements and named exports for each folder
const importStatements = []
const exportNames = []

componentFolders.forEach((folder) => {
  const folderPath = path.join(componentsDir, folder)

  // Find the `.vue` file in the folder
  const vueFile = fs.readdirSync(folderPath).find((file) => file.endsWith('.vue'))

  if (!vueFile) {
    console.warn(`No .vue file found in folder: ${folder}`)
    return
  }

  // Extract the component name from the `.vue` file name
  const componentName = vueFile.replace('.vue', '')

  // Generate the import statement
  importStatements.push(`import ${componentName} from './${folder}/${vueFile}'`)

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