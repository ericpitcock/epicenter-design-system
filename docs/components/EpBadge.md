# EpBadge



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `label` | The label to display in the badge. | `string` | `-` |

## Slots
| Name | Description |
|------|-------------|
| `default` | Default slot for badge content. Falls back to label prop if not provided. |


::: info
This component does not use events.
:::

## CSS Custom Properties

Set any of these with a selector that matches `.ep-badge` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-badge {
  --ep-badge-bg-color: /* … */;
}
```

### Surface

| Property | Default | State |
|---|---|---|
| `--ep-badge-bg-color` | `var(--interface-overlay)` | — |

### Border

| Property | Default | State |
|---|---|---|
| `--ep-badge-border-color` | `var(--border-color--lighter)` | — |
| `--ep-badge-border-radius` | `var(--border-radius--default)` | — |
| `--ep-badge-border-style` | `solid` | — |
| `--ep-badge-border-width` | `var(--border-width--hairline)` | — |

### Text

| Property | Default | State |
|---|---|---|
| `--ep-badge-font-size` | `var(--font-size--tiny)` | — |
| `--ep-badge-font-variation-settings` | `var(--font-weight--semi-bold)` | — |
| `--ep-badge-line-height` | `normal` | — |
| `--ep-badge-text-color` | `var(--text-color)` | — |

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-badge-padding` | `var(--space--1) var(--space--2)` | — |

## Component Code

```vue
<script setup lang="ts">
  interface Props {
    /**
     * The label to display in the badge.
     */
    label?: string
  }

  const { label = '' } = defineProps<Props>()

  defineOptions({ name: 'EpBadge' })
</script>

<template>
  <div class="ep-badge">
    <!-- @slot Default slot for badge content. Falls back to label prop if not provided. -->
    <slot>{{ label }}</slot>
  </div>
</template>

```

## Styles (SCSS)

```scss
.ep-badge {
  --ep-badge-padding: var(--space--1) var(--space--2);
  --ep-badge-bg-color: var(--interface-overlay);
  --ep-badge-border-width: var(--border-width--hairline);
  --ep-badge-border-style: solid;
  --ep-badge-border-color: var(--border-color--lighter);
  --ep-badge-border-radius: var(--border-radius--default);
  --ep-badge-text-color: var(--text-color);
  --ep-badge-font-size: var(--font-size--tiny);
  --ep-badge-font-variation-settings: var(--font-weight--semi-bold);
  --ep-badge-line-height: normal;

  display: inline-block;
  padding: var(--ep-badge-padding);
  border-width: var(--ep-badge-border-width);
  border-style: var(--ep-badge-border-style);
  border-color: var(--ep-badge-border-color);
  border-radius: var(--ep-badge-border-radius);
  background: var(--ep-badge-bg-color);
  color: var(--ep-badge-text-color);
  font-size: var(--ep-badge-font-size);
  font-variation-settings: var(--ep-badge-font-variation-settings);
  line-height: var(--ep-badge-line-height);
  user-select: none;
  white-space: nowrap;
}

```