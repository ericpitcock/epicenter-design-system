import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { EpNotifications, NotificationItem } from '@ericpitcock/epicenter-react-components'

const meta: Meta<typeof EpNotifications> = {
  title: 'Components/EpNotifications',
  component: EpNotifications,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    emptyStateMessage: {
      control: 'text',
      description: 'Empty state message when there are no notifications'
    },
    notificationsTitle: {
      control: 'text',
      description: 'Title for the notifications panel'
    }
  }
}

export default meta
type Story = StoryObj<typeof EpNotifications>

const generateMockNotifications = (): NotificationItem[] => [
  {
    id: '1',
    message: 'Your report has been generated successfully',
    timestamp: new Date(Date.now() - 30 * 1000).toISOString()
  },
  {
    id: '2',
    message: 'New message from John Doe',
    timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString()
  },
  {
    id: '3',
    message: 'System update completed',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '4',
    message: 'Your subscription expires in 7 days',
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '5',
    message: 'File upload completed',
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
  }
]

export const Default: Story = {
  render: (args) => {
    const [notifications, setNotifications] = useState<NotificationItem[]>(generateMockNotifications())
    
    const handleRemove = (id: string) => {
      setNotifications(prev => prev.filter(n => n.id !== id))
    }
    
    const handleClearAll = () => {
      setNotifications([])
    }
    
    return (
      <div style={{ height: '600px', maxWidth: '500px' }}>
        <EpNotifications
          {...args}
          notifications={notifications}
          onRemoveNotification={handleRemove}
          onClearNotifications={handleClearAll}
        />
      </div>
    )
  },
  args: {
    notificationsTitle: 'Notifications',
    emptyStateMessage: "You're all caught up!"
  }
}

export const Empty: Story = {
  render: (args) => {
    return (
      <div style={{ height: '600px', maxWidth: '500px' }}>
        <EpNotifications
          {...args}
          notifications={[]}
          onRemoveNotification={() => {}}
          onClearNotifications={() => {}}
        />
      </div>
    )
  },
  args: {
    notificationsTitle: 'Notifications',
    emptyStateMessage: "You're all caught up!"
  }
}

export const CustomTitle: Story = {
  render: () => {
    const [notifications, setNotifications] = useState<NotificationItem[]>(generateMockNotifications())
    
    const handleRemove = (id: string) => {
      setNotifications(prev => prev.filter(n => n.id !== id))
    }
    
    const handleClearAll = () => {
      setNotifications([])
    }
    
    return (
      <div style={{ height: '600px', maxWidth: '500px' }}>
        <EpNotifications
          notificationsTitle="Recent Activity"
          emptyStateMessage="No recent activity"
          notifications={notifications}
          onRemoveNotification={handleRemove}
          onClearNotifications={handleClearAll}
        />
      </div>
    )
  }
}

export const SingleNotification: Story = {
  render: () => {
    const [notifications, setNotifications] = useState<NotificationItem[]>([
      {
        id: '1',
        message: 'Welcome to the notification center!',
        timestamp: new Date().toISOString()
      }
    ])
    
    const handleRemove = (id: string) => {
      setNotifications(prev => prev.filter(n => n.id !== id))
    }
    
    const handleClearAll = () => {
      setNotifications([])
    }
    
    return (
      <div style={{ height: '600px', maxWidth: '500px' }}>
        <EpNotifications
          notifications={notifications}
          onRemoveNotification={handleRemove}
          onClearNotifications={handleClearAll}
        />
      </div>
    )
  }
}

export const Interactive: Story = {
  render: () => {
    const [notifications, setNotifications] = useState<NotificationItem[]>(generateMockNotifications())
    const [nextId, setNextId] = useState(6)
    
    const handleRemove = (id: string) => {
      setNotifications(prev => prev.filter(n => n.id !== id))
    }
    
    const handleClearAll = () => {
      setNotifications([])
    }
    
    const addNotification = () => {
      const newNotification: NotificationItem = {
        id: String(nextId),
        message: `New notification #${nextId}`,
        timestamp: new Date().toISOString()
      }
      setNotifications(prev => [newNotification, ...prev])
      setNextId(prev => prev + 1)
    }
    
    return (
      <div>
        <div style={{ marginBottom: '20px', padding: '20px' }}>
          <button onClick={addNotification}>Add Notification</button>
        </div>
        <div style={{ height: '600px', maxWidth: '500px' }}>
          <EpNotifications
            notifications={notifications}
            onRemoveNotification={handleRemove}
            onClearNotifications={handleClearAll}
          />
        </div>
      </div>
    )
  }
}
