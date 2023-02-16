import { padded } from '@/helpers/decorators'
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
  padding: '1rem 0',
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
  title: 'Components/Dropdown',
  component: EpDropdown,
  decorators: [padded],
  argTypes: {
    alignRight: {
      name: 'Align right',
      control: {
        type: 'boolean'
      }
    },
    button: {
      name: 'Button',
      control: {
        type: 'object'
      }
    },
    containerProps: {
      name: 'Container props',
      control: {
        type: 'object'
      }
    },
    menuItems: {
      name: 'Menu items',
      control: {
        type: 'array'
      }
    }
  }
}

const Template = args => ({
  components: {
    EpActionBar,
    EpDropdown,
    EpContainer,
    EpFooter,
    EpHeader
  },
  // data: () => ({ buttonDefaults, menuItems: fakeDropdownItems }),
  setup() {
    return { args, commonActionBarArgs }
  },
  // template: '<ep-dropdown v-bind="args" />'
  template: `
    <ep-container
      useHeader
      useFooter
      max-width="120rem"
      height="100%"
      padding="3rem"
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
        <div class="copy-block">
          <h1>Dropdown</h1>
          <p>Dropdowns are used in user interface design as a way to present a list of options to the user, while taking up minimal space on the screen. They are typically used to present a list of options that the user can select from, and are often used in navigation menus, forms, and other parts of the user interface where space is limited. They can also be used to save screen space and make the interface look cleaner. They are also used to group related options together.</p>
        </div>
      </template>
      <template #footer>
        <ep-footer />
      </template>
    </ep-container>
  `
})

export const Dropdown = Template.bind({})

Dropdown.args = {
  button: buttonDefaults,
  containerProps,
  menuItems: fakeDropdownItems
}
