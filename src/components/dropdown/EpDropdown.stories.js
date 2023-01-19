import { padded } from '@/helpers/decorators'
import EpDropdown from './EpDropdown'
import EpContainer from '@/components/container/EpContainer'
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
      },
      defaultValue: true
    },
    button: {
      name: 'Button',
      control: {
        type: 'object'
      },
      defaultValue: buttonDefaults
    },
    containerProps: {
      name: 'Container props',
      control: {
        type: 'object'
      },
      defaultValue: containerProps
    },
    menuItems: {
      name: 'Menu items',
      control: {
        type: 'array'
      },
      defaultValue: fakeDropdownItems
    }
  }
}

const Template = args => ({
  components: { EpDropdown, EpContainer, EpHeader },
  // data: () => ({ buttonDefaults, menuItems: fakeDropdownItems }),
  setup() {
    return { args }
  },
  // template: '<ep-dropdown v-bind="args" />'
  template: `
    <ep-container :useHeader="true" height="100%">
      <template #header>
      <ep-header>
        <template #left>
          <h1>Dropdown</h1>
        </template>
        <template #right>
          <ep-dropdown v-bind="args" />
        </template>
      </ep-header>
      </template>
    </ep-container>
  `
})

export const Dropdown = Template.bind({})
