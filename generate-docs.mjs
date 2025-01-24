import { parse } from 'vue-docgen-api'
import fs from 'fs'
import path from 'path'
import glob from 'glob'

// Paths
const INPUT_PATH = './packages/epicenter-vue-components/src/components/**/*.vue' // Input path
const OUTPUT_DIR = './docs/components' // Output path

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
}

// Process each .vue file in the input path
glob.sync(INPUT_PATH).forEach(async (componentPath) => {
  const fileName = path.basename(componentPath, '.vue')

  try {
    const doc = await parse(componentPath)

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
    `

    // Write Markdown file
    const outputFile = path.join(OUTPUT_DIR, `${fileName}.md`)
    fs.writeFileSync(outputFile, markdown.trim())
    console.log(`Generated docs for: ${fileName}`)
  } catch (error) {
    console.error(`Failed to generate docs for: ${fileName}`, error)
  }
})