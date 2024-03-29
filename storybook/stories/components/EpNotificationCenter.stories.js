import { padded } from '../../helpers/decorators'
import EpContainer from '@/components/container/EpContainer'
import EpNotifications from '@/components/notification/EpNotifications'

export default {
  title: 'Components/Notifications/Notification Center',
  component: EpNotifications,
  decorators: [padded],
  argTypes: {},
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
  template: '<div style="width: 362px; height: 100%;"><ep-notifications /></div>'
})

