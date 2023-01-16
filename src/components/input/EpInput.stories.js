import { centered } from '@/helpers/decorators'
import EpInput from './EpInput'
import EpButton from '@/components/button/EpButton'

export default {
  title: 'Input',
  component: EpInput,
  decorators: [centered],
  argTypes: {
    // onChange: { action: 'changed' },
    // onBlur: { action: 'blurred' },
    // onFocus: { action: 'focused' },
    error: {
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    placeholder: {
      control: {
        type: 'text'
      },
      defaultValue: 'placeholder'
    },
    type: {
      control: {
        type: 'text'
      },
      defaultValue: 'text'
    },
    value: {
      control: {
        type: 'text'
      },
      defaultValue: ''
    }
  }
}

const Template = args => ({
  components: { EpInput, EpButton },
  setup() {
    return { args }
  },
  template: '<div style="width: 300px;"><ep-input v-bind="args" /></div>'
})

export const Input = Template.bind({})
