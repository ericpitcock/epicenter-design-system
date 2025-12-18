import chokidar from 'chokidar'
import fs from 'fs'
import glob from 'glob'
import yaml from 'js-yaml'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function loadYAMLFiles(pattern) {
  const yamlData = {}
  const fullPattern = path.resolve(__dirname, pattern)
  const files = glob.sync(fullPattern)
  files.forEach(file => {
    try {
      const data = yaml.load(fs.readFileSync(file, 'utf8'))
      yamlData[file] = data
    } catch (error) {
      console.error('Error:', error)
    }
  })
  return yamlData
}

function writeCSS(filePath, yamlData) {
  let cssOutput = `/* stylelint-disable no-duplicate-selectors */\n/* DO NOT EDIT DIRECTLY */\n`

  const fileName = path.resolve(__dirname, '..', 'scss', 'color', `_${path.basename(filePath).replace('.yaml', '.scss')}`)
  const isThemesFile = path.basename(filePath) === 'themes.yaml'

  const hasChildProperties = Object.values(yamlData).some(
    value => typeof value === 'object'
  )

  if (!hasChildProperties) {
    cssOutput += `:root {\n`

    Object.entries(yamlData).forEach(([key, value]) => {
      cssOutput += `  --${key}: ${value};\n`
    })

    cssOutput += `}\n`
  } else if (isThemesFile) {
    // Use modern color-scheme and light-dark() for themes.yaml
    cssOutput += `:root { color-scheme: light dark; }\n`
    cssOutput += `.dark-theme { color-scheme: dark; }\n`
    cssOutput += `.light-theme { color-scheme: light; }\n\n`

    cssOutput += `:root {\n`

    Object.entries(yamlData).forEach(([key, value]) => {
      const lightValue = value.light || value.dark
      const darkValue = value.dark
      cssOutput += `  --${key}: light-dark(${lightValue}, ${darkValue});\n`
    })

    cssOutput += `}\n`
  } else {
    // Legacy approach for non-themes files
    const darkSelector = '.dark-theme'
    const lightSelector = '.light-theme'

    cssOutput += `${darkSelector} {\n`

    Object.entries(yamlData).forEach(([key, value]) => {
      cssOutput += `  --${key}: ${value.dark};\n`
    })

    cssOutput += `}\n`

    cssOutput += `${lightSelector} {\n`

    Object.entries(yamlData).forEach(([key, value]) => {
      cssOutput += `  --${key}: ${value.light || value.dark};\n`
    })

    cssOutput += `}\n`
  }

  fs.writeFileSync(fileName, cssOutput)
  console.log(`SCSS file generated: ${fileName}`)
}

function main() {
  console.log('Watching for changes in YAML files...')
  try {
    const yamlFilesData = loadYAMLFiles('../tokens/color/*.yaml')
    for (const [filePath, yamlData] of Object.entries(yamlFilesData)) {
      writeCSS(filePath, yamlData)
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

const watcher = chokidar.watch(path.resolve(__dirname, '../tokens/color/*.yaml'))

watcher.on('change', () => {
  console.log('YAML file changed, regenerating SCSS...')
  main()
})

main()