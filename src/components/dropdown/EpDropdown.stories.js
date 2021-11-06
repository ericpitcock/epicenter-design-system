import EpDropdown from './EpDropdown'
import EpButton from '../button/EpButton'
import EpDivider from './EpDivider'

const container = () => {
  return {
    template:
      '<div style="display: flex; justify-content: center; padding-top: 20%;"><story/></div>'
  }
}

const fakeDropdownItems = [
  {
    label: 'Go to internal page',
    icon: 'arrow-right',
    action: {
      type: 'router-link',
      path: '/path'
    }
  },
  {
    divider: true
  },
  {
    label: 'Run a method',
    icon: 'circle',
    action: {
      type: 'method',
      method: 'fakeMethod'
    }
  },
  {
    label: 'Link to internet',
    icon: 'export',
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
  decorators: [container],
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

const Template = (args, { argTypes }) => ({
  components: { EpDropdown, EpButton, EpDivider },
  props: Object.keys(argTypes),
  template: `
  <ep-dropdown>
    <template #trigger>
      <ep-button
        kind="secondary"
        label="Dropdown"
        icon="chevron-down"
        iconAlignment="right"
      />
    </template>
    <template v-for="(item, index) in menuItems">
      <ep-button
        v-if="!item.divider"
        kind="menu-item"
        :label="item.label"
        :icon="item.icon"
      />
      <ep-divider v-else />
    </template>
  </ep-dropdown>
  `
})

export const Dropdown = Template.bind({})
