<!--
  EpCaseStudyCarousel - A feature-rich carousel component with center-snap behavior
  
  Features:
  1. First image begins in the center of the viewport
  2. Smooth scrolling with snap-to-center behavior
  3. Adjacent images are always visible on the edges
  4. Clickable images to navigate
  5. Rounded corner containers that clip images
  6. Image zoom and positioning support
  7. Flexible caption positioning (9 positions)
  8. Dot navigation indicators
  
  Image Object Properties:
  - src: string (required) - Image source URL
  - alt: string - Alt text for accessibility
  - caption: string - Caption text to display
  - aspectRatio: string - e.g., "16/9", "4/3"
  - zoom: number - Scale factor (e.g., 1.5 for 150%)
  - positionX: string - Horizontal position (e.g., "50%", "left", "right")
  - positionY: string - Vertical position (e.g., "50%", "top", "bottom")
  - captionPosition: string - One of:
      "top-left", "top-center", "top-right",
      "left-center", "center", "right-center",
      "bottom-left", "bottom-center", "bottom-right"
  
  Events:
  - @image-click: Emitted when an image is clicked { image, index }
  - @slide-change: Emitted when the active slide changes { image, index }
  
  CSS Custom Properties:
  - --ep-case-study-carousel-height: Carousel height (default: 50vh)
  - --ep-case-study-carousel-gap: Gap between images (default: 2rem)
  - --ep-case-study-carousel-border-radius: Border radius (default: 1rem)
  - --ep-case-study-carousel-caption-border-radius: Caption border radius (default: 0.5rem)
-->
<script setup lang="ts">
  import ArrowLeft01 from '@ericpitcock/epicenter-icons-vue/ArrowLeft01'
  import ArrowRight01 from '@ericpitcock/epicenter-icons-vue/ArrowRight01'
  import { nextTick, onBeforeUnmount, onMounted, ref, useTemplateRef, watch } from 'vue'

  import EpButton from '../button/EpButton.vue'
  import EpLazyImage from '../lazy-image/EpLazyImage.vue'

  interface CarouselImage {
    alt?: string
    aspectRatio?: string
    caption?: string
    captionPosition?: string
    positionX?: string
    positionY?: string
    src: string
    zoom?: number
  }

  interface EpCarouselProps {
    images?: CarouselImage[]
  }

  const { images = [] } = defineProps<EpCarouselProps>()

  const emit = defineEmits<{
    'image-click': [payload: { image: CarouselImage; index: number }]
    'slide-change': [payload: { image: CarouselImage; index: number }]
  }>()

  const carouselContainer = useTemplateRef<HTMLDivElement>('carouselContainer')
  const carouselTrack = useTemplateRef<HTMLDivElement>('carouselTrack')
  const itemRefs = ref<(HTMLDivElement | null)[]>([])
  const currentIndex = ref(0)
  const shouldLoadImages = ref(false)
  let scrollTimeout: ReturnType<typeof setTimeout> | null = null
  let containerObserver: IntersectionObserver | null = null
  let resizeObserver: ResizeObserver | null = null

  watch(() => images, () => {
    currentIndex.value = 0
    nextTick(() => {
      if (itemRefs.value[0] && carouselTrack.value) {
        scrollToImage(0)
      }
    })
  })

  const handleScroll = (): void => {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout)
    }

    scrollTimeout = setTimeout(() => {
      updateCurrentIndex()
    }, 100)
  }

  const updateCurrentIndex = (): void => {
    if (!carouselTrack.value) return

    const trackRect = carouselTrack.value.getBoundingClientRect()
    const centerX = trackRect.left + trackRect.width / 2

    let closestIndex = 0
    let closestDistance = Infinity

    itemRefs.value.forEach((item, index) => {
      if (!item) return
      const itemRect = item.getBoundingClientRect()
      const itemCenterX = itemRect.left + itemRect.width / 2
      const distance = Math.abs(centerX - itemCenterX)

      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })

    if (currentIndex.value !== closestIndex) {
      currentIndex.value = closestIndex
      emit('slide-change', { index: closestIndex, image: images[closestIndex] })
    }
  }

  const scrollToImage = (index: number): void => {
    const item = itemRefs.value[index]
    if (!item || !carouselTrack.value) return

    const trackRect = carouselTrack.value.getBoundingClientRect()
    const itemRect = item.getBoundingClientRect()
    const scrollLeft = carouselTrack.value.scrollLeft

    const itemCenter = itemRect.left - trackRect.left + itemRect.width / 2
    const trackCenter = trackRect.width / 2
    const scrollOffset = itemCenter - trackCenter

    carouselTrack.value.scrollTo({
      left: scrollLeft + scrollOffset,
      behavior: 'smooth'
    })

    currentIndex.value = index
    emit('image-click', { image: images[index], index })
  }

  const getImageContainerStyle = (image: CarouselImage): Record<string, string> => {
    const aspectRatio = image.aspectRatio || '16/9'

    const [width, height] = aspectRatio.split('/').map(v => parseFloat(v.trim()))
    const ratio = width / height

    return {
      aspectRatio: aspectRatio,
      width: `calc(var(--ep-carousel-height) * ${ratio})`,
    }
  }

  const getImageStyle = (image: CarouselImage): Record<string, string> => {
    const styles: Record<string, string> = {}

    if (image.zoom) {
      styles.transform = `scale(${image.zoom})`
    }

    if (image.positionX !== undefined || image.positionY !== undefined) {
      const x = image.positionX || '50%'
      const y = image.positionY || '50%'
      styles.transformOrigin = `${x} ${y}`
    }

    return styles
  }

  const getCaptionPositionClass = (image: CarouselImage): string => {
    const position = image.captionPosition || 'bottom-center'
    return `caption-${position}`
  }

  onMounted(() => {
    containerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            shouldLoadImages.value = true
            containerObserver!.disconnect()
          }
        })
      },
      {
        rootMargin: '500px 0px 500px 0px',
        threshold: 0
      }
    )

    if (carouselContainer.value) {
      containerObserver.observe(carouselContainer.value)
    }

    resizeObserver = new ResizeObserver(() => {
      const item = itemRefs.value[currentIndex.value]
      if (!item || !carouselTrack.value) return

      const trackRect = carouselTrack.value.getBoundingClientRect()
      const itemRect = item.getBoundingClientRect()
      const scrollLeft = carouselTrack.value.scrollLeft

      const itemCenter = itemRect.left - trackRect.left + itemRect.width / 2
      const trackCenter = trackRect.width / 2
      const scrollOffset = itemCenter - trackCenter

      carouselTrack.value.scrollTo({
        left: scrollLeft + scrollOffset,
        behavior: 'instant'
      })
    })

    if (carouselContainer.value) {
      resizeObserver.observe(carouselContainer.value)
    }

    nextTick(() => {
      if (itemRefs.value[0] && carouselTrack.value) {
        scrollToImage(0)
      }
    })
  })

  onBeforeUnmount(() => {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout)
    }
    if (containerObserver) {
      containerObserver.disconnect()
    }
    if (resizeObserver) {
      resizeObserver.disconnect()
    }
  })
</script>

<template>
  <div
    ref="carouselContainer"
    class="ep-case-study-carousel"
  >
    <div
      ref="carouselTrack"
      class="carousel-track"
      @scroll="handleScroll"
    >
      <div class="carousel-spacer" />
      <div
        v-for="(image, index) in images"
        :key="image?.src ?? index"
        :ref="el => itemRefs[index] = (el as HTMLDivElement | null)"
        class="carousel-item"
        :class="{ 'is-active': currentIndex === index }"
        role="button"
        tabindex="0"
        @click="scrollToImage(index)"
        @keydown.enter.prevent="scrollToImage(index)"
        @keydown.space.prevent="scrollToImage(index)"
      >
        <div
          class="carousel-image-container"
          :style="getImageContainerStyle(image)"
        >
          <ep-lazy-image
            class="carousel-image"
            :src="image.src"
            :alt="image.alt"
            :aspect-ratio="image.aspectRatio"
            :lazy="!shouldLoadImages"
            :style="getImageStyle(image)"
          />
          <div
            v-if="image.caption"
            class="carousel-caption"
            :class="getCaptionPositionClass(image)"
          >
            {{ image.caption }}
          </div>
        </div>
      </div>
      <div class="carousel-spacer" />
    </div>

    <div class="carousel-navigation">
      <ep-button
        class="carousel-nav-button"
        size="xlarge"
        aria-label="Previous slide"
        :disabled="currentIndex === 0"
        @click="scrollToImage(currentIndex - 1)"
      >
        <template #icon-left>
          <ArrowLeft01 />
        </template>
      </ep-button>
      <div class="carousel-dots">
        <button
          v-for="(image, index) in images"
          :key="`dot-${index}`"
          class="carousel-dot"
          :class="{ 'is-active': currentIndex === index }"
          :aria-label="`Go to slide ${index + 1}`"
          @click="scrollToImage(index)"
        />
      </div>
      <ep-button
        class="carousel-nav-button"
        size="xlarge"
        aria-label="Next slide"
        :disabled="currentIndex === images.length - 1"
        @click="scrollToImage(currentIndex + 1)"
      >
        <template #icon-left>
          <ArrowRight01 />
        </template>
      </ep-button>
    </div>
  </div>
</template>
