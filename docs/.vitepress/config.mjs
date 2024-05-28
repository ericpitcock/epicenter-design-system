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
  }
})
