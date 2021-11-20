import EpDropdown from './EpDropdown'
import EpDropdownItem from './EpDropdownItem'
import EpButton from '../button/EpButton'

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
  title: 'Components/Dropdown',
  component: EpDropdown,
  subcomponents: { EpDropdownItem, EpButton },
  argTypes: {
    alignRight: {
      name: 'Align right',
      control: {
        type: 'boolean'
      },
      defaultValue: false
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
  components: { EpDropdown, EpButton, EpDropdownItem },
  data: () => ({ menuItems: fakeDropdownItems }),
  setup() {
    return { args };
  },
  template: '<ep-dropdown :model="menuItems" v-bind="args" />'
})

export const Dropdown = Template.bind({})
