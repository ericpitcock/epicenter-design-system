import { padded } from '@/helpers/decorators'
import E from '@/components/logo/E'
import EpButton from '@/components/button/EpButton'
import EpContainer from '@/components/container/EpContainer'
import EpFeedbackCard from '@/components/notification/EpFeedbackCard'
import EpFooter from '@/components/footer/EpFooter'
import EpHeader from '@/components/header/EpHeader'
import EpNotifications from './EpNotifications'
import store from '@/store'

export default {
  title: 'Components/Notifications',
  component: EpNotifications,
  decorators: [padded],
  argTypes: {}
}

// build notification object and dispatch to store
const buildNotification = type => {
  const notification = {
    message: 'Your message was sent successfully',
    type
  }
  store.dispatch('addNotification', notification)
}

const Template = args => ({
  components: {
    E,
    EpButton,
    EpContainer,
    EpFooter,
    EpFeedbackCard,
    EpHeader,
    EpNotifications
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
          <div style="height: 3.5rem;">
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
          <ep-button
            label="Submit"
            @click="buildNotification('success')"
          />
          <ep-button
            label="Info"
            @click="buildNotification('info')"
          />
        </template>
      </ep-header>
      </template>
      <template #default>
        <ep-feedback-card />
      </template>
      <template #footer>
        <ep-footer />
      </template>
    </ep-container>
  `
})

export const Notifications = Template.bind({})
