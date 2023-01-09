import { centered } from '@/helpers/decorators'
import EpContainer from '@/atoms/container/EpContainer'
import EpButton from '@/atoms/button/EpButton'
import EpNotifications from './EpNotifications'
import EpFlexContainer from '@/atoms/flexbox/EpFlexContainer'
import store from '@/store'

export default {
  title: 'Molecules/Notifications',
  component: EpNotifications,
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
        duration: null,
        message: 'Your message was sent successfully'
      }
    }
  }
}

const temporaryNotification = {
  id: 1,
  duration: 5000,
  message: 'Your message was sent successfully'
}

const permanentNotification = {
  id: 2,
  duration: null,
  message: 'Your message was sent successfully'
}

const Template = args => ({
  components: {
    EpButton,
    EpContainer,
    EpFlexContainer,
    EpNotifications
  },
  setup() {
    return {
      args,
      store,
      temporaryNotification,
      permanentNotification
    }
  },
  template: `
    <ep-container width="30rem" height="50rem">
      <ep-flex-container
        flex-flow="column nowrap"
        align-items="center"
        justify-content="center"
        gap="2rem"
      >
      <ep-button
        label="Temporary Message"
        @click="store.dispatch('addNotification', temporaryNotification)"
      />
      <ep-button
        label="Permanent Message"
        @click="store.dispatch('addNotification', permanentNotification)"
      />
      </ep-flex-container>
    </ep-container>
    <ep-notifications />
  `
})

export const Notifications = Template.bind({})
