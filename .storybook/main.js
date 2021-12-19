const path = require('path')
const rootPath = path.resolve(__dirname, '../src')

module.exports = {
  stories: ['../src/**/**/*.stories.js'],
  addons: [{
    name: '@storybook/addon-essentials',
    options: {
      backgrounds: false,
      measure: false,
      outline: false,
      viewport: false
    }
  },
    'storybook-theme-toggle'
  ],
  webpackFinal: async (config, { configType }) => {
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
