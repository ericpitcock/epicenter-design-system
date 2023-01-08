import { centered } from '@/helpers/decorators'
import EpContainer from '@/atoms/container/EpContainer'
import EpButton from '@/atoms/button/EpButton'
import EpNotification from './EpNotification'
import store from '@/store'

export default {
  title: 'Molecules/Notification',
  component: EpNotification,
  decorators: [centered],
  argTypes: {
    // message: {
    //   name: 'Message',
    //   control: {
    //     type: 'text'
    //   },
    //   defaultValue: 'Your message was sent successfully'
    // },
    // permanent: {
    //   name: 'Permanent',
    //   control: {
    //     type: 'boolean'
    //   },
    //   defaultValue: false
    // },
    notification: {
      name: 'Notification',
      control: {
        type: 'object'
      },
      defaultValue: {
        id: 1,
        duration: 5000,
        message: 'Your message was sent successfully'
      }
    }
  }
}

const Template = args => ({
  components: { EpButton, EpContainer, EpNotification },
  setup() {
    return { args, store }
  },
  template: `
    <ep-container :width="'30rem'" :height="'50rem'">
      <ep-button
        :label="'Send Message'"
        @click="store.dispatch('showNotification', args.notification)"
      />
    </ep-container>
    <ep-notification
      v-bind="args"
      @dismiss="store.dispatch('removeNotification', args.notification)"
    />
  `
})

export const Notification = Template.bind({})
