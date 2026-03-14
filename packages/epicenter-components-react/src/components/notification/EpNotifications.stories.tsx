import { EpNotifications, NotificationItem } from '@ericpitcock/epicenter-components-react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

const meta: Meta<typeof EpNotifications> = {
  title: 'Components/Notifications',
  component: EpNotifications,
  parameters: {
    layout: 'fullscreen'
  },
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

export const Notifications: Story = {
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
