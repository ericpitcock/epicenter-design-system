# EpDropdown



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

    

## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `alignRight` | If true, aligns the dropdown content to the right edge of the trigger. | `boolean` | `false` |
| `showOnHover` | If true, opens the dropdown on hover instead of click. | `boolean` | `false` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `click` | - | - |
| `close` | - | - |

## Slots
| Name | Description |
|------|-------------|
| `trigger` | Trigger element that opens/closes the dropdown. Provides scoped props for custom triggers. |
| `content` | Content displayed inside the dropdown panel when open |

## Component Code

```vue
<template>
  <div
    ref="dropdown"
    class="ep-dropdown"
    @mouseleave="onMouseleave"
  >
    <!-- @slot Trigger element that opens/closes the dropdown. Provides scoped props for custom triggers. -->
    <slot
      name="trigger"
      :is-open="dropdownVisible"
      :open="openDropdown"
      :close="closeDropdown"
      :toggle="toggleDropdown"
      :attrs="triggerAttrs"
      :on="triggerListeners"
    >
      <button
        type="button"
        v-bind="triggerAttrs"
        v-on="triggerListeners"
      >
        Default dropdown
      </button>
    </slot>
    <div
      v-show="dropdownVisible"
      :id="contentId"
      :class="['ep-dropdown__container', { 'ep-dropdown__container--align-right': alignRight }]"
    >
      <div class="ep-dropdown__content">
        <!-- @slot Content displayed inside the dropdown panel when open -->
        <slot
          name="content"
          :close="closeDropdown"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onClickOutside } from '@vueuse/core'
  import { computed, ref, useId, useTemplateRef } from 'vue'

  const props = defineProps({
    /**
     * If true, aligns the dropdown content to the right edge of the trigger.
     */
    alignRight: {
      type: Boolean,
      default: false
    },
    /**
     * If true, opens the dropdown on hover instead of click.
     */
    showOnHover: {
      type: Boolean,
      default: false
    },
  })

  const uniqueId = useId()
  const triggerId = `ep-dropdown-trigger-${uniqueId}`
  const contentId = `ep-dropdown-panel-${uniqueId}`

  const triggerAttrs = computed(() => ({
    id: triggerId,
    'aria-haspopup': 'menu',
    'aria-expanded': String(dropdownVisible.value),
    'aria-controls': contentId,
    disabled: props.disabled || undefined
  }))

  const triggerListeners = computed(() => ({
    click: toggleDropdown,
    mouseover: onMouseover,
    keydown: onKeydown
  }))

  const emit = defineEmits(['click', 'close'])

  const dropdownVisible = ref(false)

  const openDropdown = () => {
    if (props.disabled || dropdownVisible.value) return

    dropdownVisible.value = true
  }

  const closeDropdown = () => {
    if (props.disabled || !dropdownVisible.value) return

    dropdownVisible.value = false
    emit('close')
  }

  const toggleDropdown = () => {
    if (props.disabled || props.showOnHover) return

    dropdownVisible.value = !dropdownVisible.value
  }

  const onKeydown = event => {
    if (props.disabled) return
    const key = event.key
    if (key === 'Enter' || key === ' ') {
      event.preventDefault()
      toggleDropdown()
    } else if (key === 'ArrowDown') {
      event.preventDefault()
      openDropdown()
    } else if (key === 'Escape') {
      event.preventDefault()
      closeDropdown()
    }
  }

  const onMouseover = () => {
    if (!props.disabled && props.showOnHover) {
      dropdownVisible.value = true
    }
  }

  const onMouseleave = () => {
    if (!props.disabled && props.showOnHover) {
      dropdownVisible.value = false
    }
  }

  const dropdownRef = useTemplateRef('dropdown')
  onClickOutside(dropdownRef, closeDropdown)

  defineExpose({ openDropdown, closeDropdown, toggleDropdown })
</script>
```

## Styles (SCSS)

```scss
.ep-dropdown {
  --ep-dropdown-padding-top: 4px;
  position: relative;
  width: fit-content;

  &__container {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 100%;
    padding-top: var(--ep-dropdown-padding-top);
    box-shadow: var(--box-shadow--dropdown);
    z-index: var(--z-index--dropdown);

    &--align-right {
      right: 0;
      left: auto;
    }
  }

  &__content {
    position: relative;
    z-index: var(--z-index--dropdown);
  }
}
```