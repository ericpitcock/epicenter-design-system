import { app } from '@storybook/vue3'
import vueRouter from 'storybook-vue3-router'
import store from '../src/store'

app.use(store)

// global styles
import '!style-loader!css-loader!sass-loader!../src/assets/scss/global.scss'
import '!style-loader!css-loader!sass-loader!../src/assets/scss/storybook.scss'

export const parameters = {
  layout: 'centered'
}

// global decorators
export const decorators = [
  vueRouter()
]