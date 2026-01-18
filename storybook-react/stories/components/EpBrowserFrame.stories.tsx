import type { Meta, StoryObj } from '@storybook/react'
import { EpBrowserFrame } from '@ericpitcock/epicenter-react-components'

const meta: Meta<typeof EpBrowserFrame> = {
  title: 'Components/EpBrowserFrame',
  component: EpBrowserFrame,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    width: {
      control: 'text',
      description: 'Width of the browser frame'
    },
    url: {
      control: 'text',
      description: 'URL to display in address bar'
    },
    imageSrc: {
      control: 'text',
      description: 'Image source URL'
    },
    imageAlt: {
      control: 'text',
      description: 'Image alt text'
    }
  }
}

export default meta
type Story = StoryObj<typeof EpBrowserFrame>

export const BrowserFrame: Story = {
  args: {
    url: 'https://example.com',
    imageSrc: 'https://via.placeholder.com/800x600/4a90e2/ffffff?text=Website+Screenshot',
    imageAlt: 'Website screenshot',
    width: '800px'
  }
}
