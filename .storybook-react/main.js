/** @type { import('@storybook/vue3-vite').StorybookConfig } */

const config = {
  stories: [
    '../storybook-react/stories/**/*.mdx', // docs
    '../storybook-react/stories/**/*.stories.jsx'
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
  docs: {
    autodocs: 'tag',
  },
}
export default config
