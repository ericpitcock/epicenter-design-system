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
        // command: () => toggleAll(),
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

    const selectedStyles = ref([])
    // when mounted, add all checked values to selectedStyles
    checkboxes.value.forEach(checkbox => {
      if (checkbox.checked && checkbox.value !== 'all') {
        selectedStyles.value.push(checkbox.value)
      }
    })

    const toggleAll = () => {
      // toggle all checkboxes
      checkboxes.value.forEach(checkbox => {
        checkbox.checked = !checkbox.checked
      })
    }

    const checkChange = (index) => {
      // toggle the checkbox that was clicked
      checkboxes.value[index].checked = !checkboxes.value[index].checked

      if (index === 0) {
        toggleAll()
      }
      
      console.log('change')
      // uncheck select all checkbox if any other checkbox is unchecked
      if (checkboxes.value.some(checkbox => !checkbox.checked)) {
        checkboxes.value[0].checked = false
      }
      // if select all checkbox is not checked and every checkbox after index 0 is checked, check select all checkbox
      if (!checkboxes.value[0].checked && checkboxes.value.slice(1).every(checkbox => checkbox.checked)) {
        checkboxes.value[0].checked = true
      }

      // if select all checkbox is checked, add all styles to selectedStyles
      if (checkboxes.value[0].checked) {
        selectedStyles.value = ['sans-serif', 'serif', 'display', 'handwriting', 'monospace']
      // if select all checkbox is not checked, add all checked styles to selectedStyles
      } else {
        selectedStyles.value = []
        checkboxes.value.forEach(checkbox => {
          if (checkbox.checked && checkbox.value !== 'all') {
            selectedStyles.value.push(checkbox.value)
          }
        })
      }

      // // if select all checkbox is unchecked, remove all styles from selectedStyles
      // if (index === 0 && !checkboxes.value[0].checked) {
      //   selectedStyles.value = []
      // // if select all checkbox is checked, add all styles to selectedStyles
      // } else {
      //   selectedStyles.value = ['sans-serif', 'serif', 'display', 'handwriting', 'monospace']
      // }

      // updatte selectedStyles
      // selectedStyles.value = []
      // checkboxes.value.forEach(checkbox => {
      //   if (checkbox.checked && checkbox.value !== 'all') {
      //     selectedStyles.value.push(checkbox.value)
      //   }
      // })
    }

    return {
      args,
      checkboxes,
      commonActionBarArgs,
      checkChange,
      toggleAll,
      selectedStyles
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
        {{ selectedStyles }}
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