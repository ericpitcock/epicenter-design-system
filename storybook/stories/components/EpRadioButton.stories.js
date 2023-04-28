import { centeredSurface } from '../../helpers/decorators'
import EpRadioButton from '@/components/radio-button/EpRadioButton.vue'

export default {
  title: 'Components/Radio Button',
  component: EpRadioButton,
  decorators: [centeredSurface],
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    value: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    checked: {
      control: {
        type: 'boolean',
      },
    },
  },
}

export const RadioButton = args => ({
  components: { EpRadioButton },
  setup() {
    return { args }
  },
  template: '<ep-radio-button v-bind="args" />'
})

RadioButton.args = {
  label: 'Radio Button',
  value: 'radio-button',
  disabled: false,
  checked: false,
}