# EpStatusIndicator



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `pulse` | If true, the status indicator will pulse. | `boolean` | `-` |

## Slots
| Name | Description |
|------|-------------|
| `default` | Default slot for label or text content next to the indicator. |


::: info
This component does not use events.
:::

## CSS Custom Properties

Set any of these with a selector that matches `.ep-status-indicator` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-status-indicator {
  --ep-status-indicator-dot-bg-color: /* … */;
}
```

### Surface

| Property | Default | State |
|---|---|---|
| `--ep-status-indicator-dot-bg-color` | `var(--text-color)` | — |

### Border

| Property | Default | State |
|---|---|---|
| `--ep-status-indicator-dot-border-color` | `var(--text-color)` | — |
| `--ep-status-indicator-dot-border-radius` | `var(--border-radius--full)` | — |
| `--ep-status-indicator-dot-border-style` | `solid` | — |
| `--ep-status-indicator-dot-border-width` | `var(--border-width--hairline)` | — |

### Box

| Property | Default | State |
|---|---|---|
| `--ep-status-indicator-dot-size` | `0.7rem` | — |

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-status-indicator-gap` | `1rem` | — |

### Effect

| Property | Default | State |
|---|---|---|
| `--ep-status-indicator-pulse-duration` | `1.5s` | — |
| `--ep-status-indicator-pulse-scale` | `1.5` | — |

## Component Code

```vue
<script setup lang="ts">
  interface Props {
    /**
     * If true, the status indicator will pulse.
     */
    pulse?: boolean
  }

  const { pulse = false } = defineProps<Props>()

  defineOptions({ name: 'EpStatusIndicator' })
</script>

<template>
  <span class="ep-status-indicator">
    <span
      class="ep-status-indicator__dot"
      :class="{ 'ep-status-indicator__dot--pulse': pulse }"
    />
    <!-- @slot Default slot for label or text content next to the indicator. -->
    <slot />
  </span>
</template>
```

## Styles (SCSS)

```scss
.ep-status-indicator {
  --ep-status-indicator-gap: 1rem;
  --ep-status-indicator-dot-size: 0.7rem;
  --ep-status-indicator-dot-bg-color: var(--text-color);
  --ep-status-indicator-dot-border-width: var(--border-width--hairline);
  --ep-status-indicator-dot-border-style: solid;
  --ep-status-indicator-dot-border-color: var(--text-color);
  --ep-status-indicator-dot-border-radius: var(--border-radius--full);
  --ep-status-indicator-pulse-duration: 1.5s;
  --ep-status-indicator-pulse-scale: 1.5;

  display: inline-flex;
  align-items: center;
  gap: var(--ep-status-indicator-gap);
}

.ep-status-indicator__dot {
  width: var(--ep-status-indicator-dot-size);
  height: var(--ep-status-indicator-dot-size);
  box-sizing: content-box;
  border-width: var(--ep-status-indicator-dot-border-width);
  border-style: var(--ep-status-indicator-dot-border-style);
  border-color: var(--ep-status-indicator-dot-border-color);
  border-radius: var(--ep-status-indicator-dot-border-radius);
  background-color: var(--ep-status-indicator-dot-bg-color);
}

@keyframes ep-status-indicator-pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(var(--ep-status-indicator-pulse-scale));
  }

  100% {
    transform: scale(1);
  }
}

.ep-status-indicator__dot--pulse {
  animation: ep-status-indicator-pulse var(--ep-status-indicator-pulse-duration) infinite ease-in-out;
}

```