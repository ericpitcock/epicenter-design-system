import faker from 'faker'
import { padded } from '@/helpers/decorators'
import EpActionBar from '@/components/action-bar/EpActionBar'
import commonActionBarArgs from '@/components/action-bar/commonActionBarArgs'
import EpCheckbox from './EpCheckbox'
import EpContainer from '@/components/container/EpContainer'
import EpFooter from '@/components/footer/EpFooter'
import EpHeader from '@/components/header/EpHeader'
import { ref } from 'vue'

export default {
  title: 'Components/Checkbox',
  component: EpCheckbox,
  decorators: [padded],
  argTypes: {
    id: {
      control: {
        type: 'text'
      }
    },
    name: {
      control: {
        type: 'text'
      }
    },
    value: {
      control: {
        type: 'text'
      }
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
      control: {
        type: 'boolean'
      }
    },
    readonly: {
      control: {
        type: 'boolean'
      }
    },
    tabindex: {
      control: {
        type: 'number'
      }
    }
  }
}

const Template = args => ({
  components: {
    EpActionBar,
    EpCheckbox,
    EpContainer,
    EpFooter,
    EpHeader
  },
  setup() {
    const checkboxes = ref([
      {
        id: faker.datatype.uuid(),
        name: 'font-style',
        value: 'all',
        checked: true,
        label: 'All',
        indeterminate: false,
        command: () => selectAll(),
      },
      {
        id: faker.datatype.uuid(),
        name: 'font-style',
        value: 'sans-serif',
        checked: true,
        label: 'Sans Serif',
        // command: () => console.log('check change')
      },
      {
        id: faker.datatype.uuid(),
        name: 'font-style',
        value: 'serif',
        checked: true,
        label: 'Serif',
        // command: () => console.log('check change')
      },
      {
        id: faker.datatype.uuid(),
        name: 'font-style',
        value: 'display',
        checked: true,
        label: 'Display',
        // command: () => console.log('check change')
      },
      {
        id: faker.datatype.uuid(),
        name: 'font-style',
        value: 'handwriting',
        checked: true,
        label: 'Handwritng',
        // command: () => console.log('check change')
      },
      {
        id: faker.datatype.uuid(),
        name: 'font-style',
        value: 'monospace',
        checked: true,
        label: 'Monospace',
        // command: () => console.log('check change')
      }
    ])

    const selectAll = () => {
      // toggle all checkboxes
      checkboxes.value.forEach(checkbox => {
        checkbox.checked = !checkbox.checked
      })
    }

    // if some checkboxes are checked, set the select all checkbox to indeterminate
    const checkChange = (index) => {
      // using index, change checked value of that checkbox
      checkboxes.value[index].checked = !checkboxes.value[index].checked
      console.log('change')
      // uncheck select all checkbox if any other checkbox is unchecked
      if (checkboxes.value.some(checkbox => !checkbox.checked)) {
        checkboxes.value[0].checked = false
      }
      // if select all checkbox is not checked and every checkbox after index 0 is checked, check select all checkbox
      if (!checkboxes.value[0].checked && checkboxes.value.slice(1).every(checkbox => checkbox.checked)) {
        checkboxes.value[0].checked = true
      }
      
      console.log(checkboxes.value)
    }

    return {
      args,
      checkboxes,
      commonActionBarArgs,
      checkChange,
      selectAll
    }
  },
  template: `
    <ep-container
      useHeader
      useFooter
      max-width="120rem"
      height="100%"
      overflow="hidden"
    >
      <template #header>
      <ep-header>
        <template #left>
          <h1>Fonts</h1>
        </template>
        <template #right>
          <ep-action-bar v-bind="commonActionBarArgs" />
        </template>
      </ep-header>
      </template>
      <template #default>
        <div style="display: flex; flex-direction: column;">
        <ep-checkbox
          v-for="(checkbox, index) in checkboxes"
          v-bind="checkbox"
          @checkchange="checkChange(index)"
        />
        </div>
      </template>
      <template #footer>
        <ep-footer />
      </template>
    </ep-container>
  `
})

export const Checkbox = Template.bind({})

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