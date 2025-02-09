import EpSignIn from '@/components/sign-in/EpSignIn.vue'

import { centeredCyanBlueGradient } from '../../helpers/decorators.js'

export default {
  title: 'Components/Sign In',
  component: EpSignIn,
  decorators: [centeredCyanBlueGradient],
  parameters: {
    controls: { hideNoControlsWarning: true }
  },
  argTypes: {}
}

export const SignIn = args => ({
  components: { EpSignIn },
  setup() {
    return { args }
  },
  template: '<ep-sign-in v-bind="args" />'
})

SignIn.args = {
}