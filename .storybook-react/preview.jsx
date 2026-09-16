import React from 'react'
import { ThemeProvider } from '@ericpitcock/epicenter-components-react'
import { MemoryRouter } from 'react-router-dom'
import { PRESETS, applySeeds } from '../packages/storybook-shared/theme-presets.js'

// global styles
import '../packages/epicenter-styles/dist/epicenter-design-system.css'
// The consumer theme setup: seeds in a plain CSS file loaded right after the package.
import '../packages/epicenter-components-vue/storybook/theme.css'
import '../packages/epicenter-components-react/storybook/storybook.scss'

// Read initial theme from localStorage or default to dark
const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme-preference')
    if (stored === 'light' || stored === 'dark') return stored
    if (window.matchMedia?.('(prefers-color-scheme: light)').matches) return 'light'
  }
  return 'dark'
}

const themeToStorybookValue = {
  'light': 'Light Theme',
  'dark': 'Dark Theme'
}

const preview = {
  decorators: [
    (Story, context) => {
      const themeMap = {
        'Light Theme': 'light',
        'Dark Theme': 'dark',
      }

      const theme = themeMap[context.globals.theme] || 'dark'

      // Apply theme class to documentElement (matching Vue behavior)
      document.documentElement.classList.remove('light-theme', 'dark-theme')
      document.documentElement.classList.add(`${theme}-theme`)
      localStorage.setItem('theme-preference', theme)

      // Brand presets write theme seeds onto <html>, the same thing a consumer's
      // theme.css does to :root, so every story re-derives from the new seeds.
      applySeeds(PRESETS[context.globals.brand] ?? {})

      return (
        <ThemeProvider>
          {/* react-router 7 makes the old v7_* future flags the default, so the
              opt-ins that belonged here under v6 are gone. */}
          <MemoryRouter>
            <Story />
          </MemoryRouter>
        </ThemeProvider>
      )
    },
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
        order: ['Intro', 'Components', 'Style'],
      },
    },
  },
}

export default preview