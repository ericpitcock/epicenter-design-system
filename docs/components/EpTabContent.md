# EpTabContent



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `activeTabIndex` | - | `number` | `0` |
| `items` | - | `array` | `[]` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
No events available.

## Slots
| Name | Description |
|------|-------------|
| ``tab-${index}`` | No description available. |

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
      <slot :name="`tab-${index}`" />
    </div>
  </div>
</template>

<script setup>
  defineOptions({
    name: 'EpTabContent',
  })

  const props = defineProps({
    activeTabIndex: {
      type: Number,
      default: 0
    },
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