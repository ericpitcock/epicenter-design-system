// load all raw svg icons from a directory into an array using vite
const svgIconsReq = import.meta.glob('./icons/**/*.svg', {
  query: '?raw',
  import: 'default',
})

const svgIcons = []

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

const iconNames = svgIcons.map(icon => icon.name)

iconNames.unshift('none')

const iconNamesMapping = iconNames.reduce((acc, name) => {
  acc[name] = { name }
  return acc
}, {})

iconNamesMapping.none = undefined

export { svgIcons, iconNames, iconNamesMapping }