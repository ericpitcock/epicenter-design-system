import { padded } from '../../helpers/decorators.js'
import EpContainer from '@/components/container/EpContainer.vue'
import EpNotifications from '@/components/notification/EpNotifications.vue'

export default {
  title: 'Components/Notifications/Notification Center',
  component: EpNotifications,
  decorators: [padded],
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
    return { args }
  },
  template: '<div style="width: 362px; height: 100%;"><ep-notifications v-bind="args" /></div>'
})

NotificationCenter.args = {
  emptyStateMessage: 'No notifications to display',
  notificationsTitle: 'Notifications'
}

