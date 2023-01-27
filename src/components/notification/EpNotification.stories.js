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
const buildNotification = style => {
  const notification = {
    message: 'Thank you for your feedback!',
    style
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
        </template>
      </ep-header>
      </template>
      <template #default>
        <ep-notifications top="5rem" right="1rem" />
        <ep-feedback-card @submit="buildNotification('success')" />
      </template>
    </ep-container>
  `
})

export const Notifications = Template.bind({})
