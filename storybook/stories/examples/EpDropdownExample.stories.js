import { padded } from '../../helpers/decorators'
import EpActionBar from '@/components/action-bar/EpActionBar'
import commonActionBarArgs from '@/components/action-bar/commonActionBarArgs'
import EpDropdown from '@/components/dropdown/EpDropdown'
import EpContainer from '@/components/container/EpContainer'
import EpFooter from '@/components/footer/EpFooter'
import EpHeader from '@/components/header/EpHeader'

const buttonDefaults = {
  kind: 'secondary',
  size: 'default',
  title: 'Components/Default Dropdown',
  label: 'Export',
  iconRight: { name: 'chevron-down' },
  iconLeft: { name: 'export' }
}
const containerProps = {
  backgroundColor: 'var(--background-4)',
  containerPadding: '1rem 0',
  borderRadius: 'var(--border-radius)',
  borderColor: 'var(--border-color--lighter)'
}
const fakeDropdownItems = [
  {
    label: 'PDF',
    iconLeft: { name: 'file' }
  },
  {
    label: 'JPG',
    iconLeft: { name: 'file' }
  },
  {
    divider: true
  },
  {
    label: 'CSV',
    iconLeft: { name: 'file' }
  },
  {
    label: 'JSON',
    iconLeft: { name: 'file' }
  }
]

export default {
  title: 'Components/Dropdown/Dropdown In Context',
  component: EpDropdown,
  decorators: [padded],
  argTypes: {
    alignRight: {
      name: 'Align Right',
      control: {
        type: 'boolean'
      }
    },
    button: {
      name: 'Button Props',
      control: {
        type: 'object'
      }
    },
    containerProps: {
      name: 'Container Props',
      control: {
        type: 'object'
      }
    },
    menuItems: {
      name: 'Menu Items',
      control: {
        type: 'array'
      }
    }
  }
}

export const DropdownInContext = args => ({
  components: {
    EpActionBar,
    EpDropdown,
    EpContainer,
    EpFooter,
    EpHeader
  },
  setup() {
    return { args, commonActionBarArgs }
  },
  template: `
    <ep-container
      max-width="120rem"
      height="100%"
      container-padding="0 3rem"
      content-padding="3rem 0"
      overflow="hidden"
    >
      <template #header>
      <ep-header>
        <template #left>
          <ep-dropdown v-bind="args" />
        </template>
        <template #right>
          <ep-action-bar v-bind="commonActionBarArgs" />
        </template>
      </ep-header>
      </template>
      <template #default>
      </template>
      <template #footer>
        <ep-footer />
      </template>
    </ep-container>
  `
})

DropdownInContext.args = {
  alignRight: false,
  button: buttonDefaults,
  containerProps,
  menuItems: fakeDropdownItems
}
