import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { EpResizable } from '@ericpitcock/epicenter-react-components'

const meta: Meta<typeof EpResizable> = {
  title: 'Components/EpResizable',
  component: EpResizable,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column'],
      description: 'The direction of the resizable layout'
    },
    initialSize: {
      control: 'text',
      description: 'The initial size of the resizable pane'
    },
    minSize: {
      control: 'number',
      description: 'The minimum size in pixels'
    },
    maxSize: {
      control: 'number',
      description: 'The maximum size in pixels'
    }
  }
}

export default meta
type Story = StoryObj<typeof EpResizable>

export const Resizable: Story = {
  args: {
    direction: 'row',
    initialSize: '300px',
    minSize: 200,
    maxSize: 600,
    resizableContent: (
      <div style={{ padding: '20px', background: '#f5f5f5', height: '100%' }}>
        <h3>Resizable Sidebar</h3>
        <p>Drag the handle on the right edge to resize this panel.</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    ),
    content: (
      <div style={{ padding: '20px', height: '100%' }}>
        <h2>Main Content</h2>
        <p>This is the main content area that remains fixed.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    )
  },
  decorators: [
    (Story) => (
      <div style={{ height: '500px' }}>
        <Story />
      </div>
    )
  ]
}
