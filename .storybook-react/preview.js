// global styles
import '../packages/epicenter-styles/dist/epicenter-design-system.css'
import '../storybook/storybook.scss'

const preview = {
  // decorators: [
  //   (Story, context) => {
  //     const themeMap = {
  //       'Light Theme': 'light',
  //       'Dark Theme': 'dark',
  //     }

  //     const theme = themeMap[context.globals.theme]

  //     // Example: Apply a class to the document body based on the theme
  //     document.body.className = theme

  //     return <Story {...context} />
  //   },
  // ],
  globalTypes: {
    theme: {
      name: 'Choose Theme',
      description: 'Global theme for components',
      defaultValue: 'Dark Theme',
      toolbar: {
        icon: '',
        items: ['Light Theme', 'Dark Theme'],
        showName: true,
        dynamicTitle: true,
      },
    },
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
        order: ['Intro', 'Components', 'Style'],
      },
    },
  },
}

export default preview