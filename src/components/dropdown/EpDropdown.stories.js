import EpDropdown from './EpDropdown'
import EpButton from '../button/EpButton'
import EpDivider from './EpDivider'

// const container = () => {
//   return {
//     template:
//       '<div style="display: flex; justify-content: center; padding-top: 20%;"><story/></div>'
//   }
// }

const fakeDropdownItems = [
  {
    label: 'Go to internal page',
    action: {
      type: 'router-link',
      path: '/fart'
    }
  },
  {
    divider: true
  },
  {
    label: 'Run a method',
    action: {
      type: 'method',
      method: 'fakeMethod'
    }
  },
  {
    label: 'Link to internet',
    action: {
      type: 'link',
      href: 'https://www.google.com/maps'
    }
  }
]

export default {
  title: 'Components/Dropdown',
  component: EpDropdown,
  subcomponents: { EpButton, EpDivider },
  // decorators: [container],
  argTypes: {
    buttonKind: {
      name: 'Button Kind',
      control: {
        type: 'radio',
        options: {
          Primary: 'primary',
          Secondary: 'secondary',
          Naked: 'naked',
          Danger: 'danger',
          Warning: 'warning',
          Success: 'success'
        }
      },
      defaultValue: 'secondary'
    },
    buttonLabel: {
      name: 'Label',
      control: {
        type: 'text'
      },
      defaultValue: 'Dropdown'
    },
    menuItems: {
      name: 'Menu Items',
      control: {
        type: 'array',
      },
      defaultValue: fakeDropdownItems
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { EpDropdown, EpButton, EpDivider },
  props: Object.keys(argTypes),
  template: `
  <ep-dropdown
    :buttonKind="buttonKind"
    :buttonLabel="buttonLabel"
  >
    <template v-for="(item, index) in menuItems">
      <ep-button
        v-if="!item.divider"
        :label="item.label"
        kind="menu-item"
      />
      <ep-divider v-else />
    </template>
  </ep-dropdown>
  `
})

export const Dropdown = Template.bind({})
