import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/** @type { import('@storybook/vue3-vite').StorybookConfig } */

const config = {
  stories: [
    '../packages/epicenter-components-vue/src/**/*.stories.js',
    '../packages/epicenter-components-vue/storybook/**/*.stories.js',
  ],

  addons: ['@storybook/addon-a11y'],

  staticDirs: ['../static'],

  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },

  viteFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...(config.resolve ?? {}),
        extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.vue'],
        preserveSymlinks: true,
        alias: {
          ...config.resolve?.alias,
          '@sb': resolve(__dirname, '../packages/epicenter-components-vue/storybook'),
        },
      },
      server: {
        ...(config.server ?? {}),
        fs: { ...(config.server?.fs ?? {}), strict: true },
        watch: {
          ignored: [
            '**/node_modules/**',
            '**/.git/**',
            '**/dist/**',
            '**/storybook-static/**',
            '**/docs/.vitepress/dist/**',
            '**/.cache/**',
            '**/.storybook-cache/**',
            '../static/**',
          ],
          usePolling: false,
        },
      },
      optimizeDeps: { include: ['vue', '@vueuse/core'] },
    }
  },

  core: {
    disableWhatsNewNotifications: true
  }
}
export default config
