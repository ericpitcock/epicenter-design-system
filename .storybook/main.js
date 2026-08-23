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

  viteFinal: async (config, { configType }) => {
    /**
     * Dev resolves the Vue package to src/; the static build leaves it on the
     * published dist/.
     *
     * dist/ is a plain copy of src/ (scripts/build.mjs — no compile step), so
     * both load identical bytes. But dist/ is excluded by the watch ignore
     * list below, and the build `remove()`s the directory before recopying,
     * which drops chokidar's watch on it. Resolving there during dev meant
     * every component edit needed `npm run build:components-vue` *and* a
     * dev-server restart — and a half-stale server would serve fresh CSS
     * against cached markup, which looks exactly like a broken change.
     *
     * Keeping the static build on dist/ means `build-storybook` still exercises
     * the artifact that actually gets published, so a broken copy step fails
     * there rather than silently at publish time.
     */
    const devAliases = configType === 'DEVELOPMENT'
      ? {
        '@ericpitcock/epicenter-components-vue': resolve(
          __dirname,
          '../packages/epicenter-components-vue/src/index.ts'
        ),
      }
      : {}

    return {
      ...config,
      resolve: {
        ...(config.resolve ?? {}),
        extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.vue'],
        preserveSymlinks: true,
        alias: {
          ...config.resolve?.alias,
          ...devAliases,
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
