# EpBadge



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `label` | The label to display in the badge. | `string` | `''` |

## Slots
| Name | Description |
|------|-------------|
| `default` | No description available. |


::: info
This component does not use events.
:::

## Component Code

```vue
<template>
  <div class="ep-badge">
    <slot>{{ label }}</slot>
  </div>
</template>

<script setup>
  defineOptions({
    name: 'EpBadge'
  })

  defineProps({
    /**
     * The label to display in the badge.
     */
    label: {
      type: String,
      default: '',
    },
  })
</script>

```

## Styles (SCSS)

```scss
.ep-badge {
  --ep-badge-bg-color: var(--interface-overlay);
  --ep-badge-border-color: var(--border-color--lighter);
  --ep-badge-text-color: var(--text-color);
  --ep-badge-padding: 0.4rem 0.8rem;
  --ep-badge-border-radius: var(--border-radius);
  display: inline-block;
  padding: var(--ep-badge-padding);
  border-radius: var(--ep-badge-border-radius);
  background: var(--ep-badge-bg-color);
  border: 0.1rem solid var(--ep-badge-border-color);
  color: var(--ep-badge-text-color);
  font-size: var(--font-size--tiny);
  font-variation-settings: 'wght' 600;
  line-height: normal;
  user-select: none;
  white-space: nowrap;
}
```