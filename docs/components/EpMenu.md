# EpMenu



## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `escape` | - | - |
| `tab` | - | - |

## Slots
| Name | Description |
|------|-------------|
| `header` | Header content rendered above the menu items, outside keyboard navigation. |
| `default` | Default slot for menu items (EpMenuItem components). |
| `footer` | Footer content rendered below the menu items, outside keyboard navigation. |


::: info
This component does not use props.
:::

## CSS Custom Properties

Set any of these with a selector that matches `.ep-menu` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-menu {
  --ep-menu-bg-color: /* … */;
}
```

### Surface

| Property | Default | State |
|---|---|---|
| `--ep-menu-bg-color` | `var(--interface-surface)` | — |
| `--ep-menu-item-bg-color` | `transparent` | — |
| `--ep-menu-item-hover-bg-color` | `var(--primary-color-base)` | hover |
| `--ep-menu-item-selected-bg-color` | `var(--primary-color-base)` | selected |

### Border

| Property | Default | State |
|---|---|---|
| `--ep-menu-border-color` | `var(--border-color)` | — |
| `--ep-menu-border-radius` | `var(--border-radius--large)` | — |
| `--ep-menu-border-style` | `solid` | — |
| `--ep-menu-border-width` | `var(--border-width--hairline)` | — |
| `--ep-menu-divider-border-color` | `var(--border-color)` | — |
| `--ep-menu-item-border-color` | `transparent` | — |
| `--ep-menu-item-border-radius` | `var(--border-radius--default)` | — |
| `--ep-menu-item-hover-border-color` | `var(--primary-color-base)` | hover |

### Layout

| Property | Default | State |
|---|---|---|
| `--ep-menu-chevron-left` | `1rem` | — |
| `--ep-menu-sub-menu-offset` | `1rem` | — |
| `--ep-menu-sub-menu-top` | `-1rem` | — |

### Box

| Property | Default | State |
|---|---|---|
| `--ep-menu-chevron-size` | `1.2em` | — |

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-menu-divider-margin` | `1rem 0` | — |
| `--ep-menu-item-padding-inline` | `var(--space--5)` | — |
| `--ep-menu-padding` | `1rem 0.5rem` | — |
| `--ep-menu-section-margin-block-start` | `0` | — |
| `--ep-menu-section-padding` | `0.8rem 2.2rem` | — |

### Text

| Property | Default | State |
|---|---|---|
| `--ep-menu-item-hover-text-color` | `hsl(var(--gray-0))` | hover |
| `--ep-menu-item-selected-text-color` | `hsl(var(--gray-0))` | selected |
| `--ep-menu-text-align` | `left` | — |

## Component Code

```vue
<script setup lang="ts">
  import { onMounted, ref, useTemplateRef } from 'vue'

  const emit = defineEmits<{
    escape: []
    tab: []
  }>()

  defineOptions({ name: 'EpMenu' })

  const menuRef = useTemplateRef<HTMLDivElement>('menuRef')
  const currentFocusIndex = ref(0)

  const getFocusableItems = (): Element[] => {
    if (!menuRef.value) return []

    const allItems = menuRef.value.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])')
    return Array.from(allItems).filter(item => {
      const closestMenu = item.closest('.ep-menu')
      return closestMenu === menuRef.value
    })
  }

  const focusItemAtIndex = (index: number): void => {
    const items = getFocusableItems()
    if (items.length === 0) return

    if (index < 0) index = items.length - 1
    if (index >= items.length) index = 0

    items.forEach((item, i) => {
      item.setAttribute('tabindex', i === index ? '0' : '-1')
    })

    currentFocusIndex.value = index
      ; (items[index] as HTMLElement)?.focus()
  }

  const onKeydown = (event: KeyboardEvent): void => {
    const items = getFocusableItems()
    if (items.length === 0) return

    const key = event.key

    const activeElement = document.activeElement
    const isDirectChild = items.includes(activeElement as Element)

    const isArrowKey = ['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(key)
    if (isArrowKey && !isDirectChild) {
      return
    }

    switch (key) {
      case 'ArrowDown':
        event.preventDefault()
        focusItemAtIndex(currentFocusIndex.value + 1)
        break
      case 'ArrowUp':
        event.preventDefault()
        focusItemAtIndex(currentFocusIndex.value - 1)
        break
      case 'Home':
        event.preventDefault()
        focusItemAtIndex(0)
        break
      case 'End':
        event.preventDefault()
        focusItemAtIndex(items.length - 1)
        break
      case 'Escape':
        event.preventDefault()
        emit('escape')
        break
      case 'Tab':
        emit('tab')
        break
    }
  }

  const resetFocus = (): void => {
    const items = getFocusableItems()
    items.forEach((item, i) => {
      item.setAttribute('tabindex', i === 0 ? '0' : '-1')
    })
    currentFocusIndex.value = 0
  }

  onMounted(() => {
    if (!menuRef.value) return

    resetFocus()

    menuRef.value.addEventListener('focusin', (event: FocusEvent) => {
      const items = getFocusableItems()
      const target = (event.target as HTMLElement).closest('[role="menuitem"]')
      if (target) {
        const index = items.indexOf(target)
        if (index !== -1) {
          items.forEach((item, i) => {
            item.setAttribute('tabindex', i === index ? '0' : '-1')
          })
          currentFocusIndex.value = index
        }
      }
    })

    menuRef.value.addEventListener('focusout', (event: FocusEvent) => {
      const relatedTarget = event.relatedTarget as Node | null
      if (!menuRef.value?.contains(relatedTarget)) {
        resetFocus()
      }
    })
  })

  defineExpose({ resetFocus })
</script>

<template>
  <div
    ref="menuRef"
    class="ep-menu"
    @keydown="onKeydown"
  >
    <div
      v-if="$slots.header"
      class="ep-menu__header"
    >
      <!-- @slot Header content rendered above the menu items, outside keyboard navigation. -->
      <slot name="header" />
    </div>
    <div
      role="menu"
      class="ep-menu__items"
    >
      <!-- @slot Default slot for menu items (EpMenuItem components). -->
      <slot />
    </div>
    <div
      v-if="$slots.footer"
      class="ep-menu__footer"
    >
      <!-- @slot Footer content rendered below the menu items, outside keyboard navigation. -->
      <slot name="footer" />
    </div>
  </div>
</template>

```

## Styles (SCSS)

```scss
.ep-menu {
  --ep-menu-padding: 1rem 0.5rem;
  --ep-menu-bg-color: var(--interface-surface);
  --ep-menu-border-width: var(--border-width--hairline);
  --ep-menu-border-style: solid;
  --ep-menu-border-color: var(--border-color);
  --ep-menu-border-radius: var(--border-radius--large);
  --ep-menu-text-align: left;

  --ep-menu-section-padding: 0.8rem 2.2rem;
  --ep-menu-section-margin-block-start: 0;

  --ep-menu-divider-border-color: var(--border-color);
  --ep-menu-divider-margin: 1rem 0;

  --ep-menu-item-padding-inline: var(--space--5);
  --ep-menu-item-border-radius: var(--border-radius--default);
  --ep-menu-item-bg-color: transparent;
  --ep-menu-item-border-color: transparent;
  --ep-menu-item-hover-bg-color: var(--primary-color-base);
  --ep-menu-item-hover-text-color: hsl(var(--gray-0));
  --ep-menu-item-hover-border-color: var(--primary-color-base);
  --ep-menu-item-selected-bg-color: var(--primary-color-base);
  --ep-menu-item-selected-text-color: hsl(var(--gray-0));

  --ep-menu-sub-menu-top: -1rem;
  --ep-menu-sub-menu-offset: 1rem;
  --ep-menu-chevron-size: 1.2em;
  --ep-menu-chevron-left: 1rem;

  border-width: var(--ep-menu-border-width);
  border-style: var(--ep-menu-border-style);
  border-color: var(--ep-menu-border-color);
  border-radius: var(--ep-menu-border-radius);
  background: var(--ep-menu-bg-color);
  text-align: var(--ep-menu-text-align);
}

.ep-menu__items {
  padding: var(--ep-menu-padding);
}

.ep-menu__section {
  padding: var(--ep-menu-section-padding);
  user-select: none;
  white-space: nowrap;

  &:not(:first-of-type) {
    margin-block-start: var(--ep-menu-section-margin-block-start);
  }
}

.ep-menu__item {
  position: relative;
  border-radius: var(--ep-menu-item-border-radius);

  // The menu configures its buttons by reassigning the button's own properties
  // rather than overriding them with longhand. That keeps .ep-button's hover and
  // selected rules in charge — and means a consumer restyling menu items only
  // has to set --ep-menu-item-*, not out-specify this selector.
  .ep-button--menu-item {
    --ep-button-padding-inline-start: var(--ep-menu-item-padding-inline);
    --ep-button-padding-inline-end: var(--ep-menu-item-padding-inline);
    --ep-button-bg-color: var(--ep-menu-item-bg-color);
    --ep-button-border-color: var(--ep-menu-item-border-color);
    --ep-button-hover-bg-color: var(--ep-menu-item-hover-bg-color);
    --ep-button-hover-border-color: var(--ep-menu-item-hover-border-color);
    --ep-button-hover-text-color: var(--ep-menu-item-hover-text-color);

    width: 100%;
    max-width: 100%;

    // .ep-button already excludes any class ending in --selected from its hover
    // rule, which this class does, so no extra guard is needed here.
    &--selected {
      --ep-button-bg-color: var(--ep-menu-item-selected-bg-color);
      --ep-button-text-color: var(--ep-menu-item-selected-text-color);
      cursor: default;
    }
  }

  // The chevron shown when a menu item opens a sub-menu.
  &:has(.ep-menu__item__sub-menu) {
    .ep-button__icon--right {
      margin-inline-start: auto;

      & > .ep-icon {
        --ep-icon-width: var(--ep-menu-chevron-size);
        --ep-icon-height: var(--ep-menu-chevron-size);
        position: relative;
        left: var(--ep-menu-chevron-left);
      }
    }
  }

  &__sub-menu {
    position: absolute;
    top: var(--ep-menu-sub-menu-top);
    left: calc(100% - var(--ep-menu-sub-menu-offset));
    // Own compositing layer: Safari clips repaints of a popover's descendants
    // to the popover's border box, so hover/focus styles on the part of a
    // submenu hanging outside the panel never repainted without this.
    transform: translateZ(0);
  }
}

.ep-menu > .ep-divider,
.ep-menu__items > .ep-divider {
  --ep-divider-border-color: var(--ep-menu-divider-border-color);
  --ep-divider-margin: var(--ep-menu-divider-margin);
}

.ep-menu__header,
.ep-menu__footer {
  padding: var(--ep-menu-padding);
}

.ep-menu__header {
  border-bottom: var(--ep-menu-border-width) var(--ep-menu-border-style) var(--ep-menu-divider-border-color);
}

.ep-menu__footer {
  border-top: var(--ep-menu-border-width) var(--ep-menu-border-style) var(--ep-menu-divider-border-color);
}

```