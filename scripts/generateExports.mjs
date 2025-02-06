import fs from 'fs'
import { resolve, join } from 'path'
import { fileURLToPath } from 'url'

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = resolve(__filename, '..')

// Define paths the same way as in buildVueComponents.mjs
const packageDir = resolve(__dirname, '../packages/epicenter-vue-components')
const srcDir = resolve(packageDir, 'src')
const componentsDir = resolve(srcDir, 'components')

export function generateComponentExports() {
  if (!fs.existsSync(componentsDir)) {
    console.error(`❌ Components directory not found at: ${componentsDir}`)
    return
  }

  // Output file (index.js in components directory)
  const outputFile = join(componentsDir, 'index.js')

  // Helper function to recursively find all .vue files
  const findVueFiles = (dir) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    const files = entries.flatMap((entry) => {
      const fullPath = join(dir, entry.name)
      return entry.isDirectory() ? findVueFiles(fullPath) : fullPath
    })
    return files.filter((file) => file.endsWith('.vue'))
  }

  // Find all .vue files in the components directory
  const vueFiles = findVueFiles(componentsDir)

  if (vueFiles.length === 0) {
    console.log('⚠️ No Vue components found. Skipping export generation.')
    return
  }

  // Generate import statements and named exports
  const importStatements = vueFiles.map((filePath) => {
    const relativePath = join('./', filePath.replace(componentsDir, '').replace(/\\/g, '/'))
    const componentName = filePath.split('/').pop().replace('.vue', '')
    return `import ${componentName} from '${relativePath}'`
  })

  const exportNames = vueFiles.map((filePath) => filePath.split('/').pop().replace('.vue', ''))
  const namedExports = `export {\n  ${exportNames.join(',\n  ')}\n}`
  const defaultExport = `export default {\n  ${exportNames.join(',\n  ')}\n}`
  const outputContent = `${importStatements.join('\n')}\n\n${namedExports}\n\n${defaultExport}`

  // Write the output file
  fs.writeFileSync(outputFile, outputContent)

  console.log(`✅ Export file generated at: ${outputFile}`)
}