import { initializeTheme } from '../composables/useTheme.js'

/**
 * Vue plugin for Epicenter theme management
 * 
 * Usage:
 *   import themePlugin from '@ericpitcock/epicenter-vue-components/dist/plugins/themePlugin'
 *   app.use(themePlugin)
 * 
 * Or with options:
 *   app.use(themePlugin, { exposeGlobally: true })
 */
export default {
  install(app, options = {}) {
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
