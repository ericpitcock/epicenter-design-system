# EpBrowserFrame



`EpBrowserFrame` displays an image in a fake browser frame. It is useful for displaying screenshots of websites or web applications.
    

## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `imageAlt` | - | `string` | `-` |
| `imageSrc` | - | `string` | `-` |
| `url` | - | `string` | `-` |
| `width` | - | `string` | `-` |


::: info
This component does not use events, slots.
:::

## CSS Custom Properties

Set any of these with a selector that matches `.browser-frame` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .browser-frame {
  --ep-browser-frame-bg-color: /* … */;
}
```

### Surface

| Property | Default | State |
|---|---|---|
| `--ep-browser-frame-bg-color` | `var(--interface-surface)` | — |
| `--ep-browser-frame-button-close-bg-color` | `rgb(255 95 87)` | — |
| `--ep-browser-frame-button-maximize-bg-color` | `rgb(40 200 64)` | — |
| `--ep-browser-frame-button-minimize-bg-color` | `rgb(254 188 46)` | — |
| `--ep-browser-frame-search-bg-color` | `var(--interface-overlay)` | — |

### Border

| Property | Default | State |
|---|---|---|
| `--ep-browser-frame-border-color` | `var(--border-color)` | — |
| `--ep-browser-frame-border-radius` | `var(--border-radius--large)` | — |
| `--ep-browser-frame-border-style` | `solid` | — |
| `--ep-browser-frame-border-width` | `var(--border-width--hairline)` | — |
| `--ep-browser-frame-button-border-radius` | `var(--border-radius--full)` | — |
| `--ep-browser-frame-search-border-color` | `var(--border-color--lighter)` | — |
| `--ep-browser-frame-search-border-radius` | `1.5rem` | — |
| `--ep-browser-frame-search-border-style` | `solid` | — |
| `--ep-browser-frame-search-border-width` | `var(--border-width--hairline)` | — |

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-browser-frame-button-gap` | `0.7rem` | — |
| `--ep-browser-frame-search-padding-inline-start` | `1.5rem` | — |

### Box

| Property | Default | State |
|---|---|---|
| `--ep-browser-frame-button-size` | `1.2rem` | — |
| `--ep-browser-frame-chrome-height` | `5rem` | — |
| `--ep-browser-frame-search-height` | `3rem` | — |

### Text

| Property | Default | State |
|---|---|---|
| `--ep-browser-frame-search-text-color` | `var(--text-color--subtle)` | — |

## Component Code

```vue
<script setup lang="ts">
  import UserCircle02 from '@ericpitcock/epicenter-icons-vue/UserCircle02'

  import EpHeader from '../header/EpHeader.vue'

  interface Props {
    imageAlt?: string
    imageSrc?: string
    url?: string
    width?: string
  }

  const {
    imageAlt = '',
    imageSrc = '',
    url = 'http://website.com',
    width = '100%',
  } = defineProps<Props>()

  defineOptions({ name: 'EpBrowserFrame' })

</script>

<template>
  <div
    class="browser-frame"
    :style="{ width: `${width}` }"
  >
    <ep-header>
      <template #left>
        <div class="window-buttons">
          <div class="window-button window-button--close" />
          <div class="window-button window-button--minimize" />
          <div class="window-button window-button--maximize" />
        </div>
      </template>
      <template #center>
        <div class="search">
          {{ url }}
        </div>
      </template>
      <template #right>
        <UserCircle02 />
      </template>
    </ep-header>
    <div class="image-container">
      <img
        :src="imageSrc"
        :alt="imageAlt"
      >
    </div>
  </div>
</template>


```

## Styles (SCSS)

```scss
// @block browser-frame
// @root .browser-frame
// Moved out of EpBrowserFrame.vue's scoped block. Scoped CSS compiles to
// [data-v-hash] selectors, so the traffic-light colours below could not be
// changed by a consumer without :deep().
.browser-frame {
  --ep-browser-frame-bg-color: var(--interface-surface);
  --ep-browser-frame-border-width: var(--border-width--hairline);
  --ep-browser-frame-border-style: solid;
  --ep-browser-frame-border-color: var(--border-color);
  --ep-browser-frame-border-radius: var(--border-radius--large);
  --ep-browser-frame-chrome-height: 5rem;

  --ep-browser-frame-button-size: 1.2rem;
  --ep-browser-frame-button-gap: 0.7rem;
  --ep-browser-frame-button-border-radius: var(--border-radius--full);
  --ep-browser-frame-button-close-bg-color: rgb(255 95 87);
  --ep-browser-frame-button-minimize-bg-color: rgb(254 188 46);
  --ep-browser-frame-button-maximize-bg-color: rgb(40 200 64);

  --ep-browser-frame-search-height: 3rem;
  --ep-browser-frame-search-padding-inline-start: 1.5rem;
  --ep-browser-frame-search-bg-color: var(--interface-overlay);
  --ep-browser-frame-search-border-width: var(--border-width--hairline);
  --ep-browser-frame-search-border-style: solid;
  --ep-browser-frame-search-border-color: var(--border-color--lighter);
  --ep-browser-frame-search-border-radius: 1.5rem;
  --ep-browser-frame-search-text-color: var(--text-color--subtle);

  display: flex;
  overflow: hidden;
  height: auto;
  flex-direction: column;
  border-width: var(--ep-browser-frame-border-width);
  border-style: var(--ep-browser-frame-border-style);
  border-color: var(--ep-browser-frame-border-color);
  border-radius: var(--ep-browser-frame-border-radius);
  background: var(--ep-browser-frame-bg-color);

  .ep-header {
    --ep-header-padding: 0 var(--space--5);
    --ep-header-bg-color: var(--interface-foreground);
    --ep-header-left-flex: 0;
    --ep-header-center-flex: 3;
    --ep-header-right-flex: 0;

    max-height: var(--ep-browser-frame-chrome-height);
    flex: 1 1 var(--ep-browser-frame-chrome-height);
  }

  .window-buttons {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
    gap: var(--ep-browser-frame-button-gap);

    .window-button {
      width: var(--ep-browser-frame-button-size);
      height: var(--ep-browser-frame-button-size);
      border-radius: var(--ep-browser-frame-button-border-radius);

      &--close {
        background: var(--ep-browser-frame-button-close-bg-color);
      }

      &--minimize {
        background: var(--ep-browser-frame-button-minimize-bg-color);
      }

      &--maximize {
        background: var(--ep-browser-frame-button-maximize-bg-color);
      }
    }
  }

  .search {
    display: flex;
    width: 100%;
    height: var(--ep-browser-frame-search-height);
    align-items: center;
    border-width: var(--ep-browser-frame-search-border-width);
    border-style: var(--ep-browser-frame-search-border-style);
    border-color: var(--ep-browser-frame-search-border-color);
    border-radius: var(--ep-browser-frame-search-border-radius);
    background: var(--ep-browser-frame-search-bg-color);
    color: var(--ep-browser-frame-search-text-color);
    cursor: default;
    padding-inline-start: var(--ep-browser-frame-search-padding-inline-start);
  }

  .image-container {
    overflow: hidden;
    flex-grow: 1;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

```