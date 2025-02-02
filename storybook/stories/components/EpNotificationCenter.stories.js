import { paddedBg } from '../../helpers/decorators.js'
import EpContainer from '@/components/container/EpContainer.vue'
import EpNotifications from '@/components/notification/EpNotifications.vue'
import { useNotifications } from '@/components/notification/useNotifications.js'
import { faker } from '@faker-js/faker'

export default {
  title: 'Components/Notifications/Notification Center',
  component: EpNotifications,
  decorators: [paddedBg],
  argTypes: {
    emptyStateMessage: {
      name: 'Empty State Message',
      control: {
        type: 'text'
      }
    },
    notificationsTitle: {
      name: 'Notifications Title',
      control: {
        type: 'text'
      }
    },
  },
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
}

export const NotificationCenter = args => ({
  components: {
    EpContainer,
    EpNotifications
  },
  setup() {
    const initNotifications = [
      {
        id: faker.string.uuid(),
        active: false,
        message: 'Welcome to Acme Asset Explorer! You just unlocked new levels of visibility into your assets and vulnerabilities.',
        timestamp: faker.date.past({ years: 2 }).toISOString(),
        styles: {
          '--ep-notification-strip-color': '#FFD700'
        },
      },
      {
        id: faker.string.uuid(),
        active: false,
        message: 'App version 1.0.3 is now available',
        timestamp: faker.date.past({ years: 1 }).toISOString(),
        styles: {
          '--ep-notification-strip-color': '#FFD700'
        },
      },
      {
        id: faker.string.uuid(),
        active: false,
        message: 'Your support request was sent successfully',
        timestamp: faker.date.recent({ days: 25 }).toISOString(),
        styles: {
          '--ep-notification-strip-color': '#FFD700'
        },
      },
      {
        id: faker.string.uuid(),
        active: false,
        message: 'You’re running low on endpoint licenses',
        timestamp: faker.date.recent({ days: 15 }).toISOString(),
        styles: {
          '--ep-notification-strip-color': '#FFD700'
        },
      },
      {
        id: faker.string.uuid(),
        active: false,
        message: 'Your organization has 34 assets with new critical vulnerabilities',
        timestamp: faker.date.recent({ days: 5 }).toISOString(),
        styles: {
          '--ep-notification-strip-color': '#FFD700'
        },
      }
    ]

    const {
      notifications,
      removeNotification,
      clearNotifications
    } = useNotifications(initNotifications)

    // const removeNotification = (id) => {
    //   notifications.value = notifications.value.filter(notification => notification.id !== id)
    // }

    // const clearNotifications = () => {
    //   notifications.value.forEach((notification, index) => {
    //     setTimeout(() => {
    //       removeNotification(notification.id)
    //     }, index * 100)
    //   })
    // }

    return {
      args,
      notifications,
      removeNotification,
      clearNotifications
    }
  },
  template: `
    <div style="width: 362px; height: 100%;">
      <ep-notifications
        v-bind="args"
        :notifications
        @remove-notification="removeNotification"
        @clear-notifications="clearNotifications"
      />
    </div>
  `
})

NotificationCenter.args = {
  emptyStateMessage: 'No notifications to display',
  notificationsTitle: 'Notifications',
}

