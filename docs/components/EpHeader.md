# EpHeader



## Slots
| Name | Description |
|------|-------------|
| `left` | Content to display on the left side of the header |
| `center` | Content to display in the center of the header |
| `right` | Content to display on the right side of the header |


::: info
This component does not use props, events.
:::

## CSS Custom Properties

Set any of these with a selector that matches `.ep-header` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-header {
  --ep-header-bg-color: /* … */;
}
```

### Surface

| Property | Default | State |
|---|---|---|
| `--ep-header-bg-color` | `none` | — |

### Border

| Property | Default | State |
|---|---|---|
| `--ep-header-border-color` | `var(--border-color)` | — |
| `--ep-header-border-radius` | `0` | — |
| `--ep-header-border-style` | `solid` | — |
| `--ep-header-border-width` | `0.1rem` | — |

### Layout

| Property | Default | State |
|---|---|---|
| `--ep-header-center-flex` | `1` | — |
| `--ep-header-center-justify-content` | `center` | — |
| `--ep-header-left-flex` | `1` | — |
| `--ep-header-left-justify-content` | `flex-start` | — |
| `--ep-header-overflow` | `visible` | — |
| `--ep-header-position` | `relative` | — |
| `--ep-header-right-flex` | `1` | — |
| `--ep-header-right-justify-content` | `flex-end` | — |
| `--ep-header-top` | `0` | — |
| `--ep-header-z-index` | `1` | — |

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-header-center-gap` | `3rem` | — |
| `--ep-header-center-padding` | `0` | — |
| `--ep-header-content-gap` | `3rem` | — |
| `--ep-header-left-gap` | `3rem` | — |
| `--ep-header-left-padding` | `0` | — |
| `--ep-header-margin` | `0` | — |
| `--ep-header-padding` | `0` | — |
| `--ep-header-right-gap` | `3rem` | — |
| `--ep-header-right-padding` | `0` | — |

### Box

| Property | Default | State |
|---|---|---|
| `--ep-header-height` | `6.1rem` | — |
| `--ep-header-width` | `100%` | — |

### Effect

| Property | Default | State |
|---|---|---|
| `--ep-header-shadow` | `none` | — |

## Component Code

```vue
<script setup lang="ts">
  defineOptions({ name: 'EpHeader' })

</script>

<template>
  <div class="ep-header">
    <div class="ep-header__content">
      <div
        v-if="$slots.left"
        class="ep-header__content__left"
      >
        <!-- @slot Content to display on the left side of the header -->
        <slot name="left" />
      </div>
      <div
        v-if="$slots.center"
        class="ep-header__content__center"
      >
        <!-- @slot Content to display in the center of the header -->
        <slot name="center" />
      </div>
      <div
        v-if="$slots.right"
        class="ep-header__content__right"
      >
        <!-- @slot Content to display on the right side of the header -->
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

```

## Styles (SCSS)

```scss
.ep-header {
  --ep-header-position: relative;
  --ep-header-top: 0;
  --ep-header-width: 100%;
  --ep-header-height: 6.1rem;
  --ep-header-padding: 0;
  --ep-header-margin: 0;
  --ep-header-bg-color: none;
  --ep-header-border-radius: 0;
  --ep-header-border-width: 0.1rem;
  --ep-header-border-style: solid;
  --ep-header-border-color: var(--border-color);
  --ep-header-shadow: none;
  --ep-header-overflow: visible;
  --ep-header-z-index: 1;
  --ep-header-content-gap: 3rem;
  --ep-header-left-flex: 1;
  --ep-header-left-gap: 3rem;
  --ep-header-left-justify-content: flex-start;
  --ep-header-left-padding: 0;
  --ep-header-center-flex: 1;
  --ep-header-center-gap: 3rem;
  --ep-header-center-justify-content: center;
  --ep-header-center-padding: 0;
  --ep-header-right-flex: 1;
  --ep-header-right-gap: 3rem;
  --ep-header-right-justify-content: flex-end;
  --ep-header-right-padding: 0;
  position: var(--ep-header-position);
  z-index: var(--ep-header-z-index);
  top: var(--ep-header-top);
  overflow: var(--ep-header-overflow);
  width: var(--ep-header-width);
  height: var(--ep-header-height);
  padding: var(--ep-header-padding);
  border-radius: var(--ep-header-border-radius);
  border-bottom: var(--ep-header-border-width) var(--ep-header-border-style) var(--ep-header-border-color);
  margin: var(--ep-header-margin);
  background: var(--ep-header-bg-color);
  box-shadow: var(--ep-header-shadow);

  &__content {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    gap: var(--ep-header-content-gap);

    &__left,
    &__center,
    &__right {
      display: flex;
      height: 100%;
      align-items: center;
    }

    &__left {
      flex: var(--ep-header-left-flex);
      justify-content: var(--ep-header-left-justify-content);
      padding: var(--ep-header-left-padding);
      gap: var(--ep-header-left-gap);
    }

    &__center {
      flex: var(--ep-header-center-flex);
      justify-content: var(--ep-header-center-justify-content);
      padding: var(--ep-header-center-padding);
      gap: var(--ep-header-center-gap);
    }

    &__right {
      flex: var(--ep-header-right-flex);
      justify-content: var(--ep-header-right-justify-content);
      padding: var(--ep-header-right-padding);
      gap: var(--ep-header-right-gap);
    }
  }
}
```