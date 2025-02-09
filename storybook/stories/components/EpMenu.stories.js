import { faker } from '@faker-js/faker'

import EpMenu from '@/components/menu/EpMenu.vue'

import { centeredBg } from '../../helpers/decorators.js'

const menuConfig = [
  {
    id: faker.string.uuid(),
    label: 'Dashboard',
    iconLeft: {
      name: 'dashboard',
      style: {
        '--ep-icon-stroke-width': 1,
      }
    },
    to: '/'
  },
  { divider: true },
  {
    section: true,
    label: 'Actions'
  },
  {
    id: faker.string.uuid(),
    label: 'Google Maps',
    iconLeft: { name: 'f-map-pin' },
    iconRight: {
      name: 'f-arrow-up-right',
      style: {
        '--ep-icon-height': '1.4rem',
        '--ep-icon-stroke-width': 0.8,

      }
    },
    href: 'https://www.google.com/maps'
  },
  {
    id: faker.string.uuid(),
    label: 'Track Event',
    iconLeft: { name: 'f-activity' },
    action: (item) => console.log('clicked', item.label)
  },
  {
    id: faker.string.uuid(),
    label: 'More Options',
    iconLeft: {
      name: 'menu',
      style: {
        '--ep-icon-stroke-width': 1,
      }
    },
    iconRight: { name: 'chevron-right' },
    children: [
      {
        id: faker.string.uuid(),
        label: 'Settings',
        action: (item) => console.log('clicked', item.label)
      },
      {
        id: faker.string.uuid(),
        label: 'Preferences',
        action: (item) => console.log('clicked', item.label)
      },
      { divider: true },
      {
        id: faker.string.uuid(),
        label: 'Help Center',
        action: (item) => console.log('clicked', item.label)
      },
      {
        id: faker.string.uuid(),
        label: 'About Us',
        action: (item) => console.log('clicked', item.label)
      }
    ]
  },
  { divider: true },
  {
    section: true,
    label: 'Shortcuts'
  },
  {
    id: faker.string.uuid(),
    label: 'Recent Files',
    action: (item) => console.log('clicked', item.label)
  },
  {
    id: faker.string.uuid(),
    label: 'Saved Items',
    action: (item) => console.log('clicked', item.label)
  },
  {
    id: faker.string.uuid(),
    label: 'Notifications',
    action: (item) => console.log('clicked', item.label)
  },
  { divider: true },
  {
    section: true,
    label: 'Navigation'
  },
  {
    id: faker.string.uuid(),
    label: 'Go Back',
    action: (item) => console.log('clicked', item.label)
  },
  {
    id: faker.string.uuid(),
    label: 'Next Step',
    action: (item) => console.log('clicked', item.label)
  },
  {
    id: faker.string.uuid(),
    label: 'Open Web Page',
    action: (item) => console.log('clicked', item.label)
  },
  {
    id: faker.string.uuid(),
    label: 'Advanced Settings',
    iconRight: { name: 'chevron-right' },
    children: [
      {
        id: faker.string.uuid(),
        label: 'Security',
        action: (item) => console.log('clicked', item.label)
      },
      {
        id: faker.string.uuid(),
        label: 'Privacy',
        action: (item) => console.log('clicked', item.label)
      },
      {
        id: faker.string.uuid(),
        label: 'Developer Mode',
        action: (item) => console.log('clicked', item.label)
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
    containerProps: { table: { disable: true } },
    menuItems: { table: { disable: true } },
    menuType: { table: { disable: true } },
    activeItem: { table: { disable: true } },
  }
}

export const Menu = args => ({
  components: { EpMenu },
  setup() {
    const onMenuClick = item => {
      if (item.action) item.action(item)
    }

    return { args, onMenuClick }
  },
  template: '<ep-menu v-bind="args" @click="onMenuClick" />'
})

Menu.args = {
  size: 'default',
  containerProps: {
    styles: {
      '--ep-container-width': '200px',
      '--ep-container-bg-color': 'var(--interface-surface)',
      '--ep-container-border-width': '0.1rem',
    }
  },
  menuItems: menuConfig
}
