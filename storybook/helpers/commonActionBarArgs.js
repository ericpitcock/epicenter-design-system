import { faker } from '@faker-js/faker'

const commonActionBarArgs = {
  items: [
    {
      component: 'ep-button',
      props: {
        label: '',
        ariaLabel: 'Help',
        iconLeft: { name: 'help' },
        class: 'ep-button-var--ghost',
        action: () => console.log('the help button was clicked')
      },
    },
    {
      component: 'ep-dropdown',
      props: {
        buttonProps: {
          label: '',
          ariaLabel: 'Notifications',
          iconLeft: { name: 'notifications' },
          iconRight: undefined,
          class: 'ep-button-var--ghost'
        },
        menuClass: 'ep-menu-default',
        menuItems: [
          {
            id: faker.string.uuid(),
            label: 'Notifications',
            action: (item) => console.log('clicked', item.label),
          },
          {
            id: faker.string.uuid(),
            label: 'Alerts',
            action: (item) => console.log('clicked', item.label),
          },
          {
            id: faker.string.uuid(),
            label: 'Messages',
            action: (item) => console.log('clicked', item.label),
          },
          {
            divider: true
          },
          {
            id: faker.string.uuid(),
            label: 'Settings',
            action: (item) => console.log('clicked', item.label),
          }
        ],
        alignRight: true,
        showOnHover: false,
      }
    },
    {
      component: 'ep-dropdown',
      props: {
        buttonProps: {
          label: '',
          ariaLabel: 'User',
          iconLeft: { name: 'user' },
          iconRight: undefined,
          class: 'ep-button-var--ghost'
        },
        menuClass: 'ep-menu-default',
        menuItems: [
          {
            id: faker.string.uuid(),
            label: 'Profile',
            action: (item) => console.log('clicked', item.label),
          },
          {
            id: faker.string.uuid(),
            label: 'Switch account',
            action: (item) => console.log('clicked', item.label),
          },
          {
            id: faker.string.uuid(),
            label: 'Settings',
            action: (item) => console.log('clicked', item.label),
          },
          {
            divider: true
          },
          {
            id: faker.string.uuid(),
            label: 'Sign out',
            action: (item) => console.log('clicked', item.label),
          }
        ],
        alignRight: true,
        showOnHover: false,
      }
    }
  ],
}

export default commonActionBarArgs