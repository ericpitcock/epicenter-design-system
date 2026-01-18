import type { Meta, StoryObj } from '@storybook/react'
import { EpTooltip } from '@ericpitcock/epicenter-react-components'
import { EpButton } from '@ericpitcock/epicenter-react-components'

const meta: Meta<typeof EpTooltip> = {
  title: 'Components/EpTooltip',
  component: EpTooltip,
  parameters: {
    layout: 'centered'
  },
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
