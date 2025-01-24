# EpContainer



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `stickyHeader` | - | `boolean` | `false` |
| `calculateHeight` | - | `boolean` | `false` |
| `calculateHeightOffset` | - | `number` | `0` |
| `styles` | - | `object` | `{}` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
No events available.

## Slots
| Name | Description |
|------|-------------|
| `header` | No description available. |
| `default` | No description available. |
| `footer` | No description available. |

## Component Code

```vue
<template>
  <div
    ref="epContainer"
    :class="['ep-container', containerClasses]"
    :style="[styles, containerStyles]"
  >
    <div
      v-if="$slots.header"
      class="ep-container__header"
    >
      <slot name="header" />
    </div>
    <div class="ep-container__content">
      <slot />
    </div>
    <div
      v-if="$slots.footer"
      class="ep-container__footer"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
  import { useCalculatedHeight } from '../../composables'
  import { computed, ref } from 'vue'

  defineOptions({
    name: 'EpContainer'
  })

  const props = defineProps({
    stickyHeader: {
      type: Boolean,
      default: false
    },
    calculateHeight: {
      type: Boolean,
      default: false
    },
    calculateHeightOffset: {
      type: Number,
      default: 0
    },
    styles: {
      type: Object,
      default: () => ({})
    }
  })

  const containerClasses = computed(() => ({
    'ep-container--sticky-header': props.stickyHeader
  }))

  const epContainer = ref(null)
  const { containerHeight } = useCalculatedHeight(epContainer, props.calculateHeightOffset)

  const containerStyles = computed(() => ({
    ...(props.calculateHeight && containerHeight.value),
  }))
</script>

```


## Styles

```scss
@use '../mixins/_mixins' as mixins;

.ep-container {
  --ep-container-width: 100%;
  --ep-container-min-width: 0;
  --ep-container-max-width: none;
  --ep-container-height: auto;
  --ep-container-min-height: 0;
  --ep-container-max-height: none;
  --ep-container-padding: 0;
  --ep-container-content-height: auto;
  --ep-container-content-padding: 0;
  --ep-container-bg-color: none;
  --ep-container-border-radius: var(--border-radius--large);
  --ep-container-border-width: 0;
  --ep-container-border-style: solid;
  --ep-container-border-color: var(--border-color);
  --ep-container-overflow: visible;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  width: var(--ep-container-width);
  min-width: var(--ep-container-min-width);
  max-width: var(--ep-container-max-width);
  height: var(--ep-container-height);
  min-height: var(--ep-container-min-height);
  max-height: var(--ep-container-max-height);
  padding: var(--ep-container-padding);
  background: var(--ep-container-bg-color);
  border-radius: var(--ep-container-border-radius);
  border-width: var(--ep-container-border-width);
  border-style: var(--ep-container-border-style);
  border-color: var(--ep-container-border-color);
  overflow: var(--ep-container-overflow);

  &__header {
    flex: 0 0 auto;
  }

  &__content {
    position: relative;
    flex: 1 1 auto;
    height: var(--ep-container-content-height);
    padding: var(--ep-container-content-padding);
    @include mixins.no-scrollbar;
    // so that dropdowns overlap sticky table headers
    z-index: var(--z-index--default);
  }

  &__footer {
    flex: 0 0 auto;
  }

  &--sticky-header {
    .ep-container__header {
      position: sticky;
      top: 0;
      z-index: var(--z-index--sticky);
    }
  }
}
```