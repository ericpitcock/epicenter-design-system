# EpStatusIndicator



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `pulse` | If true, the status indicator will pulse. | `boolean` | `false` |

## Slots
| Name | Description |
|------|-------------|
| `default` | Default slot for label or text content next to the indicator. |


::: info
This component does not use events.
:::

## Component Code

```vue
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

<script setup>
  const props = defineProps({
    /**
     * If true, the status indicator will pulse.
     */
    pulse: {
      type: Boolean,
      default: false,
    },
  })
</script>
```

## Styles (SCSS)

```scss
.ep-status-indicator {
  --ep-status-indicator-dot-bg: var(--text-color);
  --ep-status-indicator-dot-border: var(--text-color);
  display: inline-flex;
  align-items: center;
  gap: 1rem;
}

.ep-status-indicator__dot {
  width: 0.7rem;
  height: 0.7rem;
  box-sizing: content-box;
  border: 0.1rem solid var(--ep-status-indicator-dot-border);
  border-radius: 50%;
  background-color: var(--ep-status-indicator-dot-bg);
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
}

.ep-status-indicator__dot--pulse {
  animation: pulse 1.5s infinite ease-in-out;
}
```