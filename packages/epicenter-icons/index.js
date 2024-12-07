const loadIcon = async (name) => {
  try {
    const { default: rawSvg } = await import(`./icons/${name}.svg?raw`)
    return rawSvg
  } catch (error) {
    console.error(`Failed to load icon: ${name}`, error)
  }
}

// array of icon names

export { loadIcon }

// Dynamically import all SVG files
// const iconFiles = import.meta.glob('./icons/*.svg', { as: 'raw' })

// // Generate an array of icon names (without extensions)
// const icons = Object.keys(iconFiles).map((filePath) => {
//   return filePath.split('/').pop().replace('.svg', '') // Extract file name without extension
// })

// // Function to load an icon dynamically
// const loadIcon = async (name) => {
//   try {
//     const { default: rawSvg } = await iconFiles[`./icons/${name}.svg`]()
//     return rawSvg
//   } catch (error) {
//     console.error(`Failed to load icon: ${name}`, error)
//     return null
//   }
// }

// // Export the icon loader and icon names
// export { loadIcon, icons }