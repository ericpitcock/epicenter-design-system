import EpContainer from '@/components/container/EpContainer'
import EpButton from '@/components/button/EpButton'
import EpNotifications from './EpNotifications'
import EpFlexContainer from '@/components/flexbox/EpFlexContainer'
import EpAppHeader from '@/components/app-header/EpAppHeader'
import EpSidebarLayout from '@/templates/sidebar/EpSidebarLayout'
import E from '@/components/logo/E'
import store from '@/store'

export default {
  title: 'Components/Notifications',
  component: EpNotifications,
  argTypes: {
  }
}

// build notification object and dispatch to store
const buildNotification = (type) => {
  const notification = {
    message: 'Your message was sent successfully',
    type
  }
  store.dispatch('addNotification', notification)
}

const Template = args => ({
  components: {
    E,
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
      buildNotification,
      store
    }
  },
  template: `
    <ep-notifications top="5rem" right="1rem" />
    <ep-sidebar-layout>
      <template #app-header>
      <ep-app-header>
        <e />
        <ep-button
          kind="ghost"
          :iconRight="{ name: 'notifications' }"
          label=""
          @click="store.dispatch('toggleNotificationCenter')"
        />
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
        <h1>Notification Styles</h1>
        <ep-button
          label="Success"
          @click="buildNotification('success')"
        />
        <ep-button
          label="Info"
          @click="buildNotification('info')"
        />
        </ep-flex-container>
      </ep-container>
      </template>
    </ep-sidebar-layout>
  `
})

export const Notifications = Template.bind({})
