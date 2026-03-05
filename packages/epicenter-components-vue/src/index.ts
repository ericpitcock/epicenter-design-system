import type { App, Component } from 'vue'

import components from './components'

const Epicenter = {
  install(app: App) {
    for (const [name, component] of Object.entries(components as Record<string, Component>)) {
      app.component(name, component)
    }
  },
}

export default Epicenter
export * from './components'
export * from './composables'
export * from './plugins'
export * from './types'