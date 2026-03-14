import type { App, Plugin, Ref } from 'vue'

import { initializeTheme } from '../composables/useTheme'
import type { Theme } from '../types'

export interface ThemePluginOptions {
  exposeGlobally?: boolean
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $theme?: Ref<Theme>
  }
}

/**
 * Vue plugin for Epicenter theme management
 *
 * Usage:
 *   import themePlugin from '@ericpitcock/epicenter-components-vue/dist/plugins/themePlugin'
 *   app.use(themePlugin)
 *
 * Or with options:
 *   app.use(themePlugin, { exposeGlobally: true })
 */
const themePlugin: Plugin = {
  install(app: App, options: ThemePluginOptions = {}) {
    const { exposeGlobally = false } = options

    // Initialize the theme system
    const theme = initializeTheme()

    // Optionally expose theme globally on app instance
    if (exposeGlobally) {
      app.config.globalProperties.$theme = theme
    }

    // Provide theme to all components
    app.provide('epicenterTheme', theme)
  }
}

export default themePlugin
