import EpButton from '@/components/button/EpButton.vue'
import EpContainer from '@/components/container/EpContainer.vue'
import EpNotification from '@/components/notification/EpNotification.vue'
import EpNotifications from '@/components/notification/EpNotifications.vue'
import { useNotifications } from '@/components/notification/useNotifications.js'
import EpOverlay from '@/components/overlays/EpOverlay.vue'
import { faker } from '@faker-js/faker'
import { ref } from 'vue'

export default {
  title: 'Components/Notifications/Notification Center',
  component: EpNotifications,
  decorators: [() => ({ template: '<div id="app"><story /></div>' })],
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
    EpButton,
    EpContainer,
    EpNotification,
    EpNotifications,
    EpOverlay,
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

    const showOverlay = ref(false)
    const overlayType = ref('toast')

    function showToast() {
      overlayType.value = 'toast'
      showOverlay.value = true
    }

    const showModal = () => {
      overlayType.value = 'modal'
      showOverlay.value = true
    }

    return {
      args,
      notifications,
      removeNotification,
      clearNotifications,
      showOverlay,
      showModal,
      showToast,
      overlayType,
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
      <ep-button label="Show Toast" style="margin-top: 2rem;" @click="showToast" />
      <ep-button label="Show Modal" style="margin-top: 2rem;" @click="showModal" />
      <ep-overlay
        :type="overlayType"
        backdrop-close
        v-model:modelValue="showOverlay"
      >
        <ep-notification
          id="toast"
          message="This is a toast notification!"
          timestamp="2021-08-25T17:00:00.000Z"
          @dismiss="showOverlay = false"
        />
      </ep-overlay>
    </div>
  `
})

NotificationCenter.args = {
  emptyStateMessage: 'No notifications to display',
  notificationsTitle: 'Notifications',
}

