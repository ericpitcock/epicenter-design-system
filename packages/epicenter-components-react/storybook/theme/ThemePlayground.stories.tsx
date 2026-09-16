import type { Meta, StoryObj } from '@storybook/react-vite'

import { ThemePlayground } from './ThemePlayground'

const meta: Meta<typeof ThemePlayground> = {
  title: 'Style/Theme Playground',
  component: ThemePlayground,
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component:
          'Dial in the theme seeds and watch every component re-derive from them. ' +
          'The swatches are read back from the stylesheet with getComputedStyle, so ' +
          'this is a test of the CSS. The theme.css block at the bottom is what a ' +
          'consumer would ship — only the seeds, nothing else.',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof ThemePlayground>

export const Playground: Story = {}
