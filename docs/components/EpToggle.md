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

## CSS Custom Properties

Set any of these with a selector that matches `.ep-toggle` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-toggle {
  --ep-toggle-border-radius: /* … */;
}
```

### Border

| Property | Default | State |
|---|---|---|
| `--ep-toggle-border-radius` | `var(--border-radius--full)` | — |
| `--ep-toggle-border-width` | `var(--border-width--hairline)` | — |
| `--ep-toggle-track-active-border-color` | `var(--ep-toggle-track-active-bg-color)` | active |
| `--ep-toggle-track-border-color` | `var(--border-color)` | — |

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-toggle-gap` | `1rem` | — |

### Box

| Property | Default | State |
|---|---|---|
| `--ep-toggle-height` | `2rem` | — |
| `--ep-toggle-thumb-size` | `1.6rem` | — |
| `--ep-toggle-track-height` | `var(--ep-toggle-height)` | — |
| `--ep-toggle-track-width` | `3.6rem` | — |

### Text

| Property | Default | State |
|---|---|---|
| `--ep-toggle-label-font-size` | `var(--font-size--small)` | — |

### Surface

| Property | Default | State |
|---|---|---|
| `--ep-toggle-thumb-active-bg-color` | `hsl(var(--gray-0))` | active |
| `--ep-toggle-thumb-bg-color` | `var(--text-color)` | — |
| `--ep-toggle-thumb-disabled-bg-color` | `var(--border-color)` | disabled |
| `--ep-toggle-track-active-bg-color` | `green` | active |
| `--ep-toggle-track-bg-color` | `var(--interface-overlay)` | — |
| `--ep-toggle-track-disabled-bg-color` | `transparent` | disabled |

### Layout

| Property | Default | State |
|---|---|---|
| `--ep-toggle-thumb-left` | `0.1rem` | — |
| `--ep-toggle-thumb-offset` | `1.6rem` | — |
| `--ep-toggle-thumb-top` | `0.1rem` | — |

### Effect

| Property | Default | State |
|---|---|---|
| `--ep-toggle-transition` | `var(--duration--fast) ease` | — |

## Component Code

```vue
<script setup lang="ts">
  import { computed } from 'vue'

  interface Props {
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
  } = defineProps<Props>()

  const emit = defineEmits<{
    toggle: []
  }>()

  defineOptions({ name: 'EpToggle' })

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
  // Box
  --ep-toggle-height: 2rem;
  --ep-toggle-gap: 1rem;
  --ep-toggle-track-width: 3.6rem;
  --ep-toggle-track-height: var(--ep-toggle-height);
  --ep-toggle-thumb-size: 1.6rem;
  --ep-toggle-thumb-top: 0.1rem;
  --ep-toggle-thumb-left: 0.1rem;
  --ep-toggle-thumb-offset: 1.6rem;

  // Surface
  --ep-toggle-track-bg-color: var(--interface-overlay);
  // TODO: `green` is the CSS keyword, not a token — carried over verbatim so the
  // on-state keeps its current colour. Likely wants --status-success-border-color.
  --ep-toggle-track-active-bg-color: green;
  --ep-toggle-thumb-bg-color: var(--text-color);
  --ep-toggle-thumb-active-bg-color: hsl(var(--gray-0));
  --ep-toggle-thumb-disabled-bg-color: var(--border-color);
  --ep-toggle-track-disabled-bg-color: transparent;

  // Border
  --ep-toggle-border-width: var(--border-width--hairline);
  --ep-toggle-border-radius: var(--border-radius--full);
  --ep-toggle-track-border-color: var(--border-color);
  --ep-toggle-track-active-border-color: var(--ep-toggle-track-active-bg-color);

  // Text
  --ep-toggle-label-font-size: var(--font-size--small);

  // Motion
  --ep-toggle-transition: var(--duration--fast) ease;

  position: relative;
  display: flex;
  height: var(--ep-toggle-height);
  align-items: center;
  border-radius: var(--ep-toggle-border-radius);
  cursor: pointer;
  gap: var(--ep-toggle-gap);
  transition: background-color var(--ep-toggle-transition);
  user-select: none;

  &__track {
    position: relative;
    width: var(--ep-toggle-track-width);
    height: var(--ep-toggle-track-height);
    border: var(--ep-toggle-border-width) solid var(--ep-toggle-track-border-color);
    border-radius: var(--ep-toggle-border-radius);
    background-color: var(--ep-toggle-track-bg-color);
    transition: background-color var(--ep-toggle-transition);
  }

  &__thumb {
    position: absolute;
    top: var(--ep-toggle-thumb-top);
    left: var(--ep-toggle-thumb-left);
    width: var(--ep-toggle-thumb-size);
    height: var(--ep-toggle-thumb-size);
    border-radius: var(--ep-toggle-border-radius);
    background-color: var(--ep-toggle-thumb-bg-color);
    transition: transform var(--ep-toggle-transition);
  }

  &--active {
    .ep-toggle__track {
      border-color: var(--ep-toggle-track-active-border-color);
      background-color: var(--ep-toggle-track-active-bg-color);
    }

    .ep-toggle__thumb {
      background-color: var(--ep-toggle-thumb-active-bg-color);
      transform: translateX(var(--ep-toggle-thumb-offset));
    }
  }

  &__label {
    font-size: var(--ep-toggle-label-font-size);
    white-space: nowrap;
  }

  &--disabled {
    cursor: not-allowed;

    // These two selectors were written without the `ep-` prefix, so the disabled
    // state never applied to anything.
    .ep-toggle__track {
      background-color: var(--ep-toggle-track-disabled-bg-color);
    }

    .ep-toggle__thumb {
      background-color: var(--ep-toggle-thumb-disabled-bg-color);
    }
  }
}

```