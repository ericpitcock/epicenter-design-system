const path = require('path')
const webpack = require('webpack')
const rootPath = path.resolve(__dirname, '../packages/epicenter-vue-components/src')

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
          loader: 'sass-loader'
        }
      ]
    })

    config.resolve.alias['@'] = rootPath
    config.resolve.alias['~'] = rootPath

    config.plugins.push(
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      })
    )

    return config
  }
}
