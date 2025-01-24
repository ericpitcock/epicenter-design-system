# EpStatusIndicator



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `styles` | - | `object` | `{}` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
No events available.

## Slots
| Name | Description |
|------|-------------|
| `default` | No description available. |

## Component Code

```vue
<template>
  <span
    class="ep-status-indicator"
    :style="styles"
  >
    <span class="ep-status-indicator__dot" />
    <slot />
  </span>
</template>

<script setup>
  defineOptions({
    name: 'EpStatusIndicator',
  })

  const props = defineProps({
    styles: {
      type: Object,
      default: () => ({}),
    },
  })
</script>

```


## Styles

```scss
.ep-status-indicator {
  --ep-status-indicator-dot-bg: var(--text-color);
  --ep-status-indicator-dot-border: var(--text-color);
  display: inline-flex;
  align-items: center;
  gap: 1rem;

  &__dot {
    width: 0.7rem;
    height: 0.7rem;
    background-color: var(--ep-status-indicator-dot-bg);
    border: 0.1rem solid var(--ep-status-indicator-dot-border);
    border-radius: 50%;
    box-sizing: content-box;
  }
}
```