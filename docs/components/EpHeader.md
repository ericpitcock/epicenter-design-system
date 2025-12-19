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

## Component Code

```vue
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

<script setup>
</script>

```

## Styles (SCSS)

```scss
.ep-header {
  --ep-header-container-position: relative;
  --ep-header-container-top: 0;
  --ep-header-container-width: 100%;
  --ep-header-container-height: 6.1rem;
  --ep-header-container-padding: 0;
  --ep-header-container-margin: 0;
  --ep-header-container-bg-color: none;
  --ep-header-container-border-radius: 0;
  --ep-header-container-border-width: 0.1rem;
  --ep-header-container-border-style: solid;
  --ep-header-container-border-color: var(--border-color);
  --ep-header-container-box-shadow: none;
  --ep-header-container-overflow: visible;
  --ep-header-container-z-index: 1;
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
  position: var(--ep-header-container-position);
  z-index: var(--ep-header-container-z-index);
  top: var(--ep-header-container-top);
  overflow: var(--ep-header-container-overflow);
  width: var(--ep-header-container-width);
  height: var(--ep-header-container-height);
  padding: var(--ep-header-container-padding);
  border-radius: var(--ep-header-container-border-radius);
  border-bottom: var(--ep-header-container-border-width) var(--ep-header-container-border-style) var(--ep-header-container-border-color);
  margin: var(--ep-header-container-margin);
  background: var(--ep-header-container-bg-color);
  box-shadow: var(--ep-header-container-box-shadow);

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