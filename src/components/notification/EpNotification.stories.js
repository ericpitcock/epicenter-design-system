import { padded } from '@/helpers/decorators'
import E from '@/components/logo/E'
import EpActionBar from '@/components/action-bar/EpActionBar'
import commonActionBarArgs from '@/components/action-bar/commonActionBarArgs'
import EpButton from '@/components/button/EpButton'
import EpContainer from '@/components/container/EpContainer'
import EpFeedbackCard from '@/components/notification/EpFeedbackCard'
import EpFooter from '@/components/footer/EpFooter'
import EpHeader from '@/components/header/EpHeader'
import EpNotifications from './EpNotifications'
import EpTempNotification from '@/components/notification/EpTempNotification'
import store from '@/store'

export default {
  title: 'Components/Notifications',
  component: EpNotifications,
  decorators: [padded],
  argTypes: {}
}

// build notification object and dispatch to store
const buildNotification = alertStyle => {
  const notification = {
    message: 'Thanks for the feedback!',
    alertStyle
    // store will append active: true, id, and timestamp
  }
  store.dispatch('addNotification', notification)
}

const Template = args => ({
  components: {
    E,
    EpActionBar,
    EpButton,
    EpContainer,
    EpFooter,
    EpFeedbackCard,
    EpHeader,
    EpNotifications,
    EpTempNotification
  },
  setup() {
    return {
      args,
      buildNotification,
      commonActionBarArgs,
      store
    }
  },
  template: `
    <ep-temp-notification />
    <ep-container
      useHeader
      useFooter
      max-width="120rem"
      height="100%"
      padding="3rem"
      overflow="hidden"
    >
      <template #header>
      <ep-header>
        <template #left>
          <div style="width: 27px;">
            <e
              faceColor="transparent"
              highlightColor="transparent"
              shadowColor="transparent"
              :strokeWidth="6"
              strokeColor="var(--sky-300)"
            />
          </div>
        </template>
        <template #right>
          <ep-action-bar v-bind="commonActionBarArgs" />
        </template>
      </ep-header>
      </template>
      <template #default>
        <ep-feedback-card @submit="buildNotification('success')" />
      </template>
    </ep-container>
  `
})

export const Notifications = Template.bind({})
