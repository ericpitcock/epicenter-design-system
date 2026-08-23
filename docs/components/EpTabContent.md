# EpTabContent



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `activeTabIndex` | The index of the currently active tab. | `number` | `-` |
| `items` | An array of tab items (used to determine tab count). | `Array` | `-` |

## Slots
| Name | Description |
|------|-------------|
| `tab-{index}` | Content for each tab panel. Use named slots like 'tab-0', 'tab-1', etc. |


::: info
This component does not use events.
:::

## CSS Custom Properties

Set any of these with a selector that matches `.ep-tab-content` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-tab-content {
  --ep-tab-content-height: /* … */;
}
```

### Box

| Property | Default | State |
|---|---|---|
| `--ep-tab-content-height` | `100%` | — |

## Component Code

```vue
<script setup lang="ts">
  interface Props {
    /**
     * The index of the currently active tab.
     */
    activeTabIndex?: number
    /**
     * An array of tab items (used to determine tab count).
     */
    items?: unknown[]
  }

  const { activeTabIndex = 0, items = [] } = defineProps<Props>()

  defineOptions({ name: 'EpTabContent' })
</script>

<template>
  <div class="ep-tab-content">
    <div
      v-for="(item, index) in items"
      :id="`tabpanel-${index}`"
      :key="index"
      class="ep-tab-content__tab-item"
      :class="{ 'ep-tab-content__tab-item--active': index === activeTabIndex }"
      role="tabpanel"
      :aria-labelledby="`tab-${index}`"
      :aria-hidden="index !== activeTabIndex"
    >
      <!-- @slot tab-{index} - Content for each tab panel. Use named slots like 'tab-0', 'tab-1', etc. -->
      <slot :name="`tab-${index}`" />
    </div>
  </div>
</template>
```

## Styles (SCSS)

```scss
.ep-tab-content {
  --ep-tab-content-height: 100%;

  &__tab-item {
    display: none;
    height: var(--ep-tab-content-height);

    &--active {
      display: block;
    }
  }
}

```