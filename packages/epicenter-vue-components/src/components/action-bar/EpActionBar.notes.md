DEPRECATED - Just use EpButton and EpDropdown directly.

`EpActionBar` is a component that renders a horizontal bar with actions in the form of buttons or dropdowns. Sure, you could create one manually, with `EpButton` and `EpDropdown`, but why not use a component that already does it for you?

Below is an example array of configuration objects that can be passed to the `items` prop.

```js
actionBarItems: [
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
          id: uuid(),
          label: 'Notifications',
          action: (item) => console.log('clicked', item.label),
        },
        {
          id: uuid(),
          label: 'Alerts',
          action: (item) => console.log('clicked', item.label),
        },
        {
          id: uuid(),
          label: 'Messages',
          action: (item) => console.log('clicked', item.label),
        },
        {
          divider: true
        },
        {
          id: uuid(),
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
          id: uuid(),
          label: 'Profile',
          action: (item) => console.log('clicked', item.label),
        },
        {
          id: uuid(),
          label: 'Switch account',
          action: (item) => console.log('clicked', item.label),
        },
        {
          id: uuid(),
          label: 'Settings',
          action: (item) => console.log('clicked', item.label),
        },
        {
          divider: true
        },
        {
          id: uuid(),
          label: 'Sign out',
          action: (item) => console.log('clicked', item.label),
        }
      ],
      alignRight: true,
      showOnHover: false,
    }
  }
]
```