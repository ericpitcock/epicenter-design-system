# EpToggle



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `disabled` | If true, disables the toggle interaction. | `boolean` | `-` |
| `isActive` | If true, shows the toggle in the active/on state. | `boolean` | `-` |
| `label` | Label text displayed next to the toggle. | `string` | `-` |
| `size` | The size variant of the toggle. | `union` | `-` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `toggle` | - | - |


::: info
This component does not use slots.
:::

## Component Code

```vue
<script setup lang="ts">
  import { computed } from 'vue'

  interface EpToggleProps {
    /** If true, disables the toggle interaction. */
    disabled?: boolean
    /** If true, shows the toggle in the active/on state. */
    isActive?: boolean
    /** Label text displayed next to the toggle. */
    label?: string
    /** The size variant of the toggle. */
    size?: 'small' | 'default' | 'large'
  }

  const {
    disabled = false,
    isActive = false,
    label = '',
    size = 'default',
  } = defineProps<EpToggleProps>()

  const emit = defineEmits<{
    toggle: []
  }>()

  const classes = computed(() => {
    return {
      'ep-toggle--active': isActive,
      'ep-toggle--disabled': disabled,
    }
  })

  const toggle = (): void => {
    if (disabled) return
    emit('toggle')
  }
</script>

<template>
  <div
    :class="['ep-toggle', classes]"
    @click="toggle"
  >
    <div class="ep-toggle__track">
      <div class="ep-toggle__thumb" />
    </div>
    <div class="ep-toggle__label">
      {{ label }}
    </div>
  </div>
</template>

```

## Styles (SCSS)

```scss
.ep-toggle {
  --ep-toggle-track-bg-color: var(--interface-overlay);
  --ep-toggle-track-border-color: var(--border-color);
  --ep-toggle-track-active-bg-color: green;
  --ep-toggle-track-active-border-color: green;
  --ep-toggle-thumb-bg-color: var(--text-color);
  --ep-toggle-thumb-active-bg-color: white;
  --ep-toggle-thumb-disabled-bg-color: var(--border-color);
  position: relative;
  display: flex;
  height: 2rem;
  align-items: center;
  border-radius: 2rem;
  cursor: pointer;
  gap: 1rem;
  transition: background-color 0.1s ease;
  user-select: none;

  &__track {
    position: relative;
    width: 3.6rem;
    height: 2rem;
    border: 1px solid var(--ep-toggle-track-border-color);
    border-radius: 2rem;
    background-color: var(--ep-toggle-track-bg-color);
    transition: background-color 0.1s ease;
  }

  &__thumb {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    background-color: var(--ep-toggle-thumb-bg-color);
    transition: transform 0.2s ease;
  }

  &--active {
    .ep-toggle__track {
      border-color: var(--ep-toggle-track-active-border-color);
      background-color: var(--ep-toggle-track-active-bg-color);
    }

    .ep-toggle__thumb {
      background-color: var(--ep-toggle-thumb-active-bg-color);
      transform: translateX(1.6rem);
    }
  }

  &__label {
    font-size: var(--font-size--small);
    white-space: nowrap;
  }

  &--disabled {
    cursor: not-allowed;

    .toggle__track {
      background-color: transparent;
    }

    .toggle__thumb {
      background-color: var(--ep-toggle-thumb-disabled-bg-color);
    }
  }
}
```