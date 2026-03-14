# EpTabs



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `activeTabIndex` | - | `number` | `-` |
| `items` | - | `Array` | `-` |
| `variant` | - | `string` | `-` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `tab-click` | - | - |


::: info
This component does not use slots.
:::

## Component Code

```vue
<script setup lang="ts">
  import { computed, useTemplateRef } from 'vue'

  interface TabItem {
    exact?: boolean
    label: string
    to?: string
  }

  interface EpTabsProps {
    activeTabIndex?: number
    items?: (string | TabItem)[]
    variant?: string
  }

  const { activeTabIndex = 0, items = [], variant = 'default' } = defineProps<EpTabsProps>()

  const emit = defineEmits<{
    'tab-click': [payload: { item: TabItem; index: number } | number]
  }>()

  const tabs = computed((): TabItem[] => {
    return items.map(item => (typeof item === 'object' ? item : { label: item }))
  })

  const onClick = ({ item, index }: { item: TabItem; index: number }): void => {
    if (!item.to) {
      emit('tab-click', { item, index })
    }
  }

  const handleKeydown = (index: number, event: KeyboardEvent): void => {
    const keyActions: Record<string, () => void> = {
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

  const tabList = useTemplateRef<HTMLDivElement>('tabList')

  const focusTab = (index: number): void => {
    const tabElements = tabList.value?.querySelectorAll('[role="tab"]') || []
      ; (tabElements[index] as HTMLElement)?.focus()
  }
</script>

<template>
  <div
    ref="tabList"
    class="ep-tabs"
    :class="{ 'ep-tabs--classic': variant === 'classic' }"
    role="tablist"
  >
    <component
      :is="item.to ? 'router-link' : 'button'"
      v-for="(item, index) in tabs"
      :id="`tab-${index}`"
      :key="index"
      :aria-controls="`tabpanel-${index}`"
      :class="[
        'ep-tabs__tab-item',
        { 'ep-tabs__tab-item--active': !item.to && index === activeTabIndex }
      ]"
      :to="item.to ? item.to : undefined"
      :exact="item.to ? item.exact : undefined"
      role="tab"
      :aria-selected="index === activeTabIndex"
      :tabindex="index === activeTabIndex ? 0 : -1"
      @click="onClick({ item, index })"
      @keydown="handleKeydown(index, $event)"
    >
      <span>{{ item.label }}</span>
    </component>
  </div>
</template>
```

## Styles (SCSS)

```scss
@use '../mixins/mixins' as *;

.ep-tabs {
  --ep-tabs-hover-border-color: var(--border-color--lighter);
  --ep-tabs-hover-text-color: var(--text-color);
  --ep-tabs-active-border-color: var(--primary-color-base);
  --ep-tabs-active-text-color: var(--text-color--loud);
  --ep-tabs-focus-outline-color: var(--ep-focus-outline-color);
  display: flex;
  height: 100%;
  gap: 0 3rem;
  user-select: none;

  &__tab-item {
    display: inline-flex;
    cursor: default;

    span {
      position: relative;
      top: 1px;
      display: inline-flex;
      align-items: center;
      border-bottom: 3px solid transparent;
      white-space: nowrap;
    }

    @include hover {
      &:not(.ep-tabs__tab-item--active):not(.router-link-exact-active):hover span {
        border-bottom-color: var(--ep-tabs-hover-border-color);
        color: var(--ep-tabs-hover-text-color);
        cursor: pointer;
      }
    }

    &--active span,
    &.router-link-exact-active span {
      border-bottom-color: var(--ep-tabs-active-border-color);
      color: var(--ep-tabs-active-text-color);
    }
  }

  &--classic {
    align-items: end;
    gap: 0;

    .ep-tabs__tab-item {
      span {
        height: 4rem;
        padding: 1rem 1.5rem;
        border: 1px solid transparent;
        border-bottom: 0;
        border-top-left-radius: var(--border-radius);
        border-top-right-radius: var(--border-radius);
      }

      @include hover {
        &:not(.ep-tabs__tab-item--active):not(.router-link-exact-active):hover span {
          border-bottom-color: transparent;
          color: var(--ep-tabs-hover-text-color);
        }
      }

      &--active span,
      &.router-link-exact-active span {
        border-color: var(--border-color);
        border-bottom-color: transparent;
        background: var(--interface-surface);
      }
    }
  }
}
```