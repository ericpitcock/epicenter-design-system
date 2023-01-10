import EpContainer from '@/components/container/EpContainer'
import EpButton from '@/components/button/EpButton'
import EpDropdown from '@/components/dropdown/EpDropdown'
import EpNotifications from './EpNotifications'
import EpFlexContainer from '@/components/flexbox/EpFlexContainer'
import EpAppHeader from '@/components/app-header/EpAppHeader'
import EpSidebarLayout from '@/templates/sidebar/EpSidebarLayout'
import store from '@/store'

export default {
  title: 'Notifications',
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
    EpDropdown,
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
        <ep-dropdown
          :button="{
            kind: 'ghost',
            iconRight: 'notifications',
            label: ''
          }"
          :alignRight="true"
        >
          <template #content>
            <div class="notification-center">
              notifications center
            </div>
          </template>
        </ep-dropdown>
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
          @click="store.dispatch('addNotification', temporaryNotification)"
        />
        <ep-button
          label="Permanent"
          @click="store.dispatch('addNotification', permanentNotification)"
        />
        </ep-flex-container>
      </ep-container>
      </template>
    </ep-sidebar-layout>
  `
})

export const Notifications = Template.bind({})
