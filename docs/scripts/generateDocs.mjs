import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import { globSync } from 'glob'
import { parse } from 'vue-docgen-api'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Paths
const COMPONENTS_DIR = path.resolve(__dirname, '../../packages/epicenter-components-vue/src/components') // Component directory
const SCSS_DIR = path.resolve(__dirname, '../../packages/epicenter-styles/scss/components') // Styles directory
const OUTPUT_DIR = path.resolve(__dirname, '../components') // Output directory for docs
const PROPERTY_API = path.resolve(__dirname, '../../packages/epicenter-styles/dist/custom-properties.json')

// The custom-property API, emitted by epicenter-styles' validate step. Keyed by
// block so a component page can be matched to the properties it exposes.
const propertyApi = fs.existsSync(PROPERTY_API)
  ? JSON.parse(fs.readFileSync(PROPERTY_API, 'utf-8'))
  : { components: [] }

if (!propertyApi.components.length) {
  console.warn('⚠  dist/custom-properties.json not found — run `npm run build` in packages/epicenter-styles first.')
}

const GROUP_LABELS = {
  box: 'Box', spacing: 'Spacing', surface: 'Surface',
  border: 'Border', text: 'Text', effect: 'Effect', layout: 'Layout'
}

// Renders the component's custom-property contract: what a consumer can set from
// the outside, without :deep() and without out-specifying anything.
function renderPropertyTable(fileName) {
  const block = toKebabCase(fileName)
  const entry = propertyApi.components.find(component => component.block === block)
  if (!entry?.properties.length) return ''

  const byGroup = new Map()
  for (const property of entry.properties) {
    const group = GROUP_LABELS[property.group] ?? 'Other'
    if (!byGroup.has(group)) byGroup.set(group, [])
    byGroup.get(group).push(property)
  }

  let markdown = `
## CSS Custom Properties

Set any of these with a selector that matches \`${entry.class}\` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no \`!important\`, no \`:deep()\`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

\`\`\`css
.my-app ${entry.class} {
  ${entry.properties[0].name}: /* … */;
}
\`\`\`
`

  for (const [group, properties] of byGroup) {
    markdown += `
### ${group}

| Property | Default | State |
|---|---|---|
${properties
        .map(property => {
          const value = String(property.default).replace(/\s+/g, ' ').trim()
          return `| \`${property.name}\` | \`${value}\` | ${property.state ?? '—'} |`
        })
        .join('\n')}
`
  }

  return markdown
}

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
const vueFiles = globSync(`${COMPONENTS_DIR}/**/*.vue`)

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
            (prop) => {
              // Escape default value to prevent multi-line content in table cells
              const defaultValue = prop.defaultValue?.value
                ? prop.defaultValue.value.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim()
                : '-'
              return `| \`${prop.name}\` | ${prop.description || '-'} | \`${prop.type?.name || '-'}\` | \`${defaultValue}\` |`
            }
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
            (slot) => {
              // Escape HTML-like content in descriptions (e.g., <ArrowRight01 />)
              const description = (slot.description || 'No description available.')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
              return `| \`${slot.name}\` | ${description} |`
            }
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

    markdown += renderPropertyTable(fileName)

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