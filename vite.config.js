import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import ViteYaml from '@modyfi/vite-plugin-yaml'
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'
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
      '@': fileURLToPath(new URL('./packages/epicenter-vue-components/src', import.meta.url)),
      // use icons directly from source
      '@ericpitcock/epicenter-icons': fileURLToPath(new URL('./packages/epicenter-icons/index.js', import.meta.url)),
      '@ericpitcock/epicenter-styles': fileURLToPath(new URL('./packages/epicenter-styles', import.meta.url)),
    }
  },
})
