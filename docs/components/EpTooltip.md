# EpTooltip



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `delay` | Delay in milliseconds before showing the tooltip on hover. | `number` | `0` |
| `position` | Position of the tooltip relative to the trigger element. | `string` | `'top center'` |
| `dismissOnClick` | Whether to dismiss the tooltip when clicked. | `boolean` | `false` |
| `disabled` | Whether the tooltip is disabled. | `boolean` | `false` |

## Slots
| Name | Description |
|------|-------------|
| `tooltip` | Tooltip content to display on hover |
| `default` | Trigger element that shows the tooltip on hover |


::: info
This component does not use events.
:::

## Component Code

```vue
<script setup>
  import { computed, onBeforeUnmount, ref } from 'vue'

  const props = defineProps({
    /**
     * Delay in milliseconds before showing the tooltip on hover.
     */
    delay: {
      type: Number,
      default: 0,
    },
    /**
     * Position of the tooltip relative to the trigger element.
     * @values 'top left', 'top center', 'top right', 'right top', 'right center', 'right bottom', 'bottom left', 'bottom center', 'bottom right', 'left top', 'left center', 'left bottom'
     */
    position: {
      type: String,
      default: 'top center',
      validator: (value) =>
        [
          'top left',
          'top center',
          'top right',
          'right top',
          'right center',
          'right bottom',
          'bottom left',
          'bottom center',
          'bottom right',
          'left top',
          'left center',
          'left bottom',
        ].includes(value),
    },
    /**
     * Whether to dismiss the tooltip when clicked.
     */
    dismissOnClick: {
      type: Boolean,
      default: false,
    },
    /**
     * Whether the tooltip is disabled.
     */
    disabled: {
      type: Boolean,
      default: false,
    },
  })

  const visible = ref(false)
  const timeoutId = ref(null)

  onBeforeUnmount(() => {
    clearTimeout(timeoutId.value)
  })

  const showTooltip = () => {
    if (props.disabled) return
    timeoutId.value = setTimeout(() => {
      visible.value = true
    }, props.delay)
  }

  const hideTooltip = () => {
    clearTimeout(timeoutId.value)
    visible.value = false
  }

  const onClick = () => {
    if (props.dismissOnClick) {
      hideTooltip()
    }
  }

  const positionClass = computed(() => {
    return `ep-tooltip--${props.position.replace(' ', '-')}`
  })
</script>

<template>
  <div
    class="ep-tooltip-wrapper"
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
    @click="onClick"
  >
    <div
      :class="['ep-tooltip', positionClass, { 'ep-tooltip--visible': visible }]"
    >
      <!-- @slot Tooltip content to display on hover -->
      <slot name="tooltip" />
    </div>
    <!-- @slot Trigger element that shows the tooltip on hover -->
    <slot />
  </div>
</template>
```

## Styles (SCSS)

```scss
.ep-tooltip-wrapper {
  --ep-tooltip-bg-color: var(--interface-overlay);
  --ep-tooltip-text-color: var(--text-color);
  --ep-tooltip-offset: 0.5rem;
  position: relative;
  display: inline-block;
}

.ep-tooltip {
  position: absolute;
  z-index: var(--z-index--tooltip);
  padding: 5px;
  border-radius: 4px;
  background-color: var(--ep-tooltip-bg-color);
  color: var(--ep-tooltip-text-color);
  font-size: 12px;
  opacity: 0;
  transition: opacity 0.3s ease;
  visibility: hidden;
  white-space: nowrap;

  &.ep-tooltip--visible {
    opacity: 1;
    visibility: visible;
  }

  &.ep-tooltip--top-left {
    bottom: 100%;
    left: 0;
    transform: translateY(calc(-1 * var(--ep-tooltip-offset)));
  }

  &.ep-tooltip--top-center {
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(calc(-1 * var(--ep-tooltip-offset)));
  }

  &.ep-tooltip--top-right {
    right: 0;
    bottom: 100%;
    transform: translateY(calc(-1 * var(--ep-tooltip-offset)));
  }

  &.ep-tooltip--right-top {
    top: 0;
    left: 100%;
    transform: translateX(var(--ep-tooltip-offset));
  }

  &.ep-tooltip--right-center {
    top: 50%;
    left: 100%;
    transform: translateX(var(--ep-tooltip-offset)) translateY(-50%);
  }

  &.ep-tooltip--right-bottom {
    bottom: 0;
    left: 100%;
    transform: translateX(var(--ep-tooltip-offset));
  }

  &.ep-tooltip--bottom-left {
    top: 100%;
    left: 0;
    transform: translateY(var(--ep-tooltip-offset));
  }

  &.ep-tooltip--bottom-center {
    top: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(var(--ep-tooltip-offset));
  }

  &.ep-tooltip--bottom-right {
    top: 100%;
    right: 0;
    transform: translateY(var(--ep-tooltip-offset));
  }

  &.ep-tooltip--left-top {
    top: 0;
    right: 100%;
    transform: translateX(calc(-1 * var(--ep-tooltip-offset)));
  }

  &.ep-tooltip--left-center {
    top: 50%;
    right: 100%;
    transform: translateX(calc(-1 * var(--ep-tooltip-offset))) translateY(-50%);
  }

  &.ep-tooltip--left-bottom {
    right: 100%;
    bottom: 0;
    transform: translateX(calc(-1 * var(--ep-tooltip-offset)));
  }
}
```