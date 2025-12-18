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
            component: { template: '<router-view/>' },
            meta: { breadcrumb: 'Data' },
            children: [
              {
                path: 'reports',
                name: 'Reports',
                component: { template: '<router-view/>' },
                meta: { breadcrumb: 'Reports' },
                children: [
                  {
                    path: 'annual',
                    name: 'Annual',
                    component: { template: '<div>Annual Report Content</div>' },
                    meta: { breadcrumb: 'Annual' },
                  },
                  {
                    path: 'monthly',
                    name: 'Monthly',
                    component: { template: '<div>Monthly Report Content</div>' },
                    meta: { breadcrumb: 'Monthly' },
                  },
                ],
              },
              {
                path: 'stats',
                name: 'Stats',
                component: { template: '<div>Stats Content</div>' },
                meta: { breadcrumb: 'Stats' },
              },
            ],
          },
          {
            path: 'authors',
            name: 'Authors',
            component: { template: '<div>Authors Content</div>' },
            meta: { breadcrumb: 'Authors' },
          },
        ],
      },
      {
        path: 'contact',
        name: 'Contact',
        component: { template: '<div>Contact Content</div>' },
        meta: { breadcrumb: 'Contact' },
      },
    ],
  },
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

// Global styles
import '../static/epicenter-design-system.css'
import '../storybook/storybook.scss'

// Determine initial theme based on localStorage or OS preference
function getInitialStorybookTheme() {
  const STORAGE_KEY = 'theme-preference'
  const stored = localStorage.getItem(STORAGE_KEY)

  if (stored === 'light' || stored === 'dark') {
    return stored === 'light' ? 'Light Theme' : 'Dark Theme'
  }

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'Light Theme'
  }

  return 'Dark Theme'
}

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
      defaultValue: getInitialStorybookTheme(),
      toolbar: {
        icon: '',
        items: ['Light Theme', 'Dark Theme'],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    a11y: {
      element: '#storybook-root',
      config: {},
      options: {},
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
    options: {
      storySort: {
        order: ['Intro', 'Components', 'Style'],
      },
    },
  },
}

export default preview