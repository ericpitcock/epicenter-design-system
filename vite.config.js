import { fileURLToPath, URL } from 'node:url'

import ViteYaml from '@modyfi/vite-plugin-yaml'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    }
  },
  plugins: [
    vue(),
    react(),
    svgLoader(),
    ViteYaml(),
  ],
  resolve: {
    alias: {
      // for storybook
      '@': fileURLToPath(new URL('./packages/epicenter-components-vue/src', import.meta.url)),
      // use packages directly from source
      '@ericpitcock/epicenter-icons-vue': fileURLToPath(new URL('./packages/epicenter-icons-vue', import.meta.url)),
      '@ericpitcock/epicenter-icons-react': fileURLToPath(new URL('./packages/epicenter-icons-react', import.meta.url)),
      '@ericpitcock/epicenter-styles': fileURLToPath(new URL('./packages/epicenter-styles/dist', import.meta.url)),
      '@ericpitcock/epicenter-components-vue': fileURLToPath(new URL('./packages/epicenter-components-vue/dist', import.meta.url)),
    }
  },
})
