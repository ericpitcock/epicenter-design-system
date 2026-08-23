# EpFooter



## Slots
| Name | Description |
|------|-------------|
| `left` | Content to display on the left side of the footer |
| `center` | Content to display in the center of the footer |
| `right` | Content to display on the right side of the footer |


::: info
This component does not use props, events.
:::

## CSS Custom Properties

Set any of these with a selector that matches `.ep-footer` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-footer {
  --ep-footer-bg-color: /* … */;
}
```

### Surface

| Property | Default | State |
|---|---|---|
| `--ep-footer-bg-color` | `var(--interface-surface)` | — |

### Border

| Property | Default | State |
|---|---|---|
| `--ep-footer-border-color` | `var(--border-color)` | — |
| `--ep-footer-border-radius` | `0` | — |
| `--ep-footer-border-style` | `solid` | — |
| `--ep-footer-border-width` | `0.1rem` | — |

### Layout

| Property | Default | State |
|---|---|---|
| `--ep-footer-bottom` | `0` | — |
| `--ep-footer-center-flex` | `1` | — |
| `--ep-footer-center-justify-content` | `center` | — |
| `--ep-footer-left-flex` | `1` | — |
| `--ep-footer-left-justify-content` | `flex-start` | — |
| `--ep-footer-overflow` | `hidden` | — |
| `--ep-footer-position` | `relative` | — |
| `--ep-footer-right-flex` | `1` | — |
| `--ep-footer-right-justify-content` | `flex-end` | — |
| `--ep-footer-z-index` | `1` | — |

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-footer-center-gap` | `3rem` | — |
| `--ep-footer-center-padding` | `0` | — |
| `--ep-footer-content-gap` | `3rem` | — |
| `--ep-footer-left-gap` | `3rem` | — |
| `--ep-footer-left-padding` | `0` | — |
| `--ep-footer-margin` | `0` | — |
| `--ep-footer-padding` | `0` | — |
| `--ep-footer-right-gap` | `3rem` | — |
| `--ep-footer-right-padding` | `0` | — |

### Box

| Property | Default | State |
|---|---|---|
| `--ep-footer-height` | `5.1rem` | — |
| `--ep-footer-width` | `100%` | — |

### Effect

| Property | Default | State |
|---|---|---|
| `--ep-footer-shadow` | `none` | — |

## Component Code

```vue
<script setup lang="ts">
  defineOptions({ name: 'EpFooter' })

</script>

<template>
  <div class="ep-footer">
    <div class="ep-footer__content">
      <div
        v-if="$slots.left"
        class="ep-footer__content__left"
      >
        <!-- @slot Content to display on the left side of the footer -->
        <slot name="left" />
      </div>
      <div
        v-if="$slots.center"
        class="ep-footer__content__center"
      >
        <!-- @slot Content to display in the center of the footer -->
        <slot name="center" />
      </div>
      <div
        v-if="$slots.right"
        class="ep-footer__content__right"
      >
        <!-- @slot Content to display on the right side of the footer -->
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

```

## Styles (SCSS)

```scss
.ep-footer {
  --ep-footer-position: relative;
  --ep-footer-bottom: 0;
  --ep-footer-width: 100%;
  --ep-footer-height: 5.1rem;
  --ep-footer-padding: 0;
  --ep-footer-margin: 0;
  --ep-footer-bg-color: var(--interface-surface);
  --ep-footer-border-radius: 0;
  --ep-footer-border-width: 0.1rem;
  --ep-footer-border-style: solid;
  --ep-footer-border-color: var(--border-color);
  --ep-footer-shadow: none;
  --ep-footer-overflow: hidden;
  --ep-footer-z-index: 1;
  --ep-footer-content-gap: 3rem;
  --ep-footer-left-flex: 1;
  --ep-footer-left-gap: 3rem;
  --ep-footer-left-justify-content: flex-start;
  --ep-footer-left-padding: 0;
  --ep-footer-center-flex: 1;
  --ep-footer-center-gap: 3rem;
  --ep-footer-center-justify-content: center;
  --ep-footer-center-padding: 0;
  --ep-footer-right-flex: 1;
  --ep-footer-right-gap: 3rem;
  --ep-footer-right-justify-content: flex-end;
  --ep-footer-right-padding: 0;
  position: var(--ep-footer-position);
  z-index: var(--ep-footer-z-index);
  bottom: var(--ep-footer-bottom);
  overflow: var(--ep-footer-overflow);
  width: var(--ep-footer-width);
  height: var(--ep-footer-height);
  padding: var(--ep-footer-padding);
  border-radius: var(--ep-footer-border-radius);
  border-top: var(--ep-footer-border-width) var(--ep-footer-border-style) var(--ep-footer-border-color);
  margin: var(--ep-footer-margin);
  background: var(--ep-footer-bg-color);
  box-shadow: var(--ep-footer-shadow);

  &__content {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    gap: var(--ep-footer-content-gap);

    &__left,
    &__center,
    &__right {
      display: flex;
      height: 100%;
      align-items: center;
    }

    &__left {
      flex: var(--ep-footer-left-flex);
      justify-content: var(--ep-footer-left-justify-content);
      padding: var(--ep-footer-left-padding);
      gap: var(--ep-footer-left-gap);
    }

    &__center {
      flex: var(--ep-footer-center-flex);
      justify-content: var(--ep-footer-center-justify-content);
      padding: var(--ep-footer-center-padding);
      gap: var(--ep-footer-center-gap);
    }

    &__right {
      flex: var(--ep-footer-right-flex);
      justify-content: var(--ep-footer-right-justify-content);
      padding: var(--ep-footer-right-padding);
      gap: var(--ep-footer-right-gap);
    }
  }
}
```