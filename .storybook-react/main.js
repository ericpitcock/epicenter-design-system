import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/** @type { import('@storybook/react-vite').StorybookConfig } */

const config = {
  stories: [
    '../packages/epicenter-components-react/src/**/*.stories.tsx',
    '../packages/epicenter-components-react/storybook/**/*.stories.tsx',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
  ],
  staticDirs: ['../static'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  // docs: {
  //   autodocs: 'tag',
  // },
  viteFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...(config.resolve ?? {}),
        alias: {
          ...config.resolve?.alias,
          '@ericpitcock/epicenter-components-react': resolve(__dirname, '../packages/epicenter-components-react/src'),
          '@sb': resolve(__dirname, '../packages/epicenter-components-react/storybook'),
        },
      },
      optimizeDeps: {
        ...config.optimizeDeps,
        include: [
          ...(config.optimizeDeps?.include ?? []),
          'react',
          'react-dom',
          'react-router-dom',
        ],
      },
      server: {
        ...config.server,
        fs: {
          ...config.server?.fs,
          strict: true,
        },
        watch: {
          ...config.server?.watch,
          ignored: ['**/node_modules/**', '**/.git/**', '**/dist/**'],
        },
      },
    }
  },
}
export default config
