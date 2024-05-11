import { centeredBg } from '../../helpers/decorators.js'
import EpMenu from '@/components/menu/EpMenu.vue'

const fakeMenuItems = [
  {
    label: 'Go to internal page',
    iconLeft: { name: 'arrow-right' },
    bind: {
      to: '/'
    }
  },
  { divider: true },
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
  { divider: true },
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
  decorators: [centeredBg],
  argTypes: {
    size: {
      name: 'Size',
      options: ['small', 'default', 'large', 'xlarge'],
      control: {
        type: 'radio',
        labels: {
          small: 'Small',
          default: 'Default',
          large: 'Large',
          xlarge: 'X-Large'
        }
      }
    },
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

export const Menu = args => ({
  components: { EpMenu },
  setup() {
    return { args }
  },
  template: '<ep-menu v-bind="args" />'
})

Menu.args = {
  size: 'default',
  containerProps: {
    width: '200px',
    height: 'auto',
    // containerPadding: '1rem 0',
    borderRadius: 'var(--border-radius)',
    backgroundColor: 'var(--interface-surface)',
  },
  menuItems: fakeMenuItems
}
