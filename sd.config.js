module.exports = {
  source: ['src/style/tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/assets/scss/',
      files: [
        {
          destination: '_color.scss',
          format: 'css/variables'
        }
      ]
    }
  }
}
