import components from './src/components'

const Epicenter = {
  install(app, options = {}) {
    const include = options.include || Object.keys(components)
    for (const name of include) {
      if (components[name]) {
        app.component(name, components[name]) // Register globally
      }
    }
  },
}

export default Epicenter
export * from './src/components' // For tree-shakable imports