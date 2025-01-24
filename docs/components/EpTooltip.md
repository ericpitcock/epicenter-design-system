# EpTooltip



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `delay` | - | `number` | `0` |
| `position` | - | `string` | `'top center'` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
No events available.

## Slots
| Name | Description |
|------|-------------|
| `tooltip` | No description available. |
| `default` | No description available. |

## Component Code

```vue
<template>
  <div
    class="ep-tooltip-wrapper"
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
  >
    <div
      :class="['ep-tooltip', positionClass, { 'ep-tooltip--visible': visible }]"
    >
      <slot name="tooltip" />
    </div>
    <slot />
  </div>
</template>

<script setup>
  import { ref, onBeforeUnmount, computed } from 'vue'

  defineOptions({
    name: 'EpTooltip',
  })

  const props = defineProps({
    delay: {
      type: Number,
      default: 0,
    },
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
  })

  const visible = ref(false)
  const timeoutId = ref(null)

  onBeforeUnmount(() => {
    clearTimeout(timeoutId.value)
  })

  const showTooltip = () => {
    timeoutId.value = setTimeout(() => {
      visible.value = true
    }, props.delay)
  }

  const hideTooltip = () => {
    clearTimeout(timeoutId.value)
    visible.value = false
  }

  const positionClass = computed(() => {
    return `ep-tooltip--${props.position.replace(' ', '-')}`
  })
</script>
```


## Styles

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
  background-color: var(--ep-tooltip-bg-color);
  color: var(--ep-tooltip-text-color);
  padding: 5px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: var(--z-index--tooltip);

  &.ep-tooltip--visible {
    visibility: visible;
    opacity: 1;
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
    bottom: 100%;
    right: 0;
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
    bottom: 0;
    right: 100%;
    transform: translateX(calc(-1 * var(--ep-tooltip-offset)));
  }
}
```