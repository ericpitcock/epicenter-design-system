export function loadIcons() {
  return import.meta.glob('./icons/**/*.svg', {
    query: '?raw',
    import: 'default',
  })
    .then(async allIcons => {
      let iconNames = []

      for (const path in allIcons) {
        if (Object.hasOwnProperty.call(allIcons, path)) {
          // Extract the icon name from the path
          const name = path.match(/\/([^/]+)\.svg$/)[1]
          // Push the icon name to the array
          iconNames.push(name)
        }
      }

      const iconNamesMap = iconNames.reduce((acc, name) => {
        acc[name] = { name }
        return acc
      }, {})

      return { iconNames, iconNamesMap }
    })
}
