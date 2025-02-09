import { computed, ref } from 'vue'

import EpCheckbox from '@/components/checkbox/EpCheckbox.vue'
import EpFlex from '@/components/flexbox/EpFlex.vue'

import { paddedSurface } from '../../helpers/decorators.js'

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
      table: { disable: true }
    },
    disabled: {
      table: { disable: true }
    },
    indeterminate: {
      table: { disable: true }
    },
    label: {
      table: { disable: true }
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
    EpFlex
  },
  setup() {
    const checkboxes = ref([
      {
        id: 'checkbox1',
        label: 'Checked',
        name: 'checkboxes',
        value: 'checked',
        checked: true,
      },
      {
        id: 'checkbox2',
        label: 'Indeterminate',
        name: 'checkboxes',
        value: 'indeterminate',
        checked: false,
        indeterminate: true,
      },
      {
        id: 'checkbox3',
        label: 'Disabled',
        name: 'checkboxes',
        value: 'disabled',
        checked: false,
        disabled: true,
      },
    ])

    const selectedOptions = computed(() => {
      const checked = checkboxes.value.filter(checkbox => checkbox.checked || checkbox.indeterminate)
      return checked.map(checkbox => checkbox.value)
    })

    const updateChecked = (event, label, id) => {
      console.log(`${label}:`, event)
      // find the checkbox by id and update its checked property
      const checkbox = checkboxes.value.find(checkbox => checkbox.id === id)
      checkbox.checked = event
      checkbox.indeterminate = false
    }

    return { args, checkboxes, selectedOptions, updateChecked }
  },
  template: `
    <ep-flex class="flex-col gap-10" style="height: 100%">
      <ep-checkbox
        v-for="checkbox in checkboxes"
        :key="checkbox.id"
        v-bind="checkbox"
        v-model="checkbox.checked"
        @update:modelValue="updateChecked($event, checkbox.label, checkbox.id)"
      />
    </ep-flex>
    {{ selectedOptions }}
  `
})

export const Checkbox = Bare.bind({})

Checkbox.args = {
  checked: true,
  disabled: false,
  indeterminate: false
}
