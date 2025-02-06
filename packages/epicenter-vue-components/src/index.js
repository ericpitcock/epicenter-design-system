import components from './components'

const Epicenter = {
  install(app) {
    for (const [name, component] of Object.entries(components)) {
      app.component(name, component) // Register each component globally
    }
  },
}

export default Epicenter
export * from './components' // For tree-shakable imports