import { centered } from '../../../helpers/decorators'
import EpTempNotification from '@/components/notification/EpTempNotification'
import FeedbackCard from './FeedbackCard'
import store from '../../../store'

export default {
  title: 'Components/Notifications/Notifications In Context',
  component: EpTempNotification,
  decorators: [centered],
  argTypes: {},
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
}

// build notification object and dispatch to store
const buildNotification = variant => {
  const notification = {
    message: 'Thanks for the feedback!',
    variant
    // store will append active: true, id, and timestamp
  }
  store.dispatch('addNotification', notification)
}

export const NotificationsInContext = args => ({
  components: {
    EpTempNotification,
    FeedbackCard
  },
  setup() {
    return {
      args,
      buildNotification
    }
  },
  template: `
    <ep-temp-notification />
    <feedback-card @submit="buildNotification('success')" />
  `
})
