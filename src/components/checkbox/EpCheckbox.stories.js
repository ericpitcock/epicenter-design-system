import { padded } from '@/helpers/decorators'
import EpActionBar from '@/components/action-bar/EpActionBar'
import commonActionBarArgs from '@/components/action-bar/commonActionBarArgs'
import EpCheckbox from './EpCheckbox'
import EpContainer from '@/components/container/EpContainer'
import EpFooter from '@/components/footer/EpFooter'
import EpHeader from '@/components/header/EpHeader'

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
    return { args, commonActionBarArgs }
  },
  // template: '<ep-checkbox v-bind="args">Checkbox</ep-checkbox>',
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
      <ep-checkbox v-bind="args" />
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