import { centered } from '../../helpers/decorators'
import EpInput from '@/components/input/EpInput.vue'
import EpInputStyler from '@/components/input-styler/EpInputStyler.vue'

export default {
  title: 'Components/Input Styler',
  component: EpInputStyler,
  decorators: [centered],
  argTypes: {
    width: {
      control: {
        type: 'text',
      },
    },
    size: {
      options: ['small', 'default', 'large', 'xlarge'],
      control: {
        type: 'radio'
      },
    },
    iconLeft: {
      control: {
        type: 'object',
      },
    },
    iconRight: {
      control: {
        type: 'object',
      },
    },
  }
}

export const InputStyler = args => ({
  components: { EpInput, EpInputStyler },
  setup() {
    return { args }
  },
  template: `
    <ep-input-styler v-bind="args">
      <ep-input />
    </ep-input-styler>
  `
})

InputStyler.args = {
  width: '300px',
  size: 'large',
  iconLeft: { name: 'circle' },
  iconRight: { name: 'chevron-down' },
}
