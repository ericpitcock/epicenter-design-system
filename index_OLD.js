import * as components from './src/components'

// add install method to components
Object.keys(components).forEach(key => {
  components[key].install = function (Vue) {
    Vue.component(components[key].name, components[key])
  }
})

// export components
// export default components

// export install method
export const install = function (Vue) {
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

export * from './src/components'

// // import components
// import { Button, Select } from 'my-ui'

// // install components
// Vue.use(Button)

// // use components
// <Button>Button</Button>

// // use components
// <Select>
//   <Option value="1">Option 1</Option>
// </Select>
