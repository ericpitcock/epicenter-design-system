# EpTabs



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `activeTabIndex` | The index of the active tab. | `number` | `0` |
| `items` | The tabs to display. | `array` | `[]` |
| `variant` | The variant of the tabs, default or classic. | `string` | `'default'` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `tab-click` | Emitted when a tab is clicked. | - |

## Slots
| Name | Description |
|------|-------------|
No slots available.

## Component Code

```vue
<template>
  <div
    class="ep-tabs"
    :class="{ 'ep-tabs--classic': variant === 'classic' }"
    role="tablist"
  >
    <component
      :is="item.to ? 'router-link' : 'button'"
      v-for="(item, index) in tabs"
      :key="index"
      :class="[
        'ep-tabs__tab-item',
        { 'ep-tabs__tab-item--active': index === activeTabIndex }
      ]"
      :to="item.to ? item.to : undefined"
      role="tab"
      :aria-selected="index === activeTabIndex"
      :tabindex="index === activeTabIndex ? 0 : -1"
      @click="onClick(index)"
      @keydown="handleKeydown(index, $event)"
    >
      <span>{{ item.label }}</span>
    </component>
  </div>
</template>

<script setup>
  defineOptions({
    name: 'EpTabs'
  })

  import { computed } from 'vue'

  const props = defineProps({
    /**
     * The index of the active tab.
     */
    activeTabIndex: {
      type: Number,
      default: 0
    },
    /**
     * The tabs to display.
     */
    items: {
      type: Array,
      default: () => []
    },
    /**
     * The variant of the tabs, default or classic.
     */
    variant: {
      type: String,
      default: 'default'
    }
  })

  const emit = defineEmits([
    /**
     * Emitted when a tab is clicked.
     */
    'tab-click'
  ])

  const tabs = computed(() => {
    return props.items.map(item => (typeof item === 'object' ? item : { label: item }))
  })

  const onClick = (index) => {
    emit('tab-click', index)
  }

  const handleKeydown = (index, event) => {
    const keyActions = {
      ArrowRight: () => focusTab((index + 1) % tabs.value.length),
      ArrowLeft: () => focusTab((index - 1 + tabs.value.length) % tabs.value.length),
      Home: () => focusTab(0),
      End: () => focusTab(tabs.value.length - 1),
      Enter: () => emit('tab-click', index),
      ' ': () => emit('tab-click', index),
    }

    if (keyActions[event.key]) {
      keyActions[event.key]()
    }
  }

  const focusTab = (index) => {
    // Programmatically move focus to the new tab
    const tabElements = document.querySelectorAll('[role="tab"]')
    tabElements[index]?.focus()
  }
</script>
```


## Styles (SCSS)

```scss
:root {
  --ep-tabs-hover-border-color: var(--border-color--lighter);
  --ep-tabs-hover-text-color: var(--text-color);
  --ep-tabs-active-border-color: var(--primary-color-base);
  --ep-tabs-active-text-color: var(--text-color--loud);
  --ep-tabs-focus-outline-color: var(--ep-focus-outline-color);
}

.ep-tabs {
  display: flex;
  height: 100%;
  gap: 0 3rem;
  user-select: none;

  &__tab-item {
    display: inline-flex;
    cursor: default;

    span {
      position: relative;
      border-bottom: 3px solid transparent;
      top: 1px;
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
    }

    &:not(.ep-tabs__tab-item--active):not(.router-link-active):hover span {
      border-bottom-color: var(--ep-tabs-hover-border-color);
      color: var(--ep-tabs-hover-text-color);
      cursor: pointer;
    }

    &:focus-visible span {
      outline: var(--ep-focus-outline-width) solid var(--ep-tabs-focus-outline-color);
      outline-offset: var(--ep-focus-outline-offset);
    }

    &--active span,
    &.router-link-active span {
      border-bottom-color: var(--ep-tabs-active-border-color);
      color: var(--ep-tabs-active-text-color);
    }
  }

  &--classic {
    align-items: end;
    gap: 0;

    .ep-tabs__tab-item {
      span {
        padding: 1rem 1.5rem;
        height: 4rem;
        border: 1px solid transparent;
        border-bottom: 0;
        border-top-right-radius: var(--border-radius);
        border-top-left-radius: var(--border-radius);
      }

      &:not(.ep-tabs__tab-item--active):not(.router-link-active):hover span {
        border-bottom-color: transparent;
        color: var(--ep-tabs-hover-text-color);
      }

      &--active span,
      &.router-link-active span {
        border-bottom-color: transparent;
        background: var(--interface-surface);
        border-color: var(--border-color);
      }
    }
  }
}
```