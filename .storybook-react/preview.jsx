import React from 'react'
import { ThemeProvider } from '@ericpitcock/epicenter-components-react'
import { MemoryRouter } from 'react-router-dom'

// global styles
import '../packages/epicenter-styles/dist/epicenter-design-system.css'
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

      return (
        <ThemeProvider>
          <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
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
        order: ['Intro', 'Components', 'Style'],
      },
    },
  },
}

export default preview