import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'
import sidebarConfig from './sidebarConfig.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Epicenter Docs',
  description: '',
  themeConfig: {
    sidebar: [
      {
        text: 'Getting Started',
        link: '/getting-started'
      },
      sidebarConfig,
      {
        text: 'Composables',
        items: [
          {
            text: 'useActionsMenu',
            link: '/composables/useActionsMenu'
          },
          {
            text: 'useCalculatedHeight',
            link: '/composables/useCalculatedHeight'
          },
          {
            text: 'useTheme',
            link: '/composables/useTheme'
          },
          {
            text: 'useValidation',
            link: '/composables/useValidation'
          }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ericpitcock/epicenter-design-system' }
    ]
  },
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../packages/epicenter-components-vue/src', import.meta.url)),
        // use icons directly from source
        '@ericpitcock/epicenter-icons-vue': fileURLToPath(new URL('../../packages/epicenter-icons-vue', import.meta.url)),
        '@ericpitcock/epicenter-styles': fileURLToPath(new URL('../../packages/epicenter-styles', import.meta.url)),
      }
    },
  }
})
