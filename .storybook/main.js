const path = require('path')
const rootPath = path.resolve(__dirname, '../src')

// import '../src/assets/scss/_mixins.scss'

module.exports = {
  stories: [
    '../src/components/**/*.stories.js',
    '../src/style/**/*.stories.js'
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    'storybook-theme-toggle'
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [ 'style-loader',
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
