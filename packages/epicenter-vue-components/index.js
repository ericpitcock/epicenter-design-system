import components from './src/components'

const Epicenter = {
  install(Vue) {
    for (const prop in components) {
      if (Object.prototype.hasOwnProperty.call(components, prop)) {
        const component = components[prop]
        Vue.component(component.name, component)
      }
    }
  }
}

export default Epicenter