import fs from 'fs'
import glob from 'glob'
import path from 'path'
import { fileURLToPath } from 'url'
import { parse } from 'vue-docgen-api'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Paths
const COMPONENTS_DIR = path.resolve(__dirname, '../../packages/epicenter-vue-components/src/components') // Component directory
const SCSS_DIR = path.resolve(__dirname, '../../packages/epicenter-styles/scss/components') // Styles directory
const OUTPUT_DIR = path.resolve(__dirname, '../components') // Output directory for docs

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
}

function toKebabCase(name) {
  return name
    .replace(/^Ep/, '') // Remove 'Ep' prefix
    .replace(/([a-z])([A-Z])/g, '$1-$2') // Convert camelCase to kebab-case
    .replace(/[\s_]+/g, '-') // Replace spaces/underscores with dashes
    .toLowerCase()
}

// Helper: Get associated SCSS file
function getScssContent(fileName) {
  const scssFileName = `_${toKebabCase(fileName)}.scss`
  const scssFilePath = path.join(SCSS_DIR, scssFileName)

  if (fs.existsSync(scssFilePath)) {
    return fs.readFileSync(scssFilePath, 'utf-8')
  }
  return null
}

// Find all .vue files in the components directory and subdirectories
const vueFiles = glob.sync(`${COMPONENTS_DIR}/**/*.vue`)

// Process each .vue file
vueFiles.forEach(async (filePath) => {
  const fileName = path.basename(filePath, '.vue') // Get the file name without extension

  const fileContent = fs.readFileSync(filePath, 'utf-8') // Read the .vue file content

  // Look for a custom notes file (e.g., EpButton.notes.md)
  const notesFilePath = path.join(path.dirname(filePath), `${fileName}.notes.md`)
  let customNotesSection = ''

  if (fs.existsSync(notesFilePath)) {
    const customNotes = fs.readFileSync(notesFilePath, 'utf-8')
    console.log(`Found custom notes for ${fileName}`)
    customNotesSection = `

${customNotes}
    `
  }

  // Try to locate the associated SCSS file
  const scssContent = getScssContent(fileName)

  try {
    console.log(`Processing file: ${fileName}`) // Debugging: Show progress

    const doc = await parse(filePath)

    let markdown = `# ${doc.displayName}

${doc.description || ''}${customNotesSection}
`

    // Sections
    let missingSections = []

    if (doc.props?.length) {
      markdown += `
## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
${doc.props
          .map(
            (prop) =>
              `| \`${prop.name}\` | ${prop.description || '-'} | \`${prop.type?.name || '-'}\` | \`${prop.defaultValue?.value || '-'}\` |`
          )
          .join('\n')}
`
    } else {
      missingSections.push('props')
    }

    if (doc.events?.length) {
      markdown += `
## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
${doc.events
          .map((event) => {
            return `| \`${event.name}\` | ${event.description || '-'} | - |`
          })
          .join('\n')}
`
    } else {
      missingSections.push('events')
    }

    if (doc.slots?.length) {
      markdown += `
## Slots
| Name | Description |
|------|-------------|
${doc.slots
          .map(
            (slot) =>
              `| \`${slot.name}\` | ${slot.description || 'No description available.'} |`
          )
          .join('\n')}
`
    } else {
      missingSections.push('slots')
    }

    // Add info block if any sections are missing
    if (missingSections.length > 0) {
      markdown += `

::: info
This component does not use ${missingSections.join(', ')}.
:::
`
    }

    // Component code
    markdown += `
## Component Code

\`\`\`vue
${fileContent}
\`\`\`
`

    // SCSS
    if (scssContent) {
      markdown += `
## Styles (SCSS)

\`\`\`scss
${scssContent}
\`\`\`
`
    }

    // Write the Markdown file
    const outputFile = path.join(OUTPUT_DIR, `${fileName}.md`)
    fs.writeFileSync(outputFile, markdown.trim())
    console.log(`Generated docs for: ${fileName}`)
  } catch (error) {
    console.error(`Failed to generate docs for: ${fileName}`, error)
  }
})