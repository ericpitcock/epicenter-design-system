import { app } from '@storybook/vue3'
import store from '../storybook/store'

app.use(store)

// global styles
import '!style-loader!css-loader!sass-loader!../packages/epicenter-design-system/src/assets/scss/global.scss'
import '!style-loader!css-loader!sass-loader!../storybook/storybook.scss'

export const parameters = {
  layout: 'centered',
  options: {
    storySort: {
      order: [
        'Intro',
        'Components',
        'Style',
        'App Examples',
        'Docs'
      ],
    },
  }
}

export const globalTypes = {
  theme: {
    name: 'Choose Theme',
    description: 'Global theme for components',
    defaultValue: 'dark',
    toolbar: {
      icon: '',
      // Array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
      // Property that specifies if the name of the item will be displayed
      showName: true,
      // Change title based on selected value
      // only works in 6.5
      dynamicTitle: true
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
          store.dispatch('toggleTheme')
        },
        immediate: true
      }
    }
  })
]
