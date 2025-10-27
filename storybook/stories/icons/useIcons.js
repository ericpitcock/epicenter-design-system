import { computed, defineAsyncComponent } from 'vue'

import iconsData from '../../../packages/epicenter-icons/icons.json'

export const useIcons = (leftIconName, rightIconName) => {
  const getIconComponent = (iconName) => {
    return computed(() => {
      if (iconName.value && iconName.value !== 'None') {
        return defineAsyncComponent(() => import(`@ericpitcock/epicenter-icons/icons/${iconName.value}.js`))
      }
      return null
    })
  }

  const iconRightComponent = getIconComponent(rightIconName)
  const iconLeftComponent = getIconComponent(leftIconName)

  return {
    iconLeftComponent,
    iconRightComponent
  }
}

export const getComponentName = (iconName) => {
  // Handle specific naming conflicts first
  const conflicts = {
    'trade-mark': 'TrademarkCircle',
    'trademark': 'TrademarkRectangle',
    'finger-print-scan': 'FingerprintScan01',
    'fingerprint-scan': 'FingerprintScan02',
    'four-square': 'FourNumberSquare',
    'foursquare': 'FoursquareLogo',
    're:': 'ReColon',
    'c++': 'CPlusPlus',
  }

  if (conflicts[iconName]) {
    return conflicts[iconName]
  }

  // Standard conversion: kebab-case to PascalCase
  let name = iconName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')

  // Handle numbers at the start
  if (/^\d/.test(name)) {
    name = 'Num' + name
  }

  // Handle special characters
  name = name
    .replace(/Colon/g, 'Colon')
    .replace(/Dot/g, 'Dot')
    .replace(/Plus/g, 'Plus')

  return name
}

// Generate all component names
export const getAllComponentNames = () => {
  return iconsData.map(icon => getComponentName(icon.name))
}

// Create dynamic imports object
export const createIconImports = () => {
  const imports = {}
  iconsData.forEach(icon => {
    const componentName = getComponentName(icon.name)
    imports[componentName] = () => import(`../../../packages/epicenter-icons/epicenter-icons/${componentName}.js`)
  })
  return imports
}

// Array of icon names from icons.json
const iconNames = iconsData.map(icon => icon.name)

// Array of component names
const componentNames = iconNames.map(getComponentName)

// add 'None' option at the start
componentNames.unshift('None')

export { componentNames }

export { iconsData }