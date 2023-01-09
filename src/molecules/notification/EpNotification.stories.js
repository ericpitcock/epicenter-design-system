// import { centered } from '@/helpers/decorators'
import EpContainer from '@/atoms/container/EpContainer'
import EpButton from '@/atoms/button/EpButton'
import EpNotifications from './EpNotifications'
import EpFlexContainer from '@/atoms/flexbox/EpFlexContainer'
import EpAppHeader from '@/organisms/app-header/EpAppHeader'
import EpSidebarLayout from '@/templates/sidebar/EpSidebarLayout'
import store from '@/store'

export default {
  title: 'Molecules/Notifications',
  component: EpNotifications,
  // decorators: [centered],
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
    // notification: {
    //   name: 'Notification',
    //   control: {
    //     type: 'object'
    //   },
    //   defaultValue: {
    //     id: 1,
    //     duration: null,
    //     message: 'Your message was sent successfully'
    //   }
    // }
  }
}

const temporaryNotification = {
  id: null,
  duration: 5000,
  message: 'Your message was sent successfully'
}

const permanentNotification = {
  id: null,
  duration: null,
  message: 'Your message was sent successfully'
}

const Template = args => ({
  components: {
    EpButton,
    EpContainer,
    EpFlexContainer,
    EpNotifications,
    EpAppHeader,
    EpSidebarLayout
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
    <ep-notifications top="5rem" right="1rem" />
    <ep-sidebar-layout>
      <template #app-header>
      <ep-app-header>
        app header
      </ep-app-header>
      </template>
      
      <template #sidebar>
      sidebar
      </template>
      
      <template #content>
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
      </template>
    </ep-sidebar-layout>
  `
})

export const Notifications = Template.bind({})
