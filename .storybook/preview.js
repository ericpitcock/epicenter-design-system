import { setup } from '@storybook/vue3'
import { createRouter, createMemoryHistory } from 'vue-router'
import { watch } from 'vue'
import { createPinia } from 'pinia'
import { useStorybookStore } from '../storybook/store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: { template: '<router-view/>' },
    meta: { breadcrumb: 'Home' },
    children: [
      {
        path: 'library',
        name: 'Library',
        component: { template: '<router-view/>' },
        meta: { breadcrumb: 'Library' },
        children: [
          {
            path: 'data',
            name: 'Data',
            component: { template: '<div>Data</div>' },
            meta: { breadcrumb: 'Data' },
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

setup((app) => {
  const pinia = createPinia()
  app.use(pinia)
  app.use(router)
})

// global styles
import '../packages/epicenter-styles/dist/epicenter-design-system.css'
import '../storybook/storybook.scss'

const preview = {
  decorators: [
    (story, context) => {
      const store = useStorybookStore()
      watch(
        () => context.globals.theme,
        () => {
          const themeMap = {
            'Light Theme': 'light',
            'Dark Theme': 'dark'
          }
          if (themeMap[context.globals.theme] === store.theme) return
          store.toggleTheme()
        },
        { immediate: true }
      )

      return {
        template: '<story/>',
        setup() {
          return { store }
        }
      }
    }
  ],
  globalTypes: {
    theme: {
      name: 'Choose Theme',
      description: 'Global theme for components',
      defaultValue: 'Dark Theme',
      toolbar: {
        icon: '',
        items: ['Light Theme', 'Dark Theme'],
        showName: true,
        dynamicTitle: true
      }
    }
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
    options: {
      storySort: {
        order: [
          'Intro',
          'Components',
          'Style',
        ],
      },
    },
  },
}

export default preview
