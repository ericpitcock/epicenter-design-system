import { centeredSurface } from '../../helpers/decorators'
import EpSignIn from '@/components/sign-in/EpSignIn.vue'

export default {
  title: 'Components/Sign In',
  component: EpSignIn,
  decorators: [centeredSurface],
  parameters: {
    controls: { hideNoControlsWarning: true }
  },
  argTypes: {}
}

export const SignIn = args => ({
  components: { EpSignIn },
  setup () {
    return { args }
  },
  template: '<ep-sign-in v-bind="args" />'
})

SignIn.args = {
}