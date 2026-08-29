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
      build: {
        ...(config.build ?? {}),
        // Gzipping every chunk just to print a size column costs a few hundred MB
        // of heap at the end of the build, which is what tipped Netlify over into
        // an OOM. The number is nice to have; the build completing is better.
        reportCompressedSize: false,
      },
      resolve: {
        ...(config.resolve ?? {}),
        // netlify:react installs in packages/epicenter-components-react AND at the
        // root, so react-router exists twice in the tree. The dev server happens to
        // collapse them; a production build does not, and two copies mean two React
        // contexts — <Link> inside a component cannot see the <MemoryRouter> in
        // preview.jsx, which fails as "Cannot destructure property 'basename'".
        dedupe: ['react', 'react-dom', 'react-router', 'react-router-dom'],
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
