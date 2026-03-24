<script setup lang="ts">
  import { computed, onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue'

  interface Props {
    /** Alternative text for the image element. */
    alt?: string
    /** CSS aspect-ratio value applied to the image and placeholder. */
    aspectRatio?: string
    /** Additional CSS class names applied to the rendered image element. */
    className?: string
    /** The rendered height of the image or placeholder. */
    height?: string | number
    /** If true, defers loading the image until it enters the viewport. */
    lazy?: boolean
    /** CSS object-fit value used for the image element. */
    objectFit?: string
    /** Optional placeholder image URL shown before the main image loads. */
    placeholder?: string
    /** Background color used for the placeholder state. */
    placeholderColor?: string
    /** Opacity applied to the placeholder state. */
    placeholderOpacity?: number
    /** Intersection observer root margin used to trigger lazy loading early. */
    rootMargin?: string
    /** If true, applies the component's rounded corner style. */
    rounded?: boolean
    /** The source URL for the image. */
    src: string
    /** The rendered width of the image or placeholder. */
    width?: string | number
  }

  const {
    alt = '',
    aspectRatio = '16 / 10',
    className = '',
    height = '100%',
    lazy = true,
    objectFit = 'contain',
    placeholder = '',
    placeholderColor = '#f5f5f5',
    placeholderOpacity = 1,
    rootMargin = '0px 0px 100px 0px',
    rounded = true,
    width = '100%',
  } = defineProps<Props>()

  defineOptions({ name: 'EpLazyImage' })

  const isLoaded = ref<boolean>(false)
  const imageEl = useTemplateRef<HTMLDivElement>('imageEl')
  let observer: IntersectionObserver | null = null

  const placeholderStyle = computed(() => {
    return {
      width: width,
      height: height,
      aspectRatio: aspectRatio,
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
          observer!.unobserve(entry.target)
        }
      })
    }, {
      rootMargin: rootMargin,
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