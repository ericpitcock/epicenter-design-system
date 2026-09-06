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
    /**
     * Both dev and the static build resolve the Vue package to src/, matching
     * .storybook-react/main.js.
     *
     * The static build used to resolve to dist/ instead, on the grounds that it
     * then exercised the artifact that actually gets published. That worked only
     * because dist/ was a verbatim copy of src/. It is a real Vite library build
     * now, so dist/ holds compiled .mjs with no .vue files in it — and
     * vue-docgen needs SFC source to produce the autodocs prop tables. Pointing
     * the docs build at dist/ would publish a Storybook with every prop table
     * blank.
     *
     * What dist/ gets instead is its own check: the package build runs
     * scripts/verify-dist.mjs, which fails on missing declarations, leaked
     * source, or an exports path that resolves to nothing.
     */
    const sourceAliases = {
      '@ericpitcock/epicenter-components-vue': resolve(
        __dirname,
        '../packages/epicenter-components-vue/src/index.ts'
      ),
    }

    return {
      ...config,
      build: {
        ...(config.build ?? {}),
        // Gzipping every chunk just to print a size column costs a few hundred MB
        // of heap at the end of the build. The number is nice to have; the build
        // completing on a memory-capped CI box is better.
        reportCompressedSize: false,
      },
      resolve: {
        ...(config.resolve ?? {}),
        extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.vue'],
        preserveSymlinks: true,
        alias: {
          ...config.resolve?.alias,
          ...sourceAliases,
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
