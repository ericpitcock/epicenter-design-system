module.exports = {
  source: ['src/style/tokens/color/color.json'],
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
