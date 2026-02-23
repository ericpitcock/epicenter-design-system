## Usage Patterns

`EpDropdown` is a flexible dropdown component that supports both click and hover interactions, with customizable trigger and content slots.

### Basic Example

```vue
<template>
  <ep-dropdown>
    <template #trigger="{ attrs, on }">
      <button v-bind="attrs" v-on="on">
        Open Menu
      </button>
    </template>
    <template #content="{ close }">
      <ul>
        <li @click="close">Option 1</li>
        <li @click="close">Option 2</li>
        <li @click="close">Option 3</li>
      </ul>
    </template>
  </ep-dropdown>
</template>
```

### Scoped Slot Props

#### Trigger Slot
The `trigger` slot provides several useful scoped props:

- `isOpen` - Boolean indicating if dropdown is currently open
- `open` - Function to programmatically open the dropdown
- `close` - Function to programmatically close the dropdown
- `toggle` - Function to toggle the dropdown state
- `attrs` - Object with ARIA attributes for accessibility
- `on` - Event listeners object for click, mouseover, and keydown

#### Content Slot
The `content` slot provides:

- `close` - Function to close the dropdown (useful for menu items)

### Alignment

By default, the dropdown aligns to the left edge of the trigger. Use `alignRight` to align to the right:

```vue
<ep-dropdown align-right>
  <!-- ... -->
</ep-dropdown>
```

### Hover Interaction

Enable hover-to-open with the `showOnHover` prop:

```vue
<ep-dropdown show-on-hover>
  <!-- ... -->
</ep-dropdown>
```

### Programmatic Control

You can access the component's methods via template ref:

```vue
<template>
  <ep-dropdown ref="dropdownRef">
    <!-- ... -->
  </ep-dropdown>
  <button @click="dropdownRef.openDropdown()">
    Open from outside
  </button>
</template>

<script setup>
import { ref } from 'vue'

const dropdownRef = ref(null)
</script>
```

### Accessibility Features

- Automatic ARIA attributes for screen readers
- Keyboard navigation (Enter, Space, Arrow keys, Escape)
- Click-outside detection to close dropdown
- Focus management

### Important Considerations

- The dropdown closes automatically when clicking outside
- Use the `close` function provided in the content slot to close after selection
- The dropdown content is positioned absolutely, so ensure proper container context
- Keyboard navigation is built-in for accessibility
