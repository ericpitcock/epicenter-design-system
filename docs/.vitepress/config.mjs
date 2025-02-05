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
      sidebarConfig
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ericpitcock/epicenter-design-system' }
    ]
  },
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../packages/epicenter-vue-components/src', import.meta.url)),
        // use icons directly from source
        '@ericpitcock/epicenter-icons': fileURLToPath(new URL('../../packages/epicenter-icons/index.js', import.meta.url)),
        '@ericpitcock/epicenter-styles': fileURLToPath(new URL('../../packages/epicenter-styles', import.meta.url)),
      }
    },
  }
})
