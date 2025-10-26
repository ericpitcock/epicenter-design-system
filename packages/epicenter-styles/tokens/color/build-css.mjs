import chokidar from 'chokidar'
import fs from 'fs'
import glob from 'glob' // Corrected import for CommonJS module
import yaml from 'js-yaml'
import path from 'path' // Import the path module

function loadYAMLFiles(pattern) {
  const yamlData = {}
  const files = glob.sync(pattern) // Correctly use glob.sync for CommonJS
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

  const fileName = path.join('..', '..', 'scss', 'color', `_${path.basename(filePath).replace('.yaml', '.scss')}`) // Construct the new file path

  const hasChildProperties = Object.values(yamlData).some(
    value => typeof value === 'object'
  )

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
  console.log(`SCSS file generated: ${fileName}`)
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

const watcher = chokidar.watch('./*.yaml')

watcher.on('change', () => {
  console.log('YAML file changed, regenerating SCSS...')
  main() // Re-run the script to generate updated SCSS
})

main() // Initial run