import EpMenu from './EpMenu'

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
  title: 'Components/Menu',
  component: EpMenu,
  argTypes: {}
}

const Template = args => ({
  components: { EpMenu },
  data: () => ({ menuItems: fakeDropdownItems }),
  setup() {
    return { args }
  },
  template: `
  <ep-menu />
  `
})

export const Menu = Template.bind({})
