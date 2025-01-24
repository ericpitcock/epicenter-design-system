import fs from 'fs'
import path from 'path'
import glob from 'glob'
import { EXCLUDED_COMPONENTS } from './excludedComponents.js'

// Resolve __dirname equivalent in ES modules
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Path to the components directory
const componentsPath = path.resolve(__dirname, '../packages/epicenter-vue-components/src/components')

// Find all .vue files in the components directory and subdirectories
const vueFiles = glob.sync(`${componentsPath}/**/*.vue`)

// Generate sidebar items dynamically
const sidebarItems = vueFiles
  .map((filePath) => {
    const fileName = path.basename(filePath, '.vue')

    // Skip excluded components
    if (EXCLUDED_COMPONENTS.includes(fileName)) {
      console.log(`Skipping excluded component: ${fileName}`)
      return null
    }

    return {
      text: fileName,
      link: `/components/${fileName}`
    }
  })
  .filter(Boolean) // Remove null values

// Sidebar configuration
const sidebarConfig = {
  text: 'Components',
  items: sidebarItems
}

// Path to the output JSON file
const outputFilePath = path.resolve(__dirname, '../docs/.vitepress/sidebarConfig.json')

// Write the sidebar configuration to the JSON file
fs.writeFileSync(outputFilePath, JSON.stringify(sidebarConfig, null, 2))
console.log('Sidebar configuration generated successfully.')