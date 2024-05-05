const fs = require('fs')
const yaml = require('js-yaml')
const chokidar = require('chokidar')
const glob = require('glob')

// capture arguments passed to the script if needed
// const args = process.argv.slice(2)

function loadYAMLFiles(pattern) {
  const yamlData = {}
  const files = glob.sync(pattern)
  files.forEach(file => {
    try {
      const data = yaml.load(fs.readFileSync(file, 'utf8'))
      Object.assign(yamlData, data)
    } catch (error) {
      console.error('Error:', error)
    }
  })
  return yamlData
}

function writeCSS(yamlData) {

  let cssOutput = `/* DO NOT EDIT DIRECTLY */\n`

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

  fs.writeFileSync('_variables.css', cssOutput)
}

function main() {
  try {
    const yamlData = loadYAMLFiles('./*.yaml')
    writeCSS(yamlData)
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
