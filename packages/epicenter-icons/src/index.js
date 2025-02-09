import { iconMap } from './iconMap.js'

export const loadIcon = async (name) => {
  if (iconMap[name]) {
    try {
      const { default: rawSvg } = await iconMap[name]()
      return rawSvg
    } catch (error) {
      console.error(`Failed to load icon: ${name}`, error)
    }
  } else {
    console.error(`Icon not found: ${name}`)
  }

  // Optional fallback SVG
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line></svg>'
}