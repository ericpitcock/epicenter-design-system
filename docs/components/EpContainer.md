# EpContainer


## Description
`EpContainer` is a funny little component. Its mystery is only exceeded by its power. And it gives you the tools to be your own boss.

But seriously, I find myself creating the same component layouts often, so I created this component to help me out. It’s a container with header, body, and footer slots. The header and footer can stick while the body scrolls, or you can use it in a more static way. Use `EpHeader` and `EpFooter` components to define the header and footer content for maximum power.

Use `calculateHeight: true` to dynamically assign a height to the container. This is useful when you want the container to exist solely within the viewport and also have a sticky header, which needs an explicit height value to work.

## Usage
```vue
<template>
  <ep-container
    :sticky-header="true"
  >
    <template #header>
      <ep-header padding="0">
        <template #left>
          Header
        </template>
        <template #center>
          <!-- stuff in the center -->
        </template>
        <template #right>
          <!-- stuff to the right -->
        </template>
      </ep-header>
    </template>
    
    <p>Body</p>
    
    <template #footer>
      <ep-footer padding="0">
        <template #left>
          Footer
        </template>
        <template #center>
          <!-- stuff in the center -->
        </template>
        <template #right>
          <!-- stuff to the right -->
        </template>
      </ep-footer>
    </template>
  </ep-container>
</template>

<script setup>
  import { EpContainer, EpHeader, EpFooter } from '@epicenter/vue-components'
</script>
```
    

## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `stickyHeader` | Whether the header should be sticky. | `boolean` | `false` |
| `calculateHeight` | Whether to calculate the height of the container. | `boolean` | `false` |
| `calculateHeightOffset` | calculateHeightOffset is subtracted from the remaining height to allow you to account for additional spacing needs, such as margins, paddings, or any other offset you’d like to apply. | `number` | `0` |
| `styles` | The styles to apply to the container. | `object` | `{}` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
No events available.

## Slots
| Name | Description |
|------|-------------|
| `header` | The header content. |
| `default` | The content of the container. |
| `footer` | The footer content. |

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
      <!-- 
        @slot header - The header content.
      -->
      <slot name="header" />
    </div>
    <div class="ep-container__content">
      <!-- 
        @slot The content of the container.
      -->
      <slot />
    </div>
    <div
      v-if="$slots.footer"
      class="ep-container__footer"
    >
      <!-- 
        @slot footer - The footer content.
      -->
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
    /**
     * Whether the header should be sticky.
     */
    stickyHeader: {
      type: Boolean,
      default: false
    },
    /**
     * Whether to calculate the height of the container.
     */
    calculateHeight: {
      type: Boolean,
      default: false
    },
    /**
     * calculateHeightOffset is subtracted from the remaining height to allow you to account for additional spacing needs, such as margins, paddings, or any other offset you’d like to apply.
     */
    calculateHeightOffset: {
      type: Number,
      default: 0
    },
    /**
     * The styles to apply to the container.
     */
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


## Styles (SCSS)

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