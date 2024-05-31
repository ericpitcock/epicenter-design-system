import { paddedBg } from '../../helpers/decorators.js'
import EpContainer from '@/components/container/EpContainer.vue'
import EpNotifications from '@/components/notification/EpNotifications.vue'
import { useStorybookStore } from '../../store'
import { computed } from 'vue'

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
    const store = useStorybookStore()
    const notifications = computed(() => store.notifications)

    const removeNotification = (id) => {
      store.removeNotification(id)
    }

    const clearNotifications = () => {
      store.clearNotifications()
    }

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

