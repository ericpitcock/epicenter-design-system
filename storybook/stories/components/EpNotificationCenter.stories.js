// import { paddedBg } from '../../helpers/decorators.js'
import EpContainer from '@/components/container/EpContainer.vue'
import EpNotification from '@/components/notification/EpNotification.vue'
import EpNotifications from '@/components/notification/EpNotifications.vue'
import { useNotifications } from '@/components/notification/useNotifications.js'
import { useOverlay } from '@/plugins/ep-overlay'
import { faker } from '@faker-js/faker'
import { nextTick } from 'vue'

export default {
  title: 'Components/Notifications/Notification Center',
  component: EpNotifications,
  decorators: [() => ({ template: '<div id="app"><ep-overlay-manager /><story /></div>' })],
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
    EpNotification,
    EpNotifications,
  },
  setup() {
    const initNotifications = [
      {
        id: faker.string.uuid(),
        active: false,
        message: 'Welcome to Acme Asset Explorer! You just unlocked new levels of visibility into your assets and vulnerabilities.',
        timestamp: faker.date.past({ years: 2 }).toISOString(),
        style: {
          '--ep-notification-strip-color': '#FFD700'
        },
      },
      {
        id: faker.string.uuid(),
        active: false,
        message: 'App version 1.0.3 is now available',
        timestamp: faker.date.past({ years: 1 }).toISOString(),
        style: {
          '--ep-notification-strip-color': '#FFD700'
        },
      },
      {
        id: faker.string.uuid(),
        active: false,
        message: 'Your support request was sent successfully',
        timestamp: faker.date.recent({ days: 25 }).toISOString(),
        style: {
          '--ep-notification-strip-color': '#FFD700'
        },
      },
      {
        id: faker.string.uuid(),
        active: false,
        message: 'You’re running low on endpoint licenses',
        timestamp: faker.date.recent({ days: 15 }).toISOString(),
        style: {
          '--ep-notification-strip-color': '#FFD700'
        },
      },
      {
        id: faker.string.uuid(),
        active: false,
        message: 'Your organization has 34 assets with new critical vulnerabilities',
        timestamp: faker.date.recent({ days: 5 }).toISOString(),
        style: {
          '--ep-notification-strip-color': '#FFD700'
        },
      }
    ]

    const {
      notifications,
      removeNotification,
      clearNotifications
    } = useNotifications(initNotifications)

    const overlay = useOverlay()

    function showToast() {
      nextTick(() => {
        if (!document.querySelector('#app')) {
          console.error('Teleport target not found')
          return
        }
        console.log('Before:', overlay.overlays)

        overlay.showOverlay({
          type: 'toast',
          component: EpNotification,
          props: {
            id: faker.string.uuid(),
            message: 'This is a toast notification!',
            timestamp: new Date().toISOString(),
          }
        })

        console.log('After:', overlay.overlays)
      })
    }

    return {
      args,
      notifications,
      removeNotification,
      clearNotifications,
      showToast
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
      <button @click="showToast">Show Toast</button>
    </div>
  `
})

NotificationCenter.args = {
  emptyStateMessage: 'No notifications to display',
  notificationsTitle: 'Notifications',
}

