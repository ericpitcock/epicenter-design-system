import { centered } from '@/helpers/decorators'
import EpDropdown from './EpDropdown'

const buttonDefaults = {
  kind: 'secondary',
  size: 'default',
  title: 'Components/Default Dropdown',
  label: 'Default Dropdown',
  iconRight: { name: 'chevron-down' },
  iconLeft: undefined
}
const containerProps = {
  backgroundColor: 'var(--background-4)',
  padding: '1rem 0',
  borderRadius: 'var(--border-radius)',
  borderColor: 'var(--border-color--lighter)'
}
const fakeDropdownItems = [
  {
    label: 'Go to internal page',
    iconLeft: { name: 'arrow-right' },
    bind: {
      to: '/'
    }
  },
  {
    divider: true
  },
  {
    label: 'Log click',
    iconLeft: { name: 'circle' },
    command: () => {
      console.log('click')
    }
  },
  {
    label: 'Link to internet',
    iconLeft: { name: 'export' },
    bind: {
      href: 'https://www.google.com/maps'
    }
  }
]

export default {
  title: 'Components/Dropdown',
  component: EpDropdown,
  decorators: [centered],
  argTypes: {
    alignRight: {
      name: 'Align right',
      control: {
        type: 'boolean'
      },
      defaultValue: false
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

const Template = (args) => ({
  components: { EpDropdown },
  // data: () => ({ buttonDefaults, menuItems: fakeDropdownItems }),
  setup() {
    return { args };
  },
  template: '<ep-dropdown v-bind="args" />'
})

export const Dropdown = Template.bind({})
