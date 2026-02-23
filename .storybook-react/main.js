/** @type { import('@storybook/react-vite').StorybookConfig } */
const path = require('path')

const config = {
  stories: [
    // '../storybook-react/stories/**/*.mdx', // docs
    '../storybook-react/stories/**/*.stories.tsx'
  ],
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-docs',
    '@storybook/addon-toolbars',
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
          '@ericpitcock/epicenter-components-react': path.resolve(__dirname, '../packages/epicenter-components-react/src'),
        },
      },
    }
  },
}
export default config
