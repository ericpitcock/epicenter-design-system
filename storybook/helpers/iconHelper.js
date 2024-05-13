async function loadIcons() {
  const svgIconsReq = import.meta.glob('../../packages/epicenter-vue-components/src/components/icon/icons/**/*.svg', {
    query: '?raw',
    import: 'default',
  })

  let svgIcons = []

  for (const path in svgIconsReq) {
    if (Object.hasOwnProperty.call(svgIconsReq, path)) {
      // Extract the icon name from the path
      const name = path.match(/\/([^/]+)\.svg$/)[1]

      // Import the SVG content
      const content = await svgIconsReq[path]()

      // Push the icon object to the array
      svgIcons.push({ name, content })
    }
  }

  return svgIcons
}

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
