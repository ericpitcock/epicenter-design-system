import { centered } from '@/helpers/decorators'
import EpContainer from '@/atoms/container/EpContainer'
import EpButton from '@/atoms/button/EpButton'
import EpNotification from './EpNotification'
import store from '@/store'

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
        type: 'boolean'
      },
      defaultValue: false
    }
  }
}

const Template = args => ({
  components: { EpButton, EpContainer, EpNotification },
  // data: () => ({
  //   // show: true
  //   store
  // }),
  // store,
  setup() {
    return { args, store }
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
      <ep-button :label="'Send Message'" @click="store.state.showNotification = true" />
    </ep-container>
    <Teleport to="body">
      <ep-notification v-if="store.state.showNotification" v-bind="args" @close="store.state.showNotification = false" />
    </Teleport>
  `
})

export const Notification = Template.bind({})
