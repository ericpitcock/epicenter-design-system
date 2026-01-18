import type { Meta, StoryObj } from '@storybook/react'
import { EpTooltip } from '@ericpitcock/epicenter-react-components'
import { EpButton } from '@ericpitcock/epicenter-react-components'

const meta: Meta<typeof EpTooltip> = {
  title: 'Components/EpTooltip',
  component: EpTooltip,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: [
        'top left',
        'top center',
        'top right',
        'right top',
        'right center',
        'right bottom',
        'bottom left',
        'bottom center',
        'bottom right',
        'left top',
        'left center',
        'left bottom'
      ],
      description: 'Position of the tooltip relative to the trigger element'
    },
    delay: {
      control: 'number',
      description: 'Delay in milliseconds before showing the tooltip'
    },
    dismissOnClick: {
      control: 'boolean',
      description: 'Whether to dismiss the tooltip when clicked'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the tooltip is disabled'
    }
  }
}

export default meta
type Story = StoryObj<typeof EpTooltip>

export const Default: Story = {
  args: {
    tooltip: 'This is a helpful tooltip',
    position: 'top center',
    children: <EpButton>Hover me</EpButton>
  },
  render: (args) => (
    <div style={{ padding: '100px' }}>
      <EpTooltip {...args} />
    </div>
  )
}

export const Positions: Story = {
  render: () => (
    <div style={{ padding: '150px', display: 'grid', gridTemplateColumns: 'repeat(3, 200px)', gap: '50px' }}>
      <EpTooltip tooltip="Top Left" position="top left">
        <EpButton>Top Left</EpButton>
      </EpTooltip>
      <EpTooltip tooltip="Top Center" position="top center">
        <EpButton>Top Center</EpButton>
      </EpTooltip>
      <EpTooltip tooltip="Top Right" position="top right">
        <EpButton>Top Right</EpButton>
      </EpTooltip>
      
      <EpTooltip tooltip="Left Top" position="left top">
        <EpButton>Left Top</EpButton>
      </EpTooltip>
      <div style={{ gridColumn: 2 }} />
      <EpTooltip tooltip="Right Top" position="right top">
        <EpButton>Right Top</EpButton>
      </EpTooltip>
      
      <EpTooltip tooltip="Left Center" position="left center">
        <EpButton>Left Center</EpButton>
      </EpTooltip>
      <div style={{ gridColumn: 2 }} />
      <EpTooltip tooltip="Right Center" position="right center">
        <EpButton>Right Center</EpButton>
      </EpTooltip>
      
      <EpTooltip tooltip="Left Bottom" position="left bottom">
        <EpButton>Left Bottom</EpButton>
      </EpTooltip>
      <div style={{ gridColumn: 2 }} />
      <EpTooltip tooltip="Right Bottom" position="right bottom">
        <EpButton>Right Bottom</EpButton>
      </EpTooltip>
      
      <EpTooltip tooltip="Bottom Left" position="bottom left">
        <EpButton>Bottom Left</EpButton>
      </EpTooltip>
      <EpTooltip tooltip="Bottom Center" position="bottom center">
        <EpButton>Bottom Center</EpButton>
      </EpTooltip>
      <EpTooltip tooltip="Bottom Right" position="bottom right">
        <EpButton>Bottom Right</EpButton>
      </EpTooltip>
    </div>
  )
}

export const WithDelay: Story = {
  render: () => (
    <div style={{ padding: '100px', display: 'flex', gap: '20px' }}>
      <EpTooltip tooltip="No delay" delay={0}>
        <EpButton>No delay</EpButton>
      </EpTooltip>
      <EpTooltip tooltip="500ms delay" delay={500}>
        <EpButton>500ms delay</EpButton>
      </EpTooltip>
      <EpTooltip tooltip="1000ms delay" delay={1000}>
        <EpButton>1s delay</EpButton>
      </EpTooltip>
    </div>
  )
}

export const DismissOnClick: Story = {
  render: () => (
    <div style={{ padding: '100px' }}>
      <EpTooltip tooltip="Click to dismiss" dismissOnClick>
        <EpButton>Click to dismiss tooltip</EpButton>
      </EpTooltip>
    </div>
  )
}

export const Disabled: Story = {
  render: () => (
    <div style={{ padding: '100px' }}>
      <EpTooltip tooltip="You won't see me" disabled>
        <EpButton>Disabled tooltip</EpButton>
      </EpTooltip>
    </div>
  )
}

export const ComplexContent: Story = {
  render: () => (
    <div style={{ padding: '100px' }}>
      <EpTooltip
        tooltip={
          <div style={{ padding: '8px' }}>
            <strong>Complex Tooltip</strong>
            <p style={{ margin: '4px 0 0 0', fontSize: '12px' }}>
              Tooltips can contain rich content including multiple lines and formatting.
            </p>
          </div>
        }
        position="bottom center"
      >
        <EpButton>Rich content</EpButton>
      </EpTooltip>
    </div>
  )
}
