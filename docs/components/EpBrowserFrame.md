# EpBrowserFrame



`EpBrowserFrame` displays an image in a fake browser frame. It is useful for displaying screenshots of websites or web applications.
    

## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `width` | The width of the browser frame. | `string` | `'100%'` |
| `url` | The URL to display in the browser frame. | `string` | `'http://website.com'` |
| `imageSrc` | The source of the image to display in the browser frame. | `string` | `''` |
| `imageAlt` | The alt text for the image. | `string` | `''` |


::: info
This component does not use events, slots.
:::

## Component Code

```vue
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

<script setup>
  import UserCircle02 from '@ericpitcock/epicenter-icons/icons/UserCircle02'

  import EpHeader from '../header/EpHeader.vue'

  defineOptions({
    name: 'EpBrowserFrame'
  })

  const props = defineProps({
    /**
     * The width of the browser frame.
     */
    width: {
      type: String,
      default: '100%'
    },
    /**
     * The URL to display in the browser frame.
     */
    url: {
      type: String,
      default: 'http://website.com'
    },
    /**
     * The source of the image to display in the browser frame.
     */
    imageSrc: {
      type: String,
      default: ''
    },
    /**
     * The alt text for the image.
     */
    imageAlt: {
      type: String,
      default: ''
    }
  })
</script>

<style lang="scss" scoped>
  .browser-frame {
    height: auto;
    display: flex;
    flex-direction: column;
    border-radius: var(--border-radius--large);
    border: 1px solid var(--border-color);
    background: var(--interface-surface);
    overflow: hidden;

    .ep-header {
      flex: 1 1 5rem;
      max-height: 5rem;
      --ep-header-container-padding: 0 2rem;
      --ep-header-container-bg-color: var(--interface-foreground);
      --ep-header-left-flex: 0;
      --ep-header-center-flex: 3;
      --ep-header-right-flex: 0;
    }
  }

  .window-buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.7rem;
    width: 100%;
    height: 100%;

    .window-button {
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;

      &--close {
        background: #ff5f57;
      }

      &--minimize {
        background: #febc2e;
      }

      &--maximize {
        background: #28c840;
      }
    }
  }

  .search {
    display: flex;
    align-items: center;
    width: 100%;
    height: 3rem;
    padding-left: 1.5rem;
    background: var(--interface-overlay);
    border: 1px solid var(--border-color--lighter);
    border-radius: 1.5rem;
    color: var(--text-color--subtle);
    cursor: default;
  }

  .image-container {
    flex-grow: 1;
    overflow: hidden;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>

```