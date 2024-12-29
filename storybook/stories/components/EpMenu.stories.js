import { faker } from '@faker-js/faker'
import { centeredBg } from '../../helpers/decorators.js'
import EpMenu from '@/components/menu/EpMenu.vue'

const menuConfig = [
  {
    id: faker.string.uuid(),
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
    id: faker.string.uuid(),
    label: 'Log click',
    iconLeft: { name: 'circle' },
    onClick: (item) => console.log('clicked', item.label)
  },
  {
    id: faker.string.uuid(),
    label: 'Google Maps',
    iconLeft: { name: 'export' },
    bind: {
      href: 'https://www.google.com/maps'
    }
  },
  {
    id: faker.string.uuid(),
    label: 'Sub-menu',
    iconLeft: { name: 'menu' },
    iconRight: { name: 'chevron-right' },
    children: [
      {
        id: faker.string.uuid(),
        label: 'Sub-menu item 1',
        onClick: (item) => console.log('clicked', item.label)
      },
      {
        id: faker.string.uuid(),
        label: 'Sub-menu item 2',
        onClick: (item) => console.log('clicked', item.label)
      },
      { divider: true },
      {
        id: faker.string.uuid(),
        label: 'Sub-menu item 3',
        onClick: (item) => console.log('clicked', item.label)
      },
      {
        id: faker.string.uuid(),
        label: 'Sub-menu item 4',
        onClick: (item) => console.log('clicked', item.label)
      }
    ]
  },
  { divider: true },
  {
    section: true,
    label: 'Section'
  },
  {
    id: faker.string.uuid(),
    label: 'This is a menu item',
    onClick: (item) => console.log('clicked', item.label)
  },
  {
    id: faker.string.uuid(),
    label: 'Another menu item',
    onClick: (item) => console.log('clicked', item.label)
  },
  {
    id: faker.string.uuid(),
    label: 'The menuiest item',
    onClick: (item) => console.log('clicked', item.label)
  },
  { divider: true },
  {
    section: true,
    label: 'Section',
    onClick: (item) => console.log('clicked', item.label)
  },
  {
    id: faker.string.uuid(),
    label: 'Go back',
    onClick: (item) => console.log('clicked', item.label)
  },
  {
    id: faker.string.uuid(),
    label: 'Two steps forward',
    onClick: (item) => console.log('clicked', item.label)
  },
  {
    id: faker.string.uuid(),
    label: 'Internet!',
    onClick: (item) => console.log('clicked', item.label)
  },
  {
    id: faker.string.uuid(),
    label: 'Another sub-menu',
    iconRight: { name: 'chevron-right' },
    children: [
      {
        id: faker.string.uuid(),
        label: 'Sub-menu item 1',
        onClick: (item) => console.log('clicked', item.label)
      },
      {
        id: faker.string.uuid(),
        label: 'Sub-menu item 2',
        onClick: (item) => console.log('clicked', item.label)
      },
      {
        id: faker.string.uuid(),
        label: 'Sub-menu item 3',
        onClick: (item) => console.log('clicked', item.label)
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
    return { args }
  },
  template: '<ep-menu v-bind="args" />'
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
