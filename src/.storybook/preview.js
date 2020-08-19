import { addDecorator } from '@storybook/vue'

// global things
import '!style-loader!css-loader!sass-loader!../assets/scss/storybook.scss'

// add { height: 100vh } to each story
const container100vh = () => {
  return {
    template: '<div style="height: 100vh;"><story/></div>',
  }
}

addDecorator(container100vh)