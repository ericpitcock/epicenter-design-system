import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { EpBanner, EpButton } from '@ericpitcock/epicenter-react-components'

const meta: Meta<typeof EpBanner> = {
  title: 'Components/EpBanner',
  component: EpBanner,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    message: {
      control: 'text',
      description: 'Main message text'
    },
    subtext: {
      control: 'text',
      description: 'Additional subtext'
    },
    icon: {
      table: { disable: true }
    },
    dismiss: {
      table: { disable: true }
    }
  }
}

export default meta
type Story = StoryObj<typeof EpBanner>

const infoIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="currentColor"/>
  </svg>
)

export const Banner: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(true)
    
    if (!visible) {
      return (
        <div>
          <p>Banner dismissed</p>
          <button onClick={() => setVisible(true)}>Show again</button>
        </div>
      )
    }
    
    return (
      <div style={{ width: '600px' }}>
        <EpBanner
          {...args}
          icon={infoIcon}
          dismiss={<EpButton>Dismiss</EpButton>}
          onDismissed={() => setVisible(false)}
        />
      </div>
    )
  },
  args: {
    message: 'This is an informational banner message',
    subtext: ''
  }
}
