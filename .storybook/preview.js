import { app } from '@storybook/vue3'
import store from '../src/store'

app.use(store)

// global styles
import '!style-loader!css-loader!sass-loader!../src/assets/scss/global.scss'
import '!style-loader!css-loader!sass-loader!../src/assets/scss/storybook.scss'

export const parameters = {
  layout: 'fullscreen'
}

// export const decorators = [(story) => ({
//   components: { story },
//   template: '<div style="display: grid; place-content: center; width: 100vw; height: 100vh;"><story /></div>'
// })]