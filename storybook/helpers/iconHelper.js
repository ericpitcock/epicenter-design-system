// import iconsArray from './iconsArray' as icons
import { iconsArray as icons } from './iconsArray'

// array of icon objects: { name: 'icon-name' }
const iconObjects = icons.map(icon => ({ name: icon }))

// array of icon options: ['None', 'icon-name']
const iconOptions = ['None']
iconOptions.push(...icons)

// object mapping icon names to icon objects
const iconMapping = { None: undefined }
icons.forEach(icon => {
  iconMapping[icon] = { name: icon }
})

export { iconMapping, iconObjects, iconOptions, icons }

