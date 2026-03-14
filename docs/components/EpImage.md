# EpImage



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `alt` | - | `string` | `-` |
| `className` | - | `string` | `-` |
| `height` | - | `union` | `-` |
| `lazy` | - | `boolean` | `-` |
| `placeholder` | - | `string` | `-` |
| `placeholderColor` | - | `string` | `-` |
| `placeholderOpacity` | - | `number` | `-` |
| `src` | - | `string` | `-` |
| `width` | - | `union` | `-` |


::: info
This component does not use events, slots.
:::

## Component Code

```vue
<script setup lang="ts">
  import { computed, onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue'

  interface EpImageProps {
    alt?: string
    className?: string
    height?: string | number
    lazy?: boolean
    placeholder?: string
    placeholderColor?: string
    placeholderOpacity?: number
    src: string
    width?: string | number
  }

  const {
    src,
    alt = '',
    className = '',
    height = '100%',
    lazy = true,
    placeholder = '',
    placeholderColor = '#f5f5f5',
    placeholderOpacity = 1,
    width = '100%',
  } = defineProps<EpImageProps>()

  const isLoaded = ref(false)
  const imageEl = useTemplateRef<HTMLElement>('imageEl')
  let observer: IntersectionObserver | null = null

  const placeholderStyle = computed(() => {
    return {
      width: width,
      height: height,
      backgroundColor: placeholderColor,
      opacity: placeholderOpacity,
      backgroundImage: placeholder ? `url(${placeholder})` : '',
      backgroundSize: 'cover',
    }
  })

  const addLazyLoadListener = (): void => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage()
          observer?.unobserve(entry.target)
        }
      })
    })

    if (imageEl.value) {
      observer.observe(imageEl.value)
    }
  }

  const loadImage = (): void => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      isLoaded.value = true
    }
  }

  onMounted(() => {
    if (lazy) {
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

<template>
  <div
    ref="imageEl"
    class="ep-image"
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