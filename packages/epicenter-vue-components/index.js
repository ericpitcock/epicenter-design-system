import components from './src/components'

const Epicenter = {
  install(app) {
    for (const [name, component] of Object.entries(components)) {
      app.component(name, component) // Register each component globally
    }
  },
}

export default Epicenter
export * from './src/components' // For tree-shakable imports