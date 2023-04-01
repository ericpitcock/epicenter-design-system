import colors from '../../packages/epicenter-styles/tokens/color/color'

// an array of color names like 'red-50'
const colorNames = Object.keys(colors).reduce((acc, color) => {
  const colorValues = Object.keys(colors[color]).map((value) => {
    return `${color}-${value}`
  })
  return [...acc, ...colorValues]
}, [])

// None option
colorNames.unshift('None')

// an object with values like 'red-50': '#fef2f2'
const colorValues = Object.keys(colors).reduce((acc, color) => {
  const colorValues = Object.keys(colors[color]).reduce((acc, value) => {
    return {
      ...acc,
      [`${color}-${value}`]: colors[color][value].value
    }
  }, {})
  return {
    ...acc,
    ...colorValues
  }
}, {})

// None option
colorValues['None'] = ''

export {
  colorNames,
  colorValues
}
