import EpContainer from '@/components/container/EpContainer'
import EpButton from '@/components/button/EpButton'
import EpNotifications from './EpNotifications'
import EpFlexContainer from '@/components/flexbox/EpFlexContainer'
import EpAppHeader from '@/components/app-header/EpAppHeader'
import EpSidebarLayout from '@/templates/sidebar/EpSidebarLayout'
import E from '@/components/logo/E'
import store from '@/store'

export default {
  title: 'Notifications',
  component: EpNotifications,
  argTypes: {
  }
}

// return random item from array
const types = [
  'info',
  'success',
  'warning',
  'error'
]
// return random item from types array
const randomStyle = () => types[Math.floor(Math.random() * types.length)]

// build notification object with random type and message and dispatch to store
const buildNotification = (type) => {
  const notification = {
    message: 'Your message was sent successfully',
    style: randomStyle(),
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
        <h1>Notification Types</h1>
        <ep-button
          label="Temporary"
          @click="buildNotification()"
        />
        <ep-button
          label="Permanent"
          @click="buildNotification('alert')"
        />
        </ep-flex-container>
      </ep-container>
      </template>
    </ep-sidebar-layout>
  `
})

export const Notifications = Template.bind({})
