# useActionsMenu

`useActionsMenu` is a composable for generating standardized props for action menu dropdowns. It provides a consistent pattern for creating action menus with customizable buttons and menu items throughout your application.

## Features

- **Standardized action menus**: Consistent pattern for all dropdown action menus
- **Context-aware menu items**: Support for dynamic menu items based on row/item context
- **Customizable appearance**: Override button props and menu styling
- **Smart defaults**: Pre-configured with common action menu patterns

## Usage

### Basic Action Menu

```vue
<template>
  <ep-dropdown v-bind="actionMenuProps">
    <template #button="{ buttonProps }">
      <ep-button v-bind="buttonProps" />
    </template>
  </ep-dropdown>
</template>

<script setup>
import useActionsMenu from '@/composables/useActionsMenu.js'
import { EpButton, EpDropdown } from '@ericpitcock/epicenter-components-vue'

const { generateActionMenuProps } = useActionsMenu()

const menuItems = [
  { label: 'Edit', action: () => console.log('Edit') },
  { label: 'Delete', action: () => console.log('Delete') }
]

const actionMenuProps = generateActionMenuProps({
  menuItems
})
</script>
```

### Context-Aware Menu Items

Use functions in menu items to access row context, useful in tables:

```vue
<template>
  <ep-table :data="tableData">
    <template #actions="{ row }">
      <ep-dropdown v-bind="getActionMenuProps(row)">
        <template #button="{ buttonProps }">
          <ep-button v-bind="buttonProps" />
        </template>
      </ep-dropdown>
    </template>
  </ep-table>
</template>

<script setup>
import useActionsMenu from '@/composables/useActionsMenu.js'
import { EpButton, EpDropdown, EpTable } from '@ericpitcock/epicenter-components-vue'

const { generateActionMenuProps } = useActionsMenu()

const tableData = [
  { id: 1, name: 'Item 1', status: 'active' },
  { id: 2, name: 'Item 2', status: 'inactive' }
]

const getActionMenuProps = (row) => {
  return generateActionMenuProps({
    context: row,
    menuItems: [
      { 
        label: 'Edit', 
        action: () => console.log('Edit', row.id) 
      },
      (context) => ({
        label: context.status === 'active' ? 'Deactivate' : 'Activate',
        action: () => console.log('Toggle status', context.id)
      }),
      { 
        label: 'Delete', 
        action: () => console.log('Delete', row.id),
        class: 'text-color--danger'
      }
    ]
  })
}
</script>
```

### Custom Button Styling

Override default button appearance:

```vue
<script setup>
import useActionsMenu from '@/composables/useActionsMenu.js'

const { generateActionMenuProps } = useActionsMenu()

const actionMenuProps = generateActionMenuProps({
  menuItems: [
    { label: 'Edit', action: () => {} },
    { label: 'Delete', action: () => {} }
  ],
  buttonProps: {
    label: 'Actions',
    class: ['ep-button-var--secondary'],
    size: 'medium',
    iconLeft: {
      name: 'chevron-down',
      styles: { '--ep-icon-stroke-width': 2 }
    }
  }
})
</script>
```

### Menu Alignment and Styling

```vue
<script setup>
import useActionsMenu from '@/composables/useActionsMenu.js'

const { generateActionMenuProps } = useActionsMenu()

const actionMenuProps = generateActionMenuProps({
  menuItems: [
    { label: 'Download', action: () => {} },
    { label: 'Share', action: () => {} }
  ],
  menuClass: 'ep-menu-compact',
  alignRight: false, // Align menu to the left
  size: 'large'
})
</script>
```

## API

### generateActionMenuProps

Generates props object for action menu dropdowns.

#### Parameters

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `context` | `any` | `null` | Context object passed to function-based menu items |
| `menuItems` | `Array` | `[]` | Array of menu item objects or functions that return menu item objects |
| `size` | `string` | `'small'` | Size of the dropdown menu |
| `menuClass` | `string` | `'ep-menu-default'` | CSS class for menu styling |
| `buttonProps` | `Object` | See below | Custom button properties |
| `alignRight` | `boolean` | `true` | Whether to align menu to the right |

#### Default buttonProps

```javascript
{
  label: '',
  ariaLabel: 'Actions',
  iconLeft: {
    name: 'dots-vertical',
    styles: { '--ep-icon-stroke-width': 3 }
  },
  iconRight: null,
  class: ['ep-button-var--ghost'],
  size: 'small'
}
```

#### Returns

Returns an object with the following structure:

```javascript
{
  size: string,
  menuProps: {
    menuItems: Array,
    menuClass: string
  },
  alignRight: boolean,
  buttonProps: Object
}
```

## Menu Item Structure

Menu items can be objects or functions:

### Static Menu Item

```javascript
{
  label: 'Edit',
  action: () => handleEdit(),
  icon: 'pencil', // Optional
  class: 'custom-class', // Optional
  disabled: false // Optional
}
```

### Dynamic Menu Item (Function)

```javascript
(context) => ({
  label: context.isActive ? 'Deactivate' : 'Activate',
  action: () => handleToggle(context.id),
  icon: context.isActive ? 'pause' : 'play'
})
```

## Common Patterns

### Table Row Actions

```vue
<script setup>
const getRowActions = (row) => generateActionMenuProps({
  context: row,
  menuItems: [
    { label: 'View Details', action: () => viewDetails(row.id) },
    { label: 'Edit', action: () => editRow(row) },
    { type: 'divider' },
    { 
      label: 'Delete', 
      action: () => deleteRow(row.id),
      class: 'text-color--danger'
    }
  ]
})
</script>
```

### Card Actions

```vue
<script setup>
const cardActions = generateActionMenuProps({
  menuItems: [
    { label: 'Share', action: handleShare },
    { label: 'Download', action: handleDownload },
    { label: 'Print', action: handlePrint }
  ],
  buttonProps: {
    ariaLabel: 'Card actions',
    iconLeft: {
      name: 'dots-horizontal'
    }
  }
})
</script>
```

### Conditional Menu Items

```vue
<script setup>
const getUserActions = (user) => generateActionMenuProps({
  context: user,
  menuItems: [
    { label: 'View Profile', action: () => viewProfile(user) },
    (context) => context.isOwner ? null : {
      label: 'Send Message',
      action: () => sendMessage(context)
    },
    (context) => context.isAdmin ? {
      label: 'Admin Panel',
      action: () => openAdminPanel(context)
    } : null
  ].filter(Boolean) // Remove null items
})
</script>
```

## Tips

- Use the `context` parameter for row-specific actions in tables
- Override `buttonProps` to match your UI patterns
- Use function-based menu items for dynamic labels or conditional items
- Add `{ type: 'divider' }` to separate groups of actions
- Set `alignRight: false` for menus in left-aligned contexts
