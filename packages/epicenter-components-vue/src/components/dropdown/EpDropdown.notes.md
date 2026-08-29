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

### Positioning

The dropdown panel is a native popover rendered in the browser's top layer and
tethered to the trigger with CSS anchor positioning. That means:

- It is never clipped by ancestor `overflow: hidden`/`auto` containers (tables,
  scrolling containers, headers) and needs no z-index management.
- It flips automatically at every viewport edge: near the bottom it opens
  above, near the right edge it aligns right, and corners flip both axes.
- Placement is customizable through CSS custom properties:
  `--ep-dropdown-position-area` (default `block-end span-inline-end`) sets the
  preferred side/alignment, and `--ep-dropdown-position-try-fallbacks`
  (default `flip-block, flip-inline, flip-block flip-inline`) controls the
  flip behavior when space runs out.

### Browser Support

Positioning relies on CSS anchor positioning and `showPopover({ source })`,
which are Baseline 2026: Chrome/Edge 137+, Safari 26+, Firefox 147+. There is
no fallback for older browsers — in an unsupported browser the panel still
opens and light-dismisses, but appears centered in the viewport instead of
attached to the trigger.

### Accessibility Features

- Automatic ARIA attributes for screen readers
- Keyboard navigation (Enter, Space, Arrow keys, Escape)
- ArrowDown on the trigger always moves focus to the first enabled menu item —
  opening the dropdown first if needed — even when `autoFocus` is `false`
  (`autoFocus` only controls whether opening by click moves focus)
- Native light dismiss: clicking outside or pressing Escape closes the popover
- Focus management

### Important Considerations

- The dropdown closes automatically when clicking outside (native popover
  light dismiss — no JavaScript listeners involved)
- Use the `close` function provided in the content slot to close after selection
- Keyboard navigation is built-in for accessibility
