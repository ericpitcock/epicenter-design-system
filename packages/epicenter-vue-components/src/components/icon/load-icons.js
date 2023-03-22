const svgIconsReq = require.context('!!raw-loader!./icons', true, /.\.svg$/)

const svgIcons = svgIconsReq.keys().map(name => ({
    name: name.slice(2, -4),
    content: svgIconsReq(name).default
}))

const iconNames = svgIcons.map(icon => icon.name)

iconNames.unshift('none')

const iconNamesMapping = iconNames.reduce((acc, name) => {
  acc[name] = { name }
  return acc
}, {})

iconNamesMapping.none = undefined

export { svgIcons, iconNames, iconNamesMapping }