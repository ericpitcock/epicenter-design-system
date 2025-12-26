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

## Component Code

```vue
<script setup>
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
  --ep-footer-container-position: relative;
  --ep-footer-container-bottom: 0;
  --ep-footer-container-width: 100%;
  --ep-footer-container-height: 5.1rem;
  --ep-footer-container-padding: 0;
  --ep-footer-container-margin: 0;
  --ep-footer-container-bg-color: var(--interface-surface);
  --ep-footer-container-border-radius: 0;
  --ep-footer-container-border-width: 0.1rem;
  --ep-footer-container-border-style: solid;
  --ep-footer-container-border-color: var(--border-color);
  --ep-footer-container-box-shadow: none;
  --ep-footer-container-overflow: hidden;
  --ep-footer-container-z-index: 1;
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
  position: var(--ep-footer-container-position);
  z-index: var(--ep-footer-container-z-index);
  bottom: var(--ep-footer-container-bottom);
  overflow: var(--ep-footer-container-overflow);
  width: var(--ep-footer-container-width);
  height: var(--ep-footer-container-height);
  padding: var(--ep-footer-container-padding);
  border-radius: var(--ep-footer-container-border-radius);
  border-top: var(--ep-footer-container-border-width) var(--ep-footer-container-border-style) var(--ep-footer-container-border-color);
  margin: var(--ep-footer-container-margin);
  background: var(--ep-footer-container-bg-color);
  box-shadow: var(--ep-footer-container-box-shadow);

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