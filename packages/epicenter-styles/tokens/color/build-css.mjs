import fs from 'fs'
import yaml from 'js-yaml'
import chokidar from 'chokidar'
import * as glob from 'glob'

function loadYAMLFiles(pattern) {
  const yamlData = {}
  const files = glob.sync(pattern)
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

  let cssOutput = `/* DO NOT EDIT DIRECTLY */\n`

  const fileName = filePath.replace('.yaml', '.scss')

  // check if child properties are present
  const hasChildProperties = Object.values(yamlData).some(
    value => typeof value === 'object'
  )

  // if there are no child properties return all values in the root
  if (!hasChildProperties) {
    cssOutput += `:root {\n`

    Object.entries(yamlData).forEach(([key, value]) => {
      cssOutput += `  --${key}: ${value};\n`
    })

    cssOutput += `}\n`
  } else {

    cssOutput += `:root {\n`

    Object.entries(yamlData).forEach(([key, value]) => {
      cssOutput += `  --${key}: ${value.dark};\n`
    })

    cssOutput += `}\n`

    cssOutput += `html[data-color-theme='light'] {\n`

    Object.entries(yamlData).forEach(([key, value]) => {
      cssOutput += `  --${key}: ${value.light || value.dark};\n`
    })

    cssOutput += `}\n`
  }

  fs.writeFileSync(fileName, cssOutput)
}

function main() {
  console.log('Watching for changes in YAML files...')
  try {
    const yamlFilesData = loadYAMLFiles('./*.yaml')
    for (const [filePath, yamlData] of Object.entries(yamlFilesData)) {
      writeCSS(filePath, yamlData)
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

// Watch for changes in YAML files
const watcher = chokidar.watch('./*.yaml')

watcher.on('change', () => {
  console.log('YAML file changed, regenerating CSS...')
  main() // Re-run the script to generate updated CSS
})

// Initial run
main()
