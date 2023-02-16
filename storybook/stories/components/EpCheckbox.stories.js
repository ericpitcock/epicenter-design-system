import { padded } from '@/helpers/decorators'
import EpCheckbox from '@/components/checkbox/EpCheckbox'

export default {
  title: 'Components/Checkbox',
  component: EpCheckbox,
  decorators: [padded],
  argTypes: {
    id: {
      table: { disable: true }
    },
    name: {
      table: { disable: true }
    },
    value: {
      table: { disable: true }
    },
    checked: {
      control: {
        type: 'boolean'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    indeterminate: {
      control: {
        type: 'boolean'
      }
    },
    label: {
      control: {
        type: 'text'
      }
    },
    required: {
      table: { disable: true }
    },
    readonly: {
      table: { disable: true }
    },
    tabindex: {
      table: { disable: true }
    },
    command: {
      table: { disable: true }
    }
  }
}
// bare component
const Bare = args => ({
  components: {
    EpCheckbox,
  },
  setup() {
    return { args }
  },
  template: '<ep-checkbox v-bind="args" />'
})

export const Checkbox = Bare.bind({})

Checkbox.args = {
  id: 'checkbox',
  name: 'checkbox',
  value: 'checkbox',
  checked: false,
  disabled: false,
  indeterminate: false,
  label: 'Checkbox',
  required: false,
  readonly: false,
  tabindex: 0
}
