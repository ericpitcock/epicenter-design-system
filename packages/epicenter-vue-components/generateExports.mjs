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

// Generate export statements for each folder
const exportStatements = componentFolders
  .map((folder) => {
    const folderPath = path.join(componentsDir, folder)

    // Find the `.vue` file in the folder
    const vueFile = fs.readdirSync(folderPath).find((file) => file.endsWith('.vue'))

    if (!vueFile) {
      console.warn(`No .vue file found in folder: ${folder}`)
      return null
    }

    // Extract the component name from the `.vue` file name
    const componentName = vueFile.replace('.vue', '')

    return `import { default as ${componentName} } from './${folder}/${vueFile}'`
  })
  .filter(Boolean) // Remove null entries

// Add a default export if needed
const defaultExport = `export default {
  ${componentFolders
    .map((folder) => {
      const folderPath = path.join(componentsDir, folder)
      const vueFile = fs.readdirSync(folderPath).find((file) => file.endsWith('.vue'))
      return vueFile ? vueFile.replace('.vue', '') : null
    })
    .filter(Boolean)
    .join(',\n  ')}
}
`

// Write the output file
fs.writeFileSync(outputFile, `${exportStatements.join('\n')}\n\n${defaultExport}`)

console.log(`Export file generated at: ${outputFile}`)