import { paddedSurface } from '../../helpers/decorators.js'
import EpCheckbox from '@/components/checkbox/EpCheckbox.vue'
import EpFlexContainer from '@/components/flexbox/EpFlexContainer.vue'
import { ref, computed } from 'vue'

export default {
  title: 'Components/Checkbox',
  component: EpCheckbox,
  decorators: [paddedSurface],
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

const Bare = args => ({
  components: {
    EpCheckbox,
    EpFlexContainer
  },
  setup() {
    const checkboxes = ref([
      {
        id: 'checkbox1',
        checked: true,
        disabled: false,
        indeterminate: false,
        label: 'Mild',
        name: 'hotsauce',
        value: 'mild'
      },
      {
        id: 'checkbox2',
        checked: false,
        disabled: false,
        indeterminate: false,
        label: 'Hot',
        name: 'hotsauce',
        value: 'hot'
      },
      {
        id: 'checkbox3',
        checked: false,
        disabled: false,
        indeterminate: false,
        label: 'Extreme',
        name: 'hotsauce',
        value: 'extreme'
      }
    ])

    const selectedOptions = computed(() => {
      const checked = checkboxes.value.filter(checkbox => checkbox.checked)
      return checked.map(checkbox => checkbox.value)
    })

    const updateChecked = (event, id) => {
      console.log(event, id)
      // find the checkbox by id and update its checked property
      const checkbox = checkboxes.value.find(checkbox => checkbox.id === id)
      checkbox.checked = event
    }

    return { args, checkboxes, selectedOptions, updateChecked }
  },
  template: `
    <ep-flex-container
      flex-flow="column nowrap"
      align-items="flex-start"
      justify-content="flex-start"
      gap="1rem"
      style="width: 100%;"
    >
      <h2>Hot Sauce:</h2>
      <ep-checkbox
        v-for="{ id, checked, disabled, indeterminate, label, name, value } in checkboxes"
        :key="id"
        :id="id"
        :label="label"
        :name="name"
        :value="value"
        :checked="checked"
        :disabled="disabled"
        :indeterminate="indeterminate"
        v-model="checked"
        @update:modelValue="updateChecked($event, id)"
      />
    </ep-flex-container>
    {{ selectedOptions }}
  `
})

export const Checkbox = Bare.bind({})

Checkbox.args = {
  disabled: false,
  indeterminate: false
}
