import { centeredSurface } from '../../helpers/decorators.js'
import EpCheckbox from '@/components/checkbox/EpCheckbox.vue'
import EpFlexContainer from '@/components/flexbox/EpFlexContainer.vue'
import { ref } from 'vue'

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
    EpFlexContainer
  },
  setup() {
    const checkboxes = [
      { id: 'radio1', label: 'Mild', name: 'hotsauce', value: 'Mild' },
      { id: 'radio2', label: 'Hot', name: 'hotsauce', value: 'Hot' },
      { id: 'radio3', label: 'Extreme', name: 'hotsauce', value: 'Extreme' }
    ]

    const selectedOptions = ref([])

    return { args, checkboxes, selectedOptions }
  },
  template: `
    <ep-flex-container
      flex-flow="column nowrap"
      gap="1rem"
    >
      <h2>Hot Sauce:</h2>
      <ep-checkbox
        v-for="{ id, label, name, value } in checkboxes"
        :id
        :label
        :name
        :value
        v-model="selectedOptions"
        @update:modelValue="console.log('selectedOptions:', selectedOptions)"
      />
    </ep-flex-container>
  `
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
