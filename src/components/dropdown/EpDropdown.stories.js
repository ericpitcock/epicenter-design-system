import { centered } from '@/helpers/decorators'
import EpDropdown from './EpDropdown'

const buttonDefaults = {
  kind: 'secondary',
  size: 'default',
  title: 'Default Dropdown',
  label: 'Default Dropdown',
  iconRight: 'chevron-down',
  iconLeft: undefined
}
const fakeDropdownItems = [
  {
    label: 'Go to internal page',
    iconLeft: 'arrow-right',
    bind: {
      to: '/'
    }
  },
  {
    divider: true
  },
  {
    label: 'Log click',
    iconLeft: 'circle',
    command: () => {
      console.log('click')
    }
  },
  {
    label: 'Link to internet',
    iconLeft: 'export',
    bind: {
      href: 'https://www.google.com/maps'
    }
  }
]

export default {
  title: 'Dropdown',
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
  data: () => ({ buttonDefaults, menuItems: fakeDropdownItems }),
  setup() {
    return { args };
  },
  template: '<ep-dropdown :button="buttonDefaults" :menuItems="menuItems" v-bind="args" />'
})

export const Dropdown = Template.bind({})
