import { parse } from 'vue-docgen-api'
import fs from 'fs'
import path from 'path'
import glob from 'glob'

// Resolve __dirname equivalent in ES modules
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Paths
const COMPONENTS_DIR = path.resolve(__dirname, './packages/epicenter-vue-components/src/components')
const OUTPUT_DIR = './docs/components'

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
}

// Find all .vue files in the components directory and subdirectories
const vueFiles = glob.sync(`${COMPONENTS_DIR}/**/*.vue`)

// Process each .vue file
vueFiles.forEach(async (filePath) => {
  const fileName = path.basename(filePath, '.vue') // Get the file name without extension
  const fileContent = fs.readFileSync(filePath, 'utf-8') // Read the .vue file content

  try {
    const doc = await parse(filePath)

    // Generate Markdown content
    const markdown = `
# ${doc.displayName}

${doc.description || 'No description provided.'}

## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
${doc.props
        ?.map(
          (prop) =>
            `| \`${prop.name}\` | ${prop.description || '-'} | \`${prop.type?.name || '-'
            }\` | \`${prop.defaultValue?.value || '-'}\` |`
        )
        .join('\n') || 'No props available.'}

## Events
| Name | Description | Payload |
|------|-------------|---------|
${doc.events
        ?.map(
          (event) =>
            `| \`${event.name}\` | ${event.description || '-'} | ${event.type?.names?.join(', ') || '-'
            } |`
        )
        .join('\n') || 'No events available.'}

## Slots
| Name | Description |
|------|-------------|
${doc.slots
        ?.map(
          (slot) =>
            `| \`${slot.name}\` | ${slot.description || 'No description available.'} |`
        )
        .join('\n') || 'No slots available.'}

## Component Code

\`\`\`vue
${fileContent}
\`\`\`
    `

    // Write the Markdown file
    const outputFile = path.join(OUTPUT_DIR, `${fileName}.md`)
    fs.writeFileSync(outputFile, markdown.trim())
    console.log(`Generated docs for: ${fileName}`)
  } catch (error) {
    console.error(`Failed to generate docs for: ${fileName}`, error)
  }
})