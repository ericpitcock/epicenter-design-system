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

## CSS Custom Properties

Set any of these with a selector that matches `.ep-tabs` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-tabs {
  --ep-tabs-active-border-color: /* … */;
}
```

### Border

| Property | Default | State |
|---|---|---|
| `--ep-tabs-active-border-color` | `var(--primary-color-base)` | active |
| `--ep-tabs-classic-active-border-color` | `var(--border-color)` | active |
| `--ep-tabs-classic-border-radius` | `var(--border-radius--default)` | — |
| `--ep-tabs-classic-border-width` | `var(--border-width--hairline)` | — |
| `--ep-tabs-hover-border-color` | `var(--border-color--lighter)` | hover |
| `--ep-tabs-item-border-color` | `transparent` | — |
| `--ep-tabs-item-border-width` | `0.3rem` | — |

### Text

| Property | Default | State |
|---|---|---|
| `--ep-tabs-active-text-color` | `var(--text-color--loud)` | active |
| `--ep-tabs-hover-text-color` | `var(--text-color)` | hover |

### Surface

| Property | Default | State |
|---|---|---|
| `--ep-tabs-classic-active-bg-color` | `var(--interface-surface)` | active |

### Box

| Property | Default | State |
|---|---|---|
| `--ep-tabs-classic-height` | `4rem` | — |
| `--ep-tabs-height` | `100%` | — |

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-tabs-classic-padding` | `1rem 1.5rem` | — |
| `--ep-tabs-gap` | `0 3rem` | — |

### Effect

| Property | Default | State |
|---|---|---|
| `--ep-tabs-focus-outline-color` | `var(--focus-outline-color)` | focus |

### Layout

| Property | Default | State |
|---|---|---|
| `--ep-tabs-item-top` | `0.1rem` | — |

## Component Code

```vue
<script setup lang="ts">
  import { computed, useTemplateRef } from 'vue'

  interface TabItem {
    exact?: boolean
    label: string
    to?: string
  }

  interface Props {
    activeTabIndex?: number
    items?: (string | TabItem)[]
    variant?: string
  }

  const { activeTabIndex = 0, items = [], variant = 'default' } = defineProps<Props>()

  const emit = defineEmits<{
    'tab-click': [payload: { item: TabItem; index: number } | number]
  }>()

  defineOptions({ name: 'EpTabs' })

  const tabs = computed((): TabItem[] => {
    return items.map(item => (typeof item === 'object' ? item : { label: item }))
  })

  const onClick = ({ item, index }: { item: TabItem; index: number }): void => {
    if (!item.to) {
      emit('tab-click', { item, index })
    }
  }

  const onTabKeydown = (index: number, event: KeyboardEvent): void => {
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
      @keydown="onTabKeydown(index, $event)"
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
  // Box
  --ep-tabs-height: 100%;
  --ep-tabs-gap: 0 3rem;

  // Underline tabs
  --ep-tabs-item-border-width: 0.3rem;
  --ep-tabs-item-border-color: transparent;
  --ep-tabs-item-top: 0.1rem;
  --ep-tabs-hover-border-color: var(--border-color--lighter);
  --ep-tabs-hover-text-color: var(--text-color);
  --ep-tabs-active-border-color: var(--primary-color-base);
  --ep-tabs-active-text-color: var(--text-color--loud);
  --ep-tabs-focus-outline-color: var(--focus-outline-color);

  // Classic (folder) tabs
  --ep-tabs-classic-height: 4rem;
  --ep-tabs-classic-padding: 1rem 1.5rem;
  --ep-tabs-classic-border-width: var(--border-width--hairline);
  --ep-tabs-classic-border-radius: var(--border-radius--default);
  --ep-tabs-classic-active-border-color: var(--border-color);
  --ep-tabs-classic-active-bg-color: var(--interface-surface);

  display: flex;
  height: var(--ep-tabs-height);
  gap: var(--ep-tabs-gap);
  user-select: none;

  &__tab-item {
    display: inline-flex;
    cursor: default;

    span {
      position: relative;
      top: var(--ep-tabs-item-top);
      display: inline-flex;
      align-items: center;
      border-bottom: var(--ep-tabs-item-border-width) solid var(--ep-tabs-item-border-color);
      white-space: nowrap;
    }

    // Previously declared but never consumed, so setting it did nothing.
    &:focus-visible {
      outline-color: var(--ep-tabs-focus-outline-color);
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
        height: var(--ep-tabs-classic-height);
        padding: var(--ep-tabs-classic-padding);
        border: var(--ep-tabs-classic-border-width) solid transparent;
        border-bottom: 0;
        border-top-left-radius: var(--ep-tabs-classic-border-radius);
        border-top-right-radius: var(--ep-tabs-classic-border-radius);
      }

      @include hover {
        &:not(.ep-tabs__tab-item--active):not(.router-link-exact-active):hover span {
          border-bottom-color: transparent;
          color: var(--ep-tabs-hover-text-color);
        }
      }

      &--active span,
      &.router-link-exact-active span {
        border-color: var(--ep-tabs-classic-active-border-color);
        border-bottom-color: transparent;
        background: var(--ep-tabs-classic-active-bg-color);
      }
    }
  }
}

```