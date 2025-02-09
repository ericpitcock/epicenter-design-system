# EpToggle



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `isActive` | - | `boolean` | `false` |
| `disabled` | - | `boolean` | `false` |
| `label` | - | `string` | `''` |
| `size` | - | `string` | `'default'` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `toggle` | - | - |


::: info
This component does not use slots.
:::

## Component Code

```vue
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

<script setup>
  import { computed } from 'vue'

  defineOptions({
    name: 'EpToggle',
  })

  const props = defineProps({
    isActive: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'default',
    },
  })

  const emit = defineEmits(['toggle'])

  const classes = computed(() => {
    return {
      'ep-toggle--active': props.isActive,
      'ep-toggle--disabled': props.disabled,
    }
  })

  const toggle = () => {
    if (props.disabled) return
    emit('toggle')
  }
</script>

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
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  height: 2rem;
  border-radius: 2rem;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.1s ease;

  &__track {
    position: relative;
    width: 3.6rem;
    height: 2rem;
    border-radius: 2rem;
    background-color: var(--ep-toggle-track-bg-color);
    border: 1px solid var(--ep-toggle-track-border-color);
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
      background-color: var(--ep-toggle-track-active-bg-color);
      border-color: var(--ep-toggle-track-active-border-color);
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