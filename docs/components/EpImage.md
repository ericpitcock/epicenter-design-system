# EpImage



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `src` | The source URL of the image. | `string` | `-` |
| `alt` | The alt text for the image. | `string` | `''` |
| `width` | The width of the image. | `string|number` | `'100%'` |
| `height` | The height of the image. | `string|number` | `'100%'` |
| `className` | Additional CSS class name for the image element. | `string` | `''` |
| `placeholder` | URL of the placeholder image to display while loading. | `string` | `''` |
| `placeholderColor` | The background color of the placeholder. | `string` | `'#f5f5f5'` |
| `placeholderOpacity` | The opacity of the placeholder. | `number` | `1` |
| `lazy` | If true, enables lazy loading using Intersection Observer. | `boolean` | `true` |


::: info
This component does not use events, slots.
:::

## Component Code

```vue
<template>
  <div
    class="ep-image"
    ref="imageEl"
  >
    <img
      v-if="isLoaded"
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :class="className"
    >
    <div
      v-else
      class="image__placeholder"
      :style="placeholderStyle"
    />
  </div>
</template>

<script setup>
  import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

  const props = defineProps({
    /**
     * The source URL of the image.
     */
    src: {
      type: String,
      required: true,
    },
    /**
     * The alt text for the image.
     */
    alt: {
      type: String,
      default: '',
    },
    /**
     * The width of the image.
     */
    width: {
      type: [String, Number],
      default: '100%',
    },
    /**
     * The height of the image.
     */
    height: {
      type: [String, Number],
      default: '100%',
    },
    /**
     * Additional CSS class name for the image element.
     */
    className: {
      type: String,
      default: '',
    },
    /**
     * URL of the placeholder image to display while loading.
     */
    placeholder: {
      type: String,
      default: '',
    },
    /**
     * The background color of the placeholder.
     */
    placeholderColor: {
      type: String,
      default: '#f5f5f5',
    },
    /**
     * The opacity of the placeholder.
     */
    placeholderOpacity: {
      type: Number,
      default: 1,
    },
    /**
     * If true, enables lazy loading using Intersection Observer.
     */
    lazy: {
      type: Boolean,
      default: true,
    },
  })

  const isLoaded = ref(false)
  const imageEl = ref(null)
  let observer = null

  const placeholderStyle = computed(() => {
    return {
      width: props.width,
      height: props.height,
      backgroundColor: props.placeholderColor,
      opacity: props.placeholderOpacity,
      backgroundImage: props.placeholder ? `url(${props.placeholder})` : '',
      backgroundSize: 'cover',
    }
  })

  const addLazyLoadListener = () => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage()
          observer.unobserve(entry.target)
        }
      })
    })

    if (imageEl.value) {
      observer.observe(imageEl.value)
    }
  }

  const loadImage = () => {
    const img = new Image()
    img.src = props.src
    img.onload = () => {
      isLoaded.value = true
    }
  }

  onMounted(() => {
    if (props.lazy) {
      addLazyLoadListener()
    } else {
      loadImage()
    }
  })

  onBeforeUnmount(() => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  })
</script>

<style lang="scss" scoped>
  .image {
    display: inline-block;
    position: relative;
    overflow: hidden;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .image__placeholder {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
</style>
```