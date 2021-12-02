import { centered } from '@/helpers/decorators'
import EpContainer from '../container/EpContainer'
import EpMenu from './EpMenu'

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
    label: 'Google Maps',
    iconLeft: 'export',
    bind: {
      href: 'https://www.google.com/maps'
    }
  },
  {
    label: 'Sub-menu',
    iconLeft: 'menu',
    iconRight: 'chevron-right'
  },
  {
    label: 'This is a menu item'
  },
  {
    label: 'Another menu item'
  },
  {
    label: 'The menuiest item'
  },
  {
    divider: true
  },
  {
    label: 'Go back'
  },
  {
    label: 'Two steps forward'
  },
  {
    label: 'Internet!'
  },
]

export default {
  title: 'Components/Menu',
  component: EpMenu,
  decorators: [centered],
  argTypes: {
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
  components: { EpContainer, EpMenu },
  data: () => ({ menuItems: fakeDropdownItems }),
  setup() {
    return { args }
  },
  template: `
  <ep-container width="20rem" height="auto" padding="1rem 0">
    <ep-menu :menuItems="menuItems" />
  </ep-container>
  `
})

export const Menu = Template.bind({})
