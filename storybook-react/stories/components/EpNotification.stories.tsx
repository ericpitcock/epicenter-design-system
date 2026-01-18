import { EpNotification } from '@ericpitcock/epicenter-react-components'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

const meta: Meta<typeof EpNotification> = {
  title: 'Components/Notification',
  component: EpNotification,
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof EpNotification>

export const Notification: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(true)
    
    if (!visible) {
      return (
        <div>
          <p>Notification dismissed</p>
          <button onClick={() => setVisible(true)}>Show again</button>
        </div>
      )
    }
    
    return (
      <div style={{ width: '400px' }}>
        <EpNotification
          {...args}
          onDismiss={() => setVisible(false)}
        />
      </div>
    )
  },
  args: {
    id: '1',
    message: 'Your report has been generated successfully',
    timestamp: new Date().toISOString()
  }
}
