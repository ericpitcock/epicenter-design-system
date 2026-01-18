import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { EpNotification } from '@ericpitcock/epicenter-react-components'

const meta: Meta<typeof EpNotification> = {
  title: 'Components/EpNotification',
  component: EpNotification,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof EpNotification>

export const Default: Story = {
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

export const JustNow: Story = {
  render: () => {
    const [visible, setVisible] = useState(true)
    
    if (!visible) return null
    
    return (
      <div style={{ width: '400px' }}>
        <EpNotification
          id="2"
          message="New message received"
          timestamp={new Date().toISOString()}
          onDismiss={() => setVisible(false)}
        />
      </div>
    )
  }
}

export const MinutesAgo: Story = {
  render: () => {
    const [visible, setVisible] = useState(true)
    
    if (!visible) return null
    
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString()
    
    return (
      <div style={{ width: '400px' }}>
        <EpNotification
          id="3"
          message="Your task has been completed"
          timestamp={fiveMinutesAgo}
          onDismiss={() => setVisible(false)}
        />
      </div>
    )
  }
}

export const HoursAgo: Story = {
  render: () => {
    const [visible, setVisible] = useState(true)
    
    if (!visible) return null
    
    const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
    
    return (
      <div style={{ width: '400px' }}>
        <EpNotification
          id="4"
          message="System update available"
          timestamp={twoHoursAgo}
          onDismiss={() => setVisible(false)}
        />
      </div>
    )
  }
}

export const DaysAgo: Story = {
  render: () => {
    const [visible, setVisible] = useState(true)
    
    if (!visible) return null
    
    const threeDaysAgo = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
    
    return (
      <div style={{ width: '400px' }}>
        <EpNotification
          id="5"
          message="Your subscription has been renewed"
          timestamp={threeDaysAgo}
          onDismiss={() => setVisible(false)}
        />
      </div>
    )
  }
}

export const LongMessage: Story = {
  render: () => {
    const [visible, setVisible] = useState(true)
    
    if (!visible) return null
    
    return (
      <div style={{ width: '400px' }}>
        <EpNotification
          id="6"
          message="This is a notification with a very long message that demonstrates how the component handles text wrapping when the content is quite lengthy and exceeds the available width."
          timestamp={new Date().toISOString()}
          onDismiss={() => setVisible(false)}
        />
      </div>
    )
  }
}

export const Multiple: Story = {
  render: () => {
    const [notifications, setNotifications] = useState([
      { id: '1', message: 'First notification', timestamp: new Date(Date.now() - 1000).toISOString() },
      { id: '2', message: 'Second notification', timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString() },
      { id: '3', message: 'Third notification', timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString() }
    ])
    
    const handleDismiss = (id: string) => {
      setNotifications(prev => prev.filter(n => n.id !== id))
    }
    
    return (
      <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {notifications.map(notification => (
          <EpNotification
            key={notification.id}
            {...notification}
            onDismiss={() => handleDismiss(notification.id)}
          />
        ))}
      </div>
    )
  }
}
