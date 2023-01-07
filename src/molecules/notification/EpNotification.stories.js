import EpButton from '@/atoms/button/EpButton'
import EpNotification from './EpNotification'

export default {
  title: 'Molecules/Notification',
  component: EpNotification,
  argTypes: {
    message: {
      name: 'Message',
      control: {
        type: 'text'
      },
      defaultValue: 'Your message was sent successfully'
    }
  }
}

const Template = args => ({
  components: { EpButton, EpNotification },
  data: () => ({
    show: false
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
    <ep-button :label="'Send Message'" @click="showNotification" />
    <Teleport to="body">
      <ep-notification v-if="show" v-bind="args" />
    </Teleport>
  `
})

export const Notification = Template.bind({})
