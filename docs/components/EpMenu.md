# EpMenu



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `menuType` | The type/style of menu to display. | `string` | `'default'` |
| `size` | The size of the menu items. | `string` | `'default'` |

## Slots
| Name | Description |
|------|-------------|
| `default` | Default slot for menu items (EpMenuItem components). |


::: info
This component does not use events.
:::

## Component Code

```vue
<template>
  <div :class="['ep-menu', `ep-menu--${menuType}`]">
    <!-- @slot Default slot for menu items (EpMenuItem components). -->
    <slot />
  </div>
</template>

<script setup>
  const props = defineProps({
    /**
     * The type/style of menu to display.
     * @values default, dropdown, nav
     */
    menuType: {
      type: String,
      default: 'default' // default, dropdown, nav
    },
    /**
     * The size of the menu items.
     */
    size: {
      type: String,
      default: 'default'
    },
  })
</script>

```

## Styles (SCSS)

```scss
@use '../mixins/_mixins' as *;

.ep-menu {
  --ep-menu-bg-color: var(--interface-surface);
  --ep-menu-padding: 1rem 0.5rem;
  --ep-menu-border-width: 0.1rem;
  --ep-menu-border-style: solid;
  --ep-menu-border-color: var(--border-color);
  --ep-menu-border-radius: var(--border-radius);
  --ep-menu-section-padding: 0.8rem 2.2rem;
  --ep-menu-section-margin-top: 0;
  --ep-menu-divider-border-color: var(--border-color);
  --ep-button-menu-item-hover-bg-color: var(--primary-color-base);
  --ep-button-menu-item-hover-text-color: hsl(0, 0%, 100%);
  --ep-button-menu-item-hover-border-color: var(--primary-color-base);
  --ep-button-menu-item-selected-bg-color: var(--primary-color-base);
  --ep-button-menu-item-selected-text-color: hsl(0, 0%, 100%);
  background: var(--ep-menu-bg-color);
  padding: var(--ep-menu-padding);
  border-width: var(--ep-menu-border-width);
  border-style: var(--ep-menu-border-style);
  border-color: var(--ep-menu-border-color);
  border-radius: var(--ep-menu-border-radius);
  text-align: left;
}

.ep-menu__section {
  padding: var(--ep-menu-section-padding);
  user-select: none;
  white-space: nowrap;

  &:not(:first-of-type) {
    margin-top: var(--ep-menu-section-margin-top);
  }
}

.ep-menu__item {
  position: relative;

  .ep-button--menu-item {
    width: 100%;
    max-width: 100%;
    background: transparent;
    border-color: transparent;
    padding-right: 2rem;
    padding-left: 2rem;

    @include hover {
      &:not(.ep-button--menu-item--selected):hover {
        background: var(--ep-button-menu-item-hover-bg-color);
        color: var(--ep-button-menu-item-hover-text-color);
        border-color: var(--ep-button-menu-item-hover-border-color);
      }
    }

    &--selected {
      background: var(--ep-button-menu-item-selected-bg-color);
      color: var(--ep-button-menu-item-selected-text-color);
      cursor: default;
    }

    // sub menu arrow icon
    .ep-button__icon--right > svg {
      --ep-icon-width: 1.2em;
      --ep-icon-height: 1.2em;
      position: relative;
      left: 1rem;
    }
  }

  &__sub-menu {
    position: absolute;
    top: -1rem;
    left: calc(100% - 1rem);
  }
}

.ep-menu > .ep-divider {
  --ep-divider-border-color: var(--ep-menu-divider-border-color);
  --ep-divider-margin: 1rem 0;
}
```