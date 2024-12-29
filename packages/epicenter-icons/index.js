const loadIcon = async (name) => {
  try {
    const { default: rawSvg } = await import(`./icons/${name}.svg?raw`)
    return rawSvg
  } catch (error) {
    console.error(`Failed to load icon: ${name}`, error)
  }
}

export { loadIcon }