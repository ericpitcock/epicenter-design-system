/** @type { import('@storybook/vue3-vite').StorybookConfig } */

const config = {
  stories: [
    '../storybook/stories/**/*.mdx', // docs
    '../storybook/stories/**/*.stories.js'
  ],
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-docs',
    '@storybook/addon-toolbars',
  ],
  staticDirs: ['../static'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config
