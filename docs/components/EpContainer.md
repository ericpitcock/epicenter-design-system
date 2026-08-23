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
  import { EpContainer, EpHeader, EpFooter } from '@ericpitcock/epicenter-components-vue'
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

## CSS Custom Properties

Set any of these with a selector that matches `.ep-container` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-container {
  --ep-container-bg-color: /* … */;
}
```

### Surface

| Property | Default | State |
|---|---|---|
| `--ep-container-bg-color` | `transparent` | — |
| `--ep-container-header-bg-color` | `var(--interface-surface)` | — |

### Border

| Property | Default | State |
|---|---|---|
| `--ep-container-border-color` | `var(--border-color)` | — |
| `--ep-container-border-radius` | `var(--border-radius--large)` | — |
| `--ep-container-border-style` | `solid` | — |
| `--ep-container-border-width` | `0` | — |

### Box

| Property | Default | State |
|---|---|---|
| `--ep-container-content-height` | `auto` | — |
| `--ep-container-framed-height` | `100vh` | — |
| `--ep-container-height` | `auto` | — |
| `--ep-container-max-height` | `none` | — |
| `--ep-container-max-width` | `none` | — |
| `--ep-container-min-height` | `0` | — |
| `--ep-container-min-width` | `0` | — |
| `--ep-container-width` | `100%` | — |

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-container-content-padding` | `0` | — |
| `--ep-container-padding` | `0` | — |

### Layout

| Property | Default | State |
|---|---|---|
| `--ep-container-framed-offset` | `0` | — |
| `--ep-container-header-z-index` | `var(--z-index--sticky)` | — |
| `--ep-container-overflow` | `visible` | — |
| `--ep-container-z-index` | `var(--z-index--default)` | — |

## Component Code

```vue
<script setup lang="ts">
  import { useTemplateRef } from 'vue'

  defineOptions({ name: 'EpContainer' })

  const epContainer = useTemplateRef<HTMLDivElement>('epContainer')

  defineExpose({
    epContainer
  })
</script>

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

```

## Styles (SCSS)

```scss
@use '../mixins/mixins' as *;

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
  // `none` is not a valid background colour; transparent is what was intended
  // and what the browser was already falling back to.
  --ep-container-bg-color: transparent;
  --ep-container-border-radius: var(--border-radius--large);
  --ep-container-border-width: 0;
  --ep-container-border-style: solid;
  --ep-container-border-color: var(--border-color);
  --ep-container-overflow: visible;
  --ep-container-z-index: var(--z-index--default);
  --ep-container-header-bg-color: var(--interface-surface);
  --ep-container-header-z-index: var(--z-index--sticky);

  // Only consumed by .ep-container--framed, but declared here so the property
  // exists whether or not that modifier is applied.
  --ep-container-framed-height: 100vh;
  --ep-container-framed-offset: 0;

  position: relative;
  display: flex;
  overflow: var(--ep-container-overflow);
  width: var(--ep-container-width);
  min-width: var(--ep-container-min-width);
  max-width: var(--ep-container-max-width);
  height: var(--ep-container-height);
  min-height: var(--ep-container-min-height);
  max-height: var(--ep-container-max-height);
  flex-flow: column nowrap;
  padding: var(--ep-container-padding);
  border-width: var(--ep-container-border-width);
  border-style: var(--ep-container-border-style);
  border-color: var(--ep-container-border-color);
  border-radius: var(--ep-container-border-radius);
  background: var(--ep-container-bg-color);

  &__header {
    flex: 0 0 auto;
  }

  &__content {
    position: relative;
    z-index: var(--ep-container-z-index);
    height: var(--ep-container-content-height);
    flex: 1 1 auto;
    padding: var(--ep-container-content-padding);
    @include no-scrollbar;
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
      z-index: var(--ep-container-header-z-index);
      top: 0;
      background: var(--ep-container-header-bg-color);
    }
  }

  &--framed {
    --ep-container-height: calc(var(--ep-container-framed-height) - var(--ep-container-framed-offset));
    --ep-container-overflow: auto;
  }
}
```