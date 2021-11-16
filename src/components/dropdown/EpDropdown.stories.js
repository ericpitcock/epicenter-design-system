import EpDropdown from './EpDropdown'
import EpDropdownItem from './EpDropdownItem'
import EpButton from '../button/EpButton'

// const container = () => {
//   return {
//     template:
//       '<div style="display: flex; justify-content: center; padding-top: 20%;"><story/></div>'
//   }
// }

const fakeDropdownItems = [
  {
    label: 'Go to internal page',
    icon: 'arrow-right',
    bind: {
      to: '/'
    }
  },
  {
    divider: true
  },
  {
    label: 'Run a method',
    icon: 'circle',
    on: {
      click: () => console.log('click')
    }
  },
  {
    label: 'Link to internet',
    icon: 'export',
    bind: {
      href: 'https://www.google.com/maps'
    }
  }
]

export default {
  title: 'Components/Dropdown',
  component: EpDropdown,
  subcomponents: { EpDropdownItem, EpButton },
  // decorators: [container],
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
  // props: Object.keys(argTypes),
  data: () => ({ menuItems: fakeDropdownItems }),
  setup() {
    return { args };
  },
  template: `
  <ep-dropdown>
    <template #trigger>
      <ep-button
        kind="secondary"
        label="Dropdown"
        iconRight="chevron-down"
      />
    </template>
    <template v-for="(item, index) in menuItems">
      <ep-dropdown-item
        :item="item"
        :index="index"
        :key="index"
        v-on="item.on"
      />
    </template>
  </ep-dropdown>
  `
})

export const Dropdown = Template.bind({})
