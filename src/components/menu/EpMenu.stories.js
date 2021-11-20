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
  argTypes: {}
}

const Template = args => ({
  components: { EpContainer, EpMenu },
  data: () => ({ menuItems: fakeDropdownItems }),
  setup() {
    return { args }
  },
  template: `
  <ep-container width="200px" height="auto" padding="10px 0">
    <ep-menu :model="menuItems" />
  </ep-container>
  `
})

export const Menu = Template.bind({})
