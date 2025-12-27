import { paddedSurface } from '../../helpers/decorators.js'

import EpFormsSandbox from './EpFormsSandbox.vue'

export default {
  title: 'Playground/Form',
  decorators: [paddedSurface],
  argTypes: {
    formDisabled: {
      name: 'Form Disabled',
      control: { type: 'boolean' }
    }
  }
}

export const Form = args => ({
  components: {
    EpFormsSandbox
  },
  setup() {
    return {
      args
    }
  },
  template: `
    <ep-forms-sandbox :form-disabled="args.formDisabled" />
  `
})

Form.args = {
  formDisabled: false
}
