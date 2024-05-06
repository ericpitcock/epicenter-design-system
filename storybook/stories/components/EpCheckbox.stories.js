import { centeredSurface } from '../../helpers/decorators.js'
import EpCheckbox from '@/components/checkbox/EpCheckbox.vue'

export default {
  title: 'Components/Checkbox',
  component: EpCheckbox,
  decorators: [centeredSurface],
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
      name: 'Checked',
      control: {
        type: 'boolean'
      }
    },
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean'
      }
    },
    indeterminate: {
      name: 'Indeterminate',
      control: {
        type: 'boolean'
      }
    },
    label: {
      name: 'Label',
      control: {
        type: 'text'
      }
    },
    modelValue: {
      table: { disable: true }
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
