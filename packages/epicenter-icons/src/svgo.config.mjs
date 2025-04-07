export default {
  plugins: [
    {
      name: 'removeAttrs',
      params: {
        attrs: '(stroke|stroke-width|stroke-linecap|stroke-linejoin|width|height|fill)'
      }
    }
  ]
}