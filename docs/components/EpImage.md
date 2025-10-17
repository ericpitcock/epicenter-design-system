# EpImage



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `src` | - | `string` | `-` |
| `alt` | - | `string` | `''` |
| `width` | - | `string|number` | `'100%'` |
| `height` | - | `string|number` | `'100%'` |
| `className` | - | `string` | `''` |
| `placeholder` | - | `string` | `''` |
| `placeholderColor` | - | `string` | `'#f5f5f5'` |
| `placeholderOpacity` | - | `number` | `1` |
| `lazy` | - | `boolean` | `true` |


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
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
    width: {
      type: [String, Number],
      default: '100%',
    },
    height: {
      type: [String, Number],
      default: '100%',
    },
    className: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    placeholderColor: {
      type: String,
      default: '#f5f5f5',
    },
    placeholderOpacity: {
      type: Number,
      default: 1,
    },
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