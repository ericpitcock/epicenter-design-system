import { setup } from '@storybook/vue3-vite'
import { createRouter, createMemoryHistory } from 'vue-router'
import { watch } from 'vue'
import { createPinia } from 'pinia'
import { useStorybookStore } from '@sb/store'
import { useTheme } from '@ericpitcock/epicenter-components-vue'
import { PRESETS, applySeeds } from '../packages/storybook-shared/theme-presets.js'

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
// The consumer theme setup: seeds in a plain CSS file loaded right after the package.
import '../packages/epicenter-components-vue/storybook/theme.css'
import '../packages/epicenter-components-vue/storybook/storybook.scss'

const { getInitialTheme } = useTheme()

// Map theme value to Storybook toolbar value
const themeToStorybookValue = {
  'light': 'Light Theme',
  'dark': 'Dark Theme'
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

      // Brand presets write theme seeds onto <html>, the same thing a consumer's
      // theme.css does to :root, so every story re-derives from the new seeds.
      watch(
        () => context.globals.brand,
        brand => applySeeds(PRESETS[brand] ?? {}),
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
      defaultValue: themeToStorybookValue[getInitialTheme()],
      toolbar: {
        icon: '',
        items: ['Light Theme', 'Dark Theme'],
        showName: true,
        dynamicTitle: true,
      },
    },
    brand: {
      name: 'Brand',
      description: 'Theme seeds applied to every story',
      defaultValue: 'Indigo (default)',
      toolbar: {
        icon: 'paintbrush',
        items: Object.keys(PRESETS),
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    a11y: {
      context: '#storybook-root',
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
        method: 'alphabetical',
        order: ['Intro', 'History', 'Components', 'Style'],
      },
    },
  },
}

export default preview