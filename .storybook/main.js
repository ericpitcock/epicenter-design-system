const path = require('path')
const rootPath = path.resolve(__dirname, '../packages/epicenter-design-system/src')

module.exports = {
  stories: ['../storybook/stories/**/*.stories.js'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        measure: false,
        outline: false,
        viewport: false
      }
    }
  ],
  staticDirs: ['../static'],
  webpackFinal: async (config, { configType }) => {
    // Add SCSS support
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            prependData: '@import "@/assets/scss/_mixins.scss";'
          }
        }
      ]
    })
    config.resolve.alias['@'] = rootPath
    config.resolve.alias['~'] = rootPath

    return config
  }
}
