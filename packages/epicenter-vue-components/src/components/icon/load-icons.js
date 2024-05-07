async function loadIcons() {
  const svgIconsReq = import.meta.glob('./icons/**/*.svg', {
    query: '?raw',
    import: 'default',
  })

  let svgIcons = []

  for (const path in svgIconsReq) {
    if (Object.hasOwnProperty.call(svgIconsReq, path)) {
      // Extract the icon name from the path
      const name = path.match(/\/([^/]+)\.svg$/)[1]

      // Import the SVG content
      // const content = await svgIconsReq[path]()

      // Push the icon object to the array
      svgIcons.push({ name })
    }
  }

  return svgIcons
}

// [{ name: 'arrow-up' }, { name: 'arrow-down' }, ...]
const iconNamesObject = await loadIcons()

// 'arrow-up'
const iconNamesArray = iconNamesObject.map(icon => icon.name)

// arrow-up: { name: 'arrow-up' } 
const iconNamesMapping = iconNamesArray.reduce((acc, name) => {
  acc[name] = { name }
  return acc
}, {})

export { iconNamesObject, iconNamesArray, iconNamesMapping }
