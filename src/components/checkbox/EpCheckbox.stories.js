import faker from 'faker'
import { padded } from '@/helpers/decorators'
import EpActionBar from '@/components/action-bar/EpActionBar'
import commonActionBarArgs from '@/components/action-bar/commonActionBarArgs'
import EpCheckbox from './EpCheckbox'
import EpContainer from '@/components/container/EpContainer'
import EpFooter from '@/components/footer/EpFooter'
import EpHeader from '@/components/header/EpHeader'
import GoogleFonts from './GoogleFonts'
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
    EpHeader,
    GoogleFonts
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

    // const toggleAll = () => {
    //   // toggle all checkboxes
    //   checkboxes.value.forEach(checkbox => {
    //     checkbox.checked = !checkbox.checked
    //   })
    // }

    const checkChange = (index) => {
      // toggle the clicked checkbox
      checkboxes.value[index].checked = !checkboxes.value[index].checked;
    
      // check/uncheck all checkboxes based on index 0
      if (index === 0) {
        checkboxes.value.forEach(checkbox => checkbox.checked = checkboxes.value[0].checked);
      } else if (checkboxes.value.some(checkbox => !checkbox.checked)) {
        checkboxes.value[0].checked = false;
      } else if (checkboxes.value.slice(1).every(checkbox => checkbox.checked)) {
        checkboxes.value[0].checked = true;
      }
    
      // update selectedStyles based on checkbox states
      selectedStyles.value = checkboxes.value[0].checked ? 
        ['sans-serif', 'serif', 'display', 'handwriting', 'monospace'] :
        checkboxes.value
          .filter(checkbox => checkbox.checked && checkbox.value !== 'all')
          .map(checkbox => checkbox.value);
    }

    return {
      args,
      checkboxes,
      commonActionBarArgs,
      checkChange,
      // toggleAll,
      selectedStyles
    }
  },
  template: `
    <ep-container
      useHeader
      useFooter
      max-width="120rem"
      height="100%"
      overflow="auto"
    >
      <template #header>
      <ep-header>
        <template #left>
          <h1>Google Fonts</h1>
        </template>
        <template #right>
          <ep-action-bar v-bind="commonActionBarArgs" />
        </template>
      </ep-header>
      </template>
      <template #default>
        <div style="display: flex; height: 100%;">
          <div style="flex: 0 0 20rem; display: flex; flex-direction: column; gap: 1rem; padding: 3rem;">
            <ep-checkbox
              v-for="(checkbox, index) in checkboxes"
              v-bind="checkbox"
              @checkchange="checkChange(index)"
            />
          </div>
          <div style="flex: 1 1 auto; overflow: auto; padding: 3rem 0;">
            <google-fonts :filter="selectedStyles" />
          </div>
        </div>
      </template>
      <template #footer>
        <ep-footer>{{ selectedStyles }}</ep-footer>
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