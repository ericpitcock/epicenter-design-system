# EpTabContent



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `activeTabIndex` | The index of the currently active tab. | `number` | `0` |
| `items` | An array of tab items (used to determine tab count). | `array` | `[]` |

## Slots
| Name | Description |
|------|-------------|
| `tab-{index}` | Content for each tab panel. Use named slots like 'tab-0', 'tab-1', etc. |


::: info
This component does not use events.
:::

## Component Code

```vue
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

<script setup>
  defineOptions({
    name: 'EpTabContent',
  })

  const props = defineProps({
    /**
     * The index of the currently active tab.
     */
    activeTabIndex: {
      type: Number,
      default: 0
    },
    /**
     * An array of tab items (used to determine tab count).
     */
    items: {
      type: Array,
      default: () => []
    }
  })
</script>
```

## Styles (SCSS)

```scss
.ep-tab-content {
  &__tab-item {
    display: none;
    height: 100%;

    &--active {
      display: block;
    }
  }
}
```