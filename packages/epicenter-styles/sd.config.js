module.exports = {
  source: ['./tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: './scss/color/',
      files: [
        {
          destination: '_color.scss',
          format: 'css/variables'
        }
      ]
    }
  }
}
