<script setup lang="ts">
  import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

  interface EpLazyImageProps {
    /** The alt text for the image. */
    alt?: string
    /** The aspect ratio of the image (e.g., '16 / 9'). */
    aspectRatio?: string
    /** Additional CSS class name for the image element. */
    className?: string
    /** The height of the image. */
    height?: string | number
    /** If true, enables lazy loading using Intersection Observer. */
    lazy?: boolean
    /** How the image fits within its container. */
    objectFit?: string
    /** URL of the placeholder image to display while loading. */
    placeholder?: string
    /** The background color of the placeholder. */
    placeholderColor?: string
    /** The opacity of the placeholder. */
    placeholderOpacity?: number
    /** The root margin for the Intersection Observer (controls when loading starts). */
    rootMargin?: string
    /** If true, applies rounded corners to the image. */
    rounded?: boolean
    /** The source URL of the image. */
    src: string
    /** The width of the image. */
    width?: string | number
  }

  const props = withDefaults(defineProps<EpLazyImageProps>(), {
    alt: '',
    aspectRatio: '16 / 10',
    className: '',
    height: '100%',
    lazy: true,
    objectFit: 'contain',
    placeholder: '',
    placeholderColor: '#f5f5f5',
    placeholderOpacity: 1,
    rootMargin: '0px 0px 100px 0px',
    rounded: true,
    width: '100%',
  })

  const isLoaded = ref<boolean>(false)
  const imageEl = ref<HTMLDivElement | null>(null)
  let observer: IntersectionObserver | null = null

  const placeholderStyle = computed(() => {
    return {
      width: props.width,
      height: props.height,
      aspectRatio: props.aspectRatio,
      backgroundColor: props.placeholderColor,
      opacity: props.placeholderOpacity,
      backgroundImage: props.placeholder ? `url(${props.placeholder})` : '',
      backgroundSize: 'cover',
    }
  })

  const addLazyLoadListener = (): void => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage()
          observer!.unobserve(entry.target)
        }
      })
    }, {
      rootMargin: props.rootMargin,
      threshold: 0.1,
    })

    if (imageEl.value) {
      observer.observe(imageEl.value)
    }
  }

  const loadImage = (): void => {
    isLoaded.value = true
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

<template>
  <div
    ref="imageEl"
    :class="['ep-image', { 'ep-image--rounded': rounded, 'ep-image--loading': !isLoaded }]"
  >
    <img
      v-if="isLoaded"
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :class="['ep-image__img', className]"
      :style="({ aspectRatio, objectFit } as any)"
    >
    <div
      v-else
      class="ep-image__placeholder"
      :style="placeholderStyle"
    />
  </div>
</template>

<style lang="scss" scoped>
  .ep-image {
    position: relative;
    display: block;
    overflow: hidden;
    max-width: 100%;

    &--rounded {
      border-radius: var(--border-radius--large);
    }

    &--loading {
      background: var(--interface-surface);

      &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        animation: shimmer 1.5s infinite;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        content: '';
      }
    }
  }

  .ep-image__img {
    display: block;
    width: 100%;
    height: auto;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    animation: fadeIn 0.4s ease-in-out forwards;
  }

  .ep-image__placeholder {
    position: absolute;
    top: 0;
    left: 0;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(100%);
    }
  }
</style>