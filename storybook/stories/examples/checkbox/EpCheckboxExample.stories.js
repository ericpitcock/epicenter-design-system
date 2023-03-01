import faker from 'faker'
import { padded } from '../../../helpers/decorators'
import EpActionBar from '@/components/action-bar/EpActionBar'
import commonActionBarArgs from '@/components/action-bar/commonActionBarArgs'
import EpBadge from '@/components/badge/EpBadge'
import EpCheckbox from '@/components/checkbox/EpCheckbox'
import EpContainer from '@/components/container/EpContainer'
import EpFooter from '@/components/footer/EpFooter'
import EpHeader from '@/components/header/EpHeader'
import GoogleFonts from './EpCheckboxExample'
import { ref } from 'vue'

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
// const Bare = args => ({
//   components: {
//     EpCheckbox,
//   },
//   setup() {
//     return { args }
//   },
//   template: '<ep-checkbox v-bind="args" />'
// })

// export const Checkbox = Bare.bind({})

// Checkbox.args = {
//   id: 'checkbox',
//   name: 'checkbox',
//   value: 'checkbox',
//   checked: false,
//   disabled: false,
//   indeterminate: false,
//   label: 'Checkbox',
//   required: false,
//   readonly: false,
//   tabindex: 0
// }

// component in context
const Example = args => ({
  components: {
    EpActionBar,
    EpBadge,
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
      checkboxes.value[index].checked = !checkboxes.value[index].checked

      // if index is 0 (that is "All" ) toggle all checkboxes to the same state
      if (index === 0) {
        checkboxes.value.forEach(checkbox => checkbox.checked = checkboxes.value[0].checked)
        // if a different checkbox is clicked
      } else {
        // if all checkboxes, except "All" are checked
        if (checkboxes.value.slice(1).every(checkbox => checkbox.checked)) {
          checkboxes.value[0].checked = true
          checkboxes.value[0].indeterminate = false
        }
        // if some checkboxes are checked and some are not
        if (checkboxes.value.some(checkbox => checkbox.checked) &&
          checkboxes.value.some(checkbox => !checkbox.checked)) {
          checkboxes.value[0].indeterminate = true
          checkboxes.value[0].checked = false
          // all other cases
        } else {
          checkboxes.value[0].indeterminate = false
        }
      }

      // update selectedStyles based on checkbox states
      selectedStyles.value = checkboxes.value[0].checked ?
        ['sans-serif', 'serif', 'display', 'handwriting', 'monospace'] :
        checkboxes.value
          .filter(checkbox => checkbox.checked && checkbox.value !== 'all')
          .map(checkbox => checkbox.value)
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
      max-width="120rem"
      height="100%"
      container-padding="0 3rem"
      content-padding="3rem 0"
      overflow="auto"
    >
      <template #header>
      <ep-header>
        <template #left>
          <ep-badge label="Work in progress" borderColor="var(--bg-color--alert-high)" />
          <h1>Google Fonts</h1>
        </template>
        <template #right>
          <ep-action-bar v-bind="commonActionBarArgs" />
        </template>
      </ep-header>
      </template>
      <template #default>
        <div style="display: flex; height: 100%;">
          <div style="flex: 0 0 20rem; display: flex; flex-direction: column; gap: 1rem;">
            <ep-checkbox
              v-for="(checkbox, index) in checkboxes"
              v-bind="checkbox"
              @checkchange="checkChange(index)"
            />
          </div>
          <google-fonts :filter="selectedStyles" />
        </div>
      </template>
      <template #footer>
        <ep-footer>{{ selectedStyles }}</ep-footer>
      </template>
    </ep-container>
  `
})

export const CheckboxInContext = Example.bind({})

CheckboxInContext.parameters = {
  controls: {
    // exclude all using regex
    exclude: /.*$/,
    hideNoControlsWarning: true,
  }
}