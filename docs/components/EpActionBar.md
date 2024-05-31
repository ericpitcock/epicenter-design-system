
# EpActionBar

`EpActionBar` is a flexible action bar component that can display buttons and dropdowns.

## Props

| Name | Description | Type | Default |
|------|-------------|------|---------|
| `items` | An array of config objects for each item. | Array | `[]` |
| `showDropdownOnHover` | If true, dropdowns will be shown on hover. | Boolean | `false` |

## Item Config Object

| Key                  | Description                                                                                     | Type     | Default |
|----------------------|-------------------------------------------------------------------------------------------------|----------|---------|
| `type`               | The type of action item.                                                                       | String   | `button`|
| `buttonProps`        | The props for the button.                                                                      | Object   | `{}`    |
| `containerProps`     | The props for the dropdown container.                                                          | Object   | `{}`    |
| `menuItems`          | An array of menu items for dropdowns.                                                         | Array    | `[]`    |

## Item Config Object Example

```js
const buttonStyles = {
  '--ep-button-bg-color': 'transparent',
  '--ep-button-border-color': 'transparent',
  '--ep-button-text-color': 'var(--text-color)',
  '--ep-button-hover-bg-color': 'transparent',
  '--ep-button-hover-border-color': 'transparent',
  '--ep-button-hover-text-color': 'var(--text-color--loud)',
  '--ep-button-active-bg-color': 'transparent',
  '--ep-button-active-border-color': 'transparent',
  '--ep-button-active-text-color': 'var(--color--primary)',
}

const containerStyles = {
  '--ep-container-bg-color': 'var(--interface-overlay)',
  '--ep-container-border-radius': 'var(--border-radius)',
  '--ep-container-border-color': 'var(--border-color--lighter)',
}

const actionBarItems = [
  {
    type: 'dropdown',
    buttonProps: {
      label: '',
      iconLeft: { name: 'help' },
      iconRight: undefined,
      styles: buttonStyles
    },
    containerProps: {
      styles: containerStyles
    },
    menuItems: [
      { label: 'Documentation' },
      { label: 'API Reference' },
      { divider: true },
      { label: 'Contact Us' }
    ]
  },
  {
    type: 'dropdown',
    buttonProps: {
      label: '',
      iconLeft: { name: 'notifications' },
      iconRight: undefined,
      styles: buttonStyles
    },
    containerProps: {
      styles: containerStyles
    },
    menuItems: [
      { label: 'Notifications' },
      { label: 'Alerts' },
      { label: 'Messages' },
      { divider: true },
      { label: 'Settings' }
    ]
  },
  {
    type: 'dropdown',
    buttonProps: {
      label: '',
      iconLeft: { name: 'user' },
      iconRight: undefined,
      styles: buttonStyles
    },
    containerProps: {
      styles: containerStyles
    },
    menuItems: [
      { label: 'Profile' },
      { label: 'Switch account' },
      { label: 'Settings' },
      { divider: true },
      { label: 'Sign out' }
    ]
  }
]
```

## Events

| Name | Description | Payload |
|------|-------------|---------|
| `click(item)` | Emitted when an action item is clicked. The clicked item is passed as the payload. | `item` |

## Slots

This component does not have any slots.

## Usage

```vue
<template>
  <ep-action-bar
    :items="actionBarItems"
    @click="onClick"
  />
</template>

<script setup>
  const actionBarItems = [
    { type: 'button', iconLeft: 'home' },
    { type: 'dropdown', label: 'Options' },
    // more items
  ]

  const onClick = (item) => {
    console.log('Item clicked:', item)
  }
</script>
```

## Component Source

```vue
<!-- pull in component code dynamically -->
```
