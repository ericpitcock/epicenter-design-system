/** @type { import('@storybook/vue3-vite').StorybookConfig } */

const config = {
  stories: [
    // '../storybook/stories/**/*.mdx', // docs
    '../storybook/stories/**/*.stories.js'
  ],

  addons: [
    '@storybook/addon-controls',
    // '@storybook/addon-docs',
    '@storybook/addon-toolbars',
    // '@storybook/addon-a11y',
  ],

  staticDirs: ['../static'],

  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },

  viteFinal: async (config) => {
    return {
      ...config,
      resolve: { ...(config.resolve ?? {}), preserveSymlinks: true },
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
