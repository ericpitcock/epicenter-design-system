import faker from 'faker'
import { centeredSurface } from '../../helpers/decorators'
import EpNotification from '@/components/notification/EpNotification'
import store from '../../store'

export default {
  title: 'Components/Notifications/Notification',
  component: EpNotification,
  decorators: [centeredSurface],
  argTypes: {
    id: { table: { disable: true } },
    message: {
      name: 'Message',
      control: {
        type: 'text'
      }
    },
    variant: {
      name: 'Variant',
      options: [
        'info',
        'success',
        'warning',
        'error'
      ],
      control: {
        type: 'radio',
        labels: {
        info: 'Info',
        success: 'Success',
        warning: 'Warning',
        error: 'Error'
      },
      }
    },
    timestamp: {
      name: 'Timestamp',
      control: {
        type: 'number'
      }
    },
  }
}

export const Notification = args => ({
  components: {
    EpNotification
  },
  setup() {
    return { args }
  },
  template: '<ep-notification v-bind="args" />'
})

Notification.args = {
  id: '1',
  message: 'The future is bright!',
  variant: 'success',
  timestamp: faker.date.future(100).toISOString()
}
