import { centered } from '@/helpers/decorators'
import EpContainer from '@/atoms/container/EpContainer'
import EpButton from '@/atoms/button/EpButton'
import EpNotification from './EpNotification'

export default {
  title: 'Molecules/Notification',
  component: EpNotification,
  decorators: [centered],
  argTypes: {
    message: {
      name: 'Message',
      control: {
        type: 'text'
      },
      defaultValue: 'Your message was sent successfully'
    },
    dismissable: {
      name: 'Dismissable',
      control: {
        type: 'boolean',
      },
      defaultValue: false
    }
  }
}

const Template = args => ({
  components: { EpButton, EpContainer, EpNotification },
  data: () => ({
    show: true
  }),
  setup() {
    return { args }
  },
  methods: {
    showNotification() {
      this.show = true
      setTimeout(() => {
        this.show = false
      }, 5000)
    }
  },
  template: `
    <ep-container :width="'30rem'" :height="'50rem'">
      <ep-button :label="'Send Message'" @click="showNotification" />
    </ep-container>
    <Teleport to="body">
      <ep-notification v-if="show" v-bind="args" @close="this.show = false" />
    </Teleport>
  `
})

export const Notification = Template.bind({})
