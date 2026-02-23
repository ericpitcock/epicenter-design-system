import { fileURLToPath, URL } from 'node:url'

import ViteYaml from '@modyfi/vite-plugin-yaml'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   target: 'esnext' //browsers can handle the latest ES features
  // },
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
      '@': fileURLToPath(new URL('./packages/epicenter-components-vue/src', import.meta.url)),
      // use icons directly from source
      '@ericpitcock/epicenter-icons-vue': fileURLToPath(new URL('./packages/epicenter-icons-vue', import.meta.url)),
      '@ericpitcock/epicenter-icons-react': fileURLToPath(new URL('./packages/epicenter-icons-react', import.meta.url)),
      '@ericpitcock/epicenter-styles': fileURLToPath(new URL('./packages/epicenter-styles/dist', import.meta.url)),
      '@ericpitcock/epicenter-components-vue': fileURLToPath(new URL('./packages/epicenter-components-vue/dist', import.meta.url)),
    }
  },
})
