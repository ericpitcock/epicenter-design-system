# EpContainer



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
    

## Slots
| Name | Description |
|------|-------------|
| `header` | Header content of the container |
| `default` | Main content of the container |
| `footer` | Footer content of the container |


::: info
This component does not use props, events.
:::

## Component Code

```vue
<template>
  <div
    ref="epContainer"
    class="ep-container"
  >
    <div
      v-if="$slots.header"
      class="ep-container__header"
    >
      <!-- @slot Header content of the container -->
      <slot name="header" />
    </div>
    <div class="ep-container__content">
      <!-- @slot Main content of the container -->
      <slot />
    </div>
    <div
      v-if="$slots.footer"
      class="ep-container__footer"
    >
      <!-- @slot Footer content of the container -->
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
  import { useTemplateRef } from 'vue'

  defineOptions({
    name: 'EpContainer'
  })

  const epContainer = useTemplateRef('epContainer')

  defineExpose({
    epContainer
  })
</script>

```

## Styles (SCSS)

```scss
@use '../mixins/_mixins' as *;

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
  --ep-container-header-bg-color: var(--interface-surface);
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
    @include no-scrollbar;
    z-index: var(--z-index--default);
  }

  &__footer {
    flex: 0 0 auto;
  }

  &--sticky-header {
    --ep-container-height: unset;
    --ep-container-min-height: unset;
    --ep-container-overflow: unset;

    .ep-container__header {
      position: sticky;
      top: 0;
      background: var(--ep-container-header-bg-color);
      z-index: var(--z-index--sticky);
    }
  }

  &--framed {
    --ep-container-framed-height: 100vh;
    --ep-container-framed-offset: 0;
    --ep-container-height: calc(var(--ep-container-framed-height) - var(--ep-container-framed-offset));
    --ep-container-overflow: auto;
  }
}
```