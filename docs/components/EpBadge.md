# EpBadge

`EpBadge` is a way to emphasize a string of text, like a status or a count.

## Props

| Name | Description | Type | Default |
|------|-------------|------|---------|
| `label` | The text to display in the badge. | String | `''` |
| `styles` | Custom styles to apply to the badge. | Object | `{}` |
| `classes` | Custom classes to apply to the badge. | Array, Object, String | `''` |

## CSS Custom Properties
| Name | Description | Default |
|------|-------------|---------|
| `--ep-badge-bg-color` | The background color of the badge. | `var(--interface-overlay)` |
| `--ep-badge-border-color` | The border color of the badge. | `var(--border-color--lighter)` |
| `--ep-badge-text-color` | The text color of the badge. | `var(--text-color)` |

## Events

This component does not emit any events.

## Slots

This component does not have any slots.

## Usage

```vue
<template>
  <ep-badge
    label="Subscribed"
    classes="most-important-badge"
    :styles
  />
</template>

<script setup>
  const styles = {
    '--ep-badge-bg-color': 'var(--primary-color)',
    '--ep-badge-border-color': 'var(--primary-color)',
    '--ep-badge-text-color': 'var(--text-color-white)',
  }
</script>
```

## Component Source

