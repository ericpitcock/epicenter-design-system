# EpActionBar



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
    

## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `items` | The items to display in the action bar. | `array` | `-` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `click` | Emitted when an item is clicked. | - |


::: info
This component does not use slots.
:::

## Component Code

```vue
<template>
  <div class="ep-action-bar">
    <template
      v-for="(item, index) in items"
      :key="index"
    >
      <component
        :is="componentMap[item.component]"
        v-bind="item.props"
        @click="onClick"
      />
    </template>
  </div>
</template>

<script setup>
  import { defineAsyncComponent } from 'vue'

  const componentMap = {
    'ep-button': defineAsyncComponent(() => import('../button/EpButton.vue')),
    'ep-dropdown': defineAsyncComponent(() => import('../dropdown/EpDropdown.vue')),
  }

  defineOptions({
    name: 'EpActionBar'
  })

  const props = defineProps({
    /**
     * The items to display in the action bar.
     */
    items: {
      type: Array,
      required: true,
    },
  })

  const emit = defineEmits([
    /**
     * Emitted when an item is clicked.
     * @payload {Object} item - The clicked item.
     */
    'click'
  ])

  const onClick = (item) => {
    emit('click', item)
  }
</script>

```

## Styles (SCSS)

```scss
  .ep-action-bar {
    --ep-action-bar-justify-content: flex-start;
    display: flex;
    flex-direction: row;
    justify-content: var(--ep-action-bar-justify-content);
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: visible;
  }
```