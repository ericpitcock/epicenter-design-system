import { centered } from '@/helpers/decorators'
import EpMenu from '@/components/menu/EpMenu'

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
    section: true,
    label: 'Section'
  },
  {
    label: 'Log click',
    iconLeft: { name: 'circle' },
    command: () => console.log('click')
  },
  {
    label: 'Google Maps',
    iconLeft: { name: 'export' },
    bind: {
      href: 'https://www.google.com/maps'
    }
  },
  {
    label: 'Sub-menu',
    iconLeft: { name: 'menu' },
    iconRight: { name: 'chevron-right' },
    children: [
      {
        label: 'Sub-menu item 1',
        command: () => console.log('click')
      },
      {
        label: 'Sub-menu item 2',
        command: () => console.log('click')
      },
      { divider: true },
      {
        label: 'Sub-menu item 3',
        command: () => console.log('click')
      },
      {
        label: 'Sub-menu item 4',
        command: () => console.log('click')
      }
    ]
  },
  {
    divider: true
  },
  {
    section: true,
    label: 'Section'
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
  { divider: true },
  {
    section: true,
    label: 'Section'
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
  {
    label: 'Another sub-menu',
    iconRight: { name: 'chevron-right' },
    children: [
      {
        label: 'Sub-menu item 1',
        command: () => console.log('click')
      },
      {
        label: 'Sub-menu item 2',
        command: () => console.log('click')
      },
      {
        label: 'Sub-menu item 3',
        command: () => console.log('click')
      }
    ]
  }
]

export default {
  title: 'Components/Menu',
  component: EpMenu,
  decorators: [centered],
  argTypes: {
    containerProps: {
      name: 'Container Props',
      control: {
        type: 'object'
      }
    },
    menuItems: {
      name: 'Menu items',
      control: {
        type: 'array'
      }
    }
  }
}

const Template = args => ({
  components: { EpMenu },
  setup() {
    return { args }
  },
  template: '<ep-menu v-bind="args" />'
})

export const Menu = Template.bind({})

Menu.args = {
  containerProps: {
    width: '20rem',
    height: 'auto',
    padding: '1rem 0',
    borderRadius: 'var(--border-radius)'
  },
  menuItems: fakeDropdownItems
}
