import { app } from '@storybook/vue3'
import store from '../src/store'

app.use(store)

// global styles
import '!style-loader!css-loader!sass-loader!../src/assets/scss/global.scss'
import '!style-loader!css-loader!sass-loader!../src/assets/scss/storybook.scss'

export const parameters = {
  layout: 'centered',
  options: {
    storySort: {
      order: ['Intro', 'Components', 'Style', 'Layouts', 'Sandbox'],
    },
  }
}

export const globalTypes = {
  theme: {
    name: 'Choose Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      // icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
      // Property that specifies if the name of the item will be displayed
      showName: true
    }
  }
}

export const decorators = [
  (story, context) => ({
    template: '<story/>',
    watch: {
      theme: {
        handler() {
          if (context.globals.theme === store.state.theme) return
          // console.log('theme changed')
          store.dispatch('toggleTheme')
        },
        immediate: true
      }
    }
  })
]
