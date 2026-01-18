import type { Meta, StoryObj } from '@storybook/react'
import { EpEmptyState } from '@ericpitcock/epicenter-react-components'
import { EpButton } from '@ericpitcock/epicenter-react-components'

const meta: Meta<typeof EpEmptyState> = {
  title: 'Components/EpEmptyState',
  component: EpEmptyState,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
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

const searchIcon = (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="3" fill="none"/>
    <path d="M72 72L95 95" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
  </svg>
)

export const Default: Story = {
  args: {
    children: (
      <>
        <h3>No items found</h3>
      </>
    ),
    img: emptyBoxIcon,
    subtext: 'Try adjusting your filters or search criteria',
    direction: 'column',
    justify: 'center'
  },
  render: (args) => (
    <div style={{ width: '400px', height: '300px', display: 'flex', alignItems: 'center' }}>
      <EpEmptyState {...args} />
    </div>
  )
}

export const WithCTA: Story = {
  render: () => (
    <div style={{ width: '400px', height: '300px', display: 'flex', alignItems: 'center' }}>
      <EpEmptyState
        img={emptyBoxIcon}
        subtext="Start by adding your first item"
        cta={<EpButton>Add Item</EpButton>}
      >
        <h3>No items yet</h3>
      </EpEmptyState>
    </div>
  )
}

export const NoResults: Story = {
  render: () => (
    <div style={{ width: '400px', height: '300px', display: 'flex', alignItems: 'center' }}>
      <EpEmptyState
        img={searchIcon}
        subtext="Try different keywords or check your spelling"
      >
        <h3>No search results</h3>
      </EpEmptyState>
    </div>
  )
}

export const RowLayout: Story = {
  render: () => (
    <div style={{ width: '600px', height: '200px', display: 'flex', alignItems: 'center' }}>
      <EpEmptyState
        direction="row"
        justify="left"
        img={emptyBoxIcon}
        subtext="Get started by creating your first project"
        cta={<EpButton>Create Project</EpButton>}
      >
        <h3>No projects</h3>
      </EpEmptyState>
    </div>
  )
}

export const SimpleText: Story = {
  render: () => (
    <div style={{ width: '400px', height: '300px', display: 'flex', alignItems: 'center' }}>
      <EpEmptyState>
        <h3>You're all caught up!</h3>
      </EpEmptyState>
    </div>
  )
}

export const AlignLeft: Story = {
  render: () => (
    <div style={{ width: '400px', height: '300px', display: 'flex', alignItems: 'center' }}>
      <EpEmptyState
        justify="left"
        img={emptyBoxIcon}
        subtext="No items to display at this time"
      >
        <h3>Empty list</h3>
      </EpEmptyState>
    </div>
  )
}
