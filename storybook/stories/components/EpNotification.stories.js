import { faker } from '@faker-js/faker'
import { centeredSurface } from '../../helpers/decorators.js'
import EpNotification from '@/components/notification/EpNotification.vue'
import { computed } from 'vue'

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
    timestamp: {
      name: 'Timestamp',
      control: {
        type: 'number'
      }
    },
    stripColor: {
      name: 'Strip Color',
      control: {
        type: 'color'
      }
    },
    styles: { table: { disable: true } },
  }
}

export const Notification = args => ({
  components: {
    EpNotification
  },
  setup() {
    const styles = computed(() => {
      return {
        '--ep-notification-strip-color': args.stripColor
      }
    })
    return { args, styles }
  },
  template: '<ep-notification v-bind="args" :style="styles" />'
})

Notification.args = {
  id: '1',
  message: 'The future is bright!',
  timestamp: faker.date.future({ days: 100 }).toISOString(),
  stripColor: '#FFD700'
}
