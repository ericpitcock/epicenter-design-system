import { loadIcons } from './iconLoader.js'

const iconNamesObject = await loadIcons()

// array of icon names: 'arrow-up'
const iconOptions = iconNamesObject.map((icon) => icon.name)

// add 'None' option to the list
iconOptions.push('None')

// arrow-up: { name: 'arrow-up' }
const iconMapping = iconOptions.reduce((acc, name) => {
  acc[name] = { name }
  return acc
}, {})

iconMapping.None = undefined

export { iconNamesObject, iconOptions, iconMapping }
