// global styles
import '!style-loader!css-loader!sass-loader!../src/assets/scss/_global.scss'

export const parameters = {
  layout: 'fullscreen'
}

// global decorators
export const decorators = [(story) => ({
  components: { story },
  template: '<div style="height: 100vh;"><story /></div>'
})]