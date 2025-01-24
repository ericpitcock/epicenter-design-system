# EpBadge



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `label` | The label to display in the badge. | `string` | `'Badge'` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
No events available.

## Slots
| Name | Description |
|------|-------------|
No slots available.

## Component Code

```vue
<template>
  <div class="ep-badge">
    {{ label }}
  </div>
</template>

<script setup>
  defineOptions({
    name: 'EpBadge'
  })

  const props = defineProps({
    /**
     * The label to display in the badge.
     */
    label: {
      type: String,
      default: 'Badge'
    },
  })
</script>

```


## Styles

```scss
.ep-badge {
  --ep-badge-bg-color: var(--interface-overlay);
  --ep-badge-border-color: var(--border-color--lighter);
  --ep-badge-text-color: var(--text-color);
  display: inline-block;
  padding: 0.4rem 0.8rem;
  border-radius: var(--border-radius);
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