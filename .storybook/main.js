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
    '@storybook/addon-a11y',
  ],
  staticDirs: ['../static'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
}
export default config
