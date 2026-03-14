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

## Component Code

```vue
<script setup lang="ts">
  import { onMounted, ref, useTemplateRef } from 'vue'

  const emit = defineEmits<{
    escape: []
    tab: []
  }>()

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
@use '../mixins/mixins' as *;

.ep-menu {
  --ep-menu-bg-color: var(--interface-surface);
  --ep-menu-padding: 1rem 0.5rem;
  --ep-menu-border-width: 0.1rem;
  --ep-menu-border-style: solid;
  --ep-menu-border-color: var(--border-color);
  --ep-menu-border-radius: var(--border-radius--large);
  --ep-menu-section-padding: 0.8rem 2.2rem;
  --ep-menu-section-margin-top: 0;
  --ep-menu-divider-border-color: var(--border-color);
  --ep-button-menu-item-hover-bg-color: var(--primary-color-base);
  --ep-button-menu-item-hover-text-color: hsl(0, 0%, 100%);
  --ep-button-menu-item-hover-border-color: var(--primary-color-base);
  --ep-button-menu-item-selected-bg-color: var(--primary-color-base);
  --ep-button-menu-item-selected-text-color: hsl(0, 0%, 100%);
  border-width: var(--ep-menu-border-width);
  border-style: var(--ep-menu-border-style);
  border-color: var(--ep-menu-border-color);
  border-radius: var(--ep-menu-border-radius);
  background: var(--ep-menu-bg-color);
  text-align: left;
}

.ep-menu__items {
  padding: var(--ep-menu-padding);
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
  border-radius: var(--border-radius);

  .ep-button--menu-item {
    width: 100%;
    max-width: 100%;
    padding-right: 2rem;
    padding-left: 2rem;
    border-color: transparent;
    background: transparent;

    @include hover {
      &:not(.ep-button--menu-item--selected):hover {
        border-color: var(--ep-button-menu-item-hover-border-color);
        background: var(--ep-button-menu-item-hover-bg-color);
        color: var(--ep-button-menu-item-hover-text-color);
      }
    }

    &--selected {
      background: var(--ep-button-menu-item-selected-bg-color);
      color: var(--ep-button-menu-item-selected-text-color);
      cursor: default;
    }
  }

  // styling the chevron when the menu item has a sub menu
  &:has(.ep-menu__item__sub-menu) {
    .ep-button__icon--right {
      margin-left: auto;

      & > .ep-icon {
        --ep-icon-width: 1.2em;
        --ep-icon-height: 1.2em;
        position: relative;
        left: 1rem;
      }
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

.ep-menu__items > .ep-divider {
  --ep-divider-border-color: var(--ep-menu-divider-border-color);
  --ep-divider-margin: 1rem 0;
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