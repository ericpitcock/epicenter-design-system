const path = require('path')
const rootPath = path.resolve(__dirname, '../../packages/epicenter-design-system/src')

module.exports = {
  stories: ['../stories/**/*.stories.js'],
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
  staticDirs: ['../../static'],
  webpackFinal: async (config, { configType }) => {
    // Add SCSS support
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          // options: {
          //   prependData: '@import "../../packages/epicenter-design-system/src/assets/scss/_mixins.scss";'
          // }
        }
      ]
    })
    config.resolve.alias['@'] = rootPath
    config.resolve.alias['~'] = rootPath

    // Fix wrong project root on server
    // Storybook treats the nearest ".git" folder as its project root. However, on a server that splits the Git repository from the working directory, this leads to a wrong project root.
    // https://github.com/storybookjs/storybook/blob/next/lib/core-common/src/utils/paths.ts

    const babelLoaderRule = config.module.rules.find(
      // https://github.com/storybookjs/storybook/blob/next/lib/builder-webpack4/src/preview/babel-loader-preview.ts
      (rule) => rule.test.toString() === /\.(mjs|tsx?|jsx?)$/.toString()
    )
    // set correct project root
    babelLoaderRule.include = [path.resolve(__dirname, "../..")]

    return config
  }
}
