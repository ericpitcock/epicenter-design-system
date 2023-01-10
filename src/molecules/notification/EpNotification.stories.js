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
  argTypes: {
  }
}

const temporaryNotification = {
  duration: 5000,
  message: 'Your message was sent successfully'
}

const permanentNotification = {
  message: 'Your message was sent successfully'
}

const Template = args => ({
  components: {
    EpAppHeader,
    EpButton,
    EpContainer,
    EpFlexContainer,
    EpNotifications,
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
        <ep-button kind="ghost" iconRight="notifications" />
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
          label="Temporary Notification"
          @click="store.dispatch('addNotification', temporaryNotification)"
        />
        <ep-button
          label="Permanent Notification"
          @click="store.dispatch('addNotification', permanentNotification)"
        />
        </ep-flex-container>
      </ep-container>
      </template>
    </ep-sidebar-layout>
  `
})

export const Notifications = Template.bind({})
