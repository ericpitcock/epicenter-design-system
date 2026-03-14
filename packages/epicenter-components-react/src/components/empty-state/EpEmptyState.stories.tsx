import { EpEmptyState, EpButton } from '@ericpitcock/epicenter-components-react'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof EpEmptyState> = {
  title: 'Components/EmptyState',
  component: EpEmptyState,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    children: {
      table: { disable: true }
    },
    img: {
      table: { disable: true }
    },
    cta: {
      table: { disable: true }
    },
    subtext: {
      control: 'text',
      description: 'Subtext explaining the empty state'
    },
    direction: {
      control: 'radio',
      options: ['column', 'row'],
      description: 'Layout direction of the empty state content'
    },
    justify: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Horizontal alignment of the content'
    }
  }
}

export default meta
type Story = StoryObj<typeof EpEmptyState>

const emptyBoxIcon = (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
    <rect x="20" y="30" width="80" height="60" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M20 50h80M60 30v60M20 30l40 20M100 30l-40 20" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

export const EmptyState: Story = {
  args: {
    subtext: 'Try adjusting your filters or search criteria',
    direction: 'column',
    justify: 'center'
  },
  render: (args) => (
    <div style={{ width: '400px', height: '300px', display: 'flex', alignItems: 'center' }}>
      <EpEmptyState 
        {...args}
        img={emptyBoxIcon}
        cta={<EpButton>Add Item</EpButton>}
      >
        <h3>No items found</h3>
      </EpEmptyState>
    </div>
  )
}
