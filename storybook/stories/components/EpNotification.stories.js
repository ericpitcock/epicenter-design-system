import { faker } from '@faker-js/faker'
import { centeredSurface } from '../../helpers/decorators.js'
import EpNotification from '@/components/notification/EpNotification.vue'
// import { useStorybookStore } from '../../storybook/store'
// const store = useStorybookStore()

export default {
  title: 'Components/Notification',
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
  timestamp: faker.date.future({ days: 100 }).toISOString()
}
