# EpCarousel



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `images` | - | `Array` | `-` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `image-click` | - | - |
| `slide-change` | - | - |


::: info
This component does not use slots.
:::

## CSS Custom Properties

Set any of these with a selector that matches `.ep-case-study-carousel` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-case-study-carousel {
  --ep-carousel-border-radius: /* … */;
}
```

### Border

| Property | Default | State |
|---|---|---|
| `--ep-carousel-border-radius` | `1rem` | — |
| `--ep-carousel-caption-border-radius` | `var(--border-radius--default)` | — |

### Surface

| Property | Default | State |
|---|---|---|
| `--ep-carousel-caption-bg-color` | `hsla(0, 0%, 100%, 0.5)` | — |
| `--ep-carousel-dot-bg-color` | `hsl(from var(--primary-color-base) h s l / 0.3)` | — |
| `--ep-carousel-dot-hover-bg-color` | `hsl(from var(--primary-color-base) h s l / 0.6)` | hover |
| `--ep-carousel-dot-selected-bg-color` | `var(--primary-color-base)` | selected |
| `--ep-carousel-image-bg-color` | `hsl(0 0% 0% / 0.05)` | — |

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-carousel-caption-padding` | `0.75rem 1.5rem` | — |
| `--ep-carousel-dots-gap` | `1rem` | — |
| `--ep-carousel-dots-padding` | `1rem` | — |
| `--ep-carousel-gap` | `var(--space--5)` | — |
| `--ep-carousel-margin-inline-start` | `calc(-50vw + 50%)` | — |
| `--ep-carousel-nav-gap` | `var(--space--5)` | — |
| `--ep-carousel-track-padding-block` | `var(--space--5)` | — |

### Text

| Property | Default | State |
|---|---|---|
| `--ep-carousel-caption-text-color` | `hsl(var(--gray-440))` | — |

### Effect

| Property | Default | State |
|---|---|---|
| `--ep-carousel-dot-hover-scale` | `1.2` | hover |
| `--ep-carousel-dot-selected-scale` | `1.5` | selected |
| `--ep-carousel-image-focus-outline-color` | `var(--primary-color-base)` | focus |
| `--ep-carousel-image-focus-outline-width` | `0.3rem` | focus |
| `--ep-carousel-nav-button-hover-scale` | `1.1` | hover |
| `--ep-carousel-transition` | `var(--duration--default) ease` | — |

### Box

| Property | Default | State |
|---|---|---|
| `--ep-carousel-dot-size` | `1rem` | — |
| `--ep-carousel-height` | `75vh` | — |
| `--ep-carousel-image-max-width` | `90vw` | — |
| `--ep-carousel-spacer-min-width` | `var(--space--5)` | — |
| `--ep-carousel-width` | `100vw` | — |

## Component Code

```vue
<script setup lang="ts">
  import ArrowLeft01 from '@ericpitcock/epicenter-icons-vue/ArrowLeft01'
  import ArrowRight01 from '@ericpitcock/epicenter-icons-vue/ArrowRight01'
  import { computed, nextTick, onBeforeUnmount, onMounted, onUpdated, ref, useTemplateRef } from 'vue'

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

  interface Props {
    images?: CarouselImage[]
  }

  const { images = [] } = defineProps<Props>()

  const emit = defineEmits<{
    'image-click': [payload: { image: CarouselImage; index: number }]
    'slide-change': [payload: { image: CarouselImage; index: number }]
  }>()

  defineOptions({ name: 'EpCarousel' })

  const carouselContainer = useTemplateRef<HTMLDivElement>('carouselContainer')
  const carouselTrack = useTemplateRef<HTMLDivElement>('carouselTrack')
  const itemRefs = ref<(HTMLElement | null)[]>([])
  const currentIndex = ref(0)
  const shouldLoadImages = ref(false)
  const imagesSignature = computed(() => JSON.stringify(images))
  const previousImagesSignature = ref(imagesSignature.value)
  let scrollTimeout: ReturnType<typeof setTimeout> | null = null
  let containerObserver: IntersectionObserver | null = null
  let resizeObserver: ResizeObserver | null = null

  const onScroll = (): void => {
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

  onUpdated(() => {
    if (previousImagesSignature.value === imagesSignature.value) return

    previousImagesSignature.value = imagesSignature.value
    currentIndex.value = 0

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
      @scroll="onScroll"
    >
      <div class="carousel-spacer" />
      <button
        v-for="(image, index) in images"
        :key="image?.src ?? index"
        :ref="el => itemRefs[index] = (el as HTMLElement | null)"
        type="button"
        class="carousel-item"
        :class="{ 'is-active': currentIndex === index }"
        @click="scrollToImage(index)"
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
      </button>
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

```

## Styles (SCSS)

```scss
// @block carousel
// @root .ep-case-study-carousel
// The child classes here are not `ep-`-prefixed (.carousel-track, .carousel-dot,
// …). Renaming them would break both framework packages, so they are left alone;
// the properties below are the supported way to restyle them.
.ep-case-study-carousel {
  // Box
  --ep-carousel-height: 75vh;
  --ep-carousel-gap: var(--space--5);
  --ep-carousel-width: 100vw;
  // Full-bleed: pull the carousel out of its container to the viewport edges.
  --ep-carousel-margin-inline-start: calc(-50vw + 50%);
  --ep-carousel-track-padding-block: var(--space--5);
  --ep-carousel-spacer-min-width: var(--space--5);

  // Image
  --ep-carousel-border-radius: 1rem;
  --ep-carousel-image-max-width: 90vw;
  --ep-carousel-image-bg-color: hsl(0 0% 0% / 0.05);
  --ep-carousel-image-focus-outline-width: 0.3rem;
  --ep-carousel-image-focus-outline-color: var(--primary-color-base);

  // Caption
  --ep-carousel-caption-border-radius: var(--border-radius--default);
  --ep-carousel-caption-padding: 0.75rem 1.5rem;
  --ep-carousel-caption-bg-color: hsla(0, 0%, 100%, 0.5);
  --ep-carousel-caption-text-color: hsl(var(--gray-440));

  // Navigation
  --ep-carousel-nav-gap: var(--space--5);
  --ep-carousel-nav-button-hover-scale: 1.1;
  --ep-carousel-dots-padding: 1rem;
  --ep-carousel-dots-gap: 1rem;
  --ep-carousel-dot-size: 1rem;
  --ep-carousel-dot-bg-color: hsl(from var(--primary-color-base) h s l / 0.3);
  --ep-carousel-dot-hover-bg-color: hsl(from var(--primary-color-base) h s l / 0.6);
  --ep-carousel-dot-selected-bg-color: var(--primary-color-base);
  --ep-carousel-dot-hover-scale: 1.2;
  --ep-carousel-dot-selected-scale: 1.5;

  // Motion
  --ep-carousel-transition: var(--duration--default) ease;

  position: relative;
  width: var(--ep-carousel-width);
  margin-inline-start: var(--ep-carousel-margin-inline-start);
}

.carousel-track {
  display: flex;
  gap: var(--ep-carousel-gap);
  -ms-overflow-style: none;
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-x: contain;
  padding-block: var(--ep-carousel-track-padding-block);
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.carousel-spacer {
  min-width: var(--ep-carousel-spacer-min-width);
  flex: 0 0 50vw;
}

.carousel-image-container {
  position: relative;
  display: flex;
  overflow: hidden;
  max-width: var(--ep-carousel-image-max-width);
  max-height: var(--ep-carousel-height);
  border-radius: var(--ep-carousel-border-radius);
  background-color: var(--ep-carousel-image-bg-color);
  transition: box-shadow var(--ep-carousel-transition);
}

.carousel-item {
  flex: 0 0 auto;
  align-self: center;
  cursor: pointer;
  outline: none;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  transition: opacity var(--ep-carousel-transition), transform var(--ep-carousel-transition);

  &.is-active {
    cursor: default;
  }

  &:focus-visible {
    .carousel-image-container {
      box-shadow: 0 0 0 var(--ep-carousel-image-focus-outline-width) var(--ep-carousel-image-focus-outline-color);
    }
  }
}

.carousel-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--ep-carousel-transition);
}

.carousel-caption {
  position: absolute;
  padding: var(--ep-carousel-caption-padding);
  background-color: var(--ep-carousel-caption-bg-color);
  color: var(--ep-carousel-caption-text-color);
  text-align: center;
  text-wrap: balance;

  // Position variants
  &.caption-top-left {
    top: 0;
    left: 0;
    border-radius: 0 0 var(--ep-carousel-caption-border-radius) 0;
  }

  &.caption-top-center {
    top: 0;
    left: 50%;
    border-radius: 0 0 var(--ep-carousel-caption-border-radius) var(--ep-carousel-caption-border-radius);
    transform: translateX(-50%);
  }

  &.caption-top-right {
    top: 0;
    right: 0;
    border-radius: 0 0 0 var(--ep-carousel-caption-border-radius);
  }

  &.caption-left-center {
    top: 50%;
    left: 0;
    border-radius: 0 var(--ep-carousel-caption-border-radius) var(--ep-carousel-caption-border-radius) 0;
    transform: translateY(-50%);
  }

  &.caption-center {
    top: 50%;
    left: 50%;
    border-radius: var(--ep-carousel-caption-border-radius);
    transform: translate(-50%, -50%);
  }

  &.caption-right-center {
    top: 50%;
    right: 0;
    border-radius: var(--ep-carousel-caption-border-radius) 0 0 var(--ep-carousel-caption-border-radius);
    transform: translateY(-50%);
  }

  &.caption-bottom-left {
    bottom: 0;
    left: 0;
    border-radius: 0 var(--ep-carousel-caption-border-radius) 0 0;
  }

  &.caption-bottom-center {
    bottom: 0;
    left: 50%;
    border-radius: var(--ep-carousel-caption-border-radius) var(--ep-carousel-caption-border-radius) 0 0;
    transform: translateX(-50%);
  }

  &.caption-bottom-right {
    right: 0;
    bottom: 0;
    border-radius: var(--ep-carousel-caption-border-radius) 0 0 0;
  }
}

.carousel-navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--ep-carousel-nav-gap);
}

.carousel-nav-button {
  --ep-button-bg-color: var(--interface-overlay);
  --ep-button-border-color: var(--border-color--lighter);
  --ep-button-text-color: var(--text-color--loud);
  --ep-button-hover-bg-color: var(--interface-overlay--accent);
  --ep-button-hover-border-color: var(--ep-button-border-color);
  --ep-button-hover-text-color: var(--ep-button-text-color);
  --ep-button-disabled-bg-color: transparent;
  --ep-button-disabled-border-color: transparent;
  --ep-button-disabled-text-color: hsl(from var(--ep-button-text-color) h s l / 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: var(--border-radius--full);
  aspect-ratio: 1 / 1;
  transition: all var(--ep-carousel-transition);

  &:hover {
    transform: scale(var(--ep-carousel-nav-button-hover-scale));
  }
}

.carousel-dots {
  display: flex;
  min-height: calc(0.75rem + var(--ep-carousel-dots-padding) * 2);
  align-items: center;
  justify-content: center;
  padding: var(--ep-carousel-dots-padding);
  gap: var(--ep-carousel-dots-gap);
}

.carousel-dot {
  width: var(--ep-carousel-dot-size);
  height: var(--ep-carousel-dot-size);
  padding: 0;
  border: none;
  border-radius: var(--border-radius--full);
  background-color: var(--ep-carousel-dot-bg-color);
  cursor: pointer;
  transition: all var(--ep-carousel-transition);

  &:focus-visible {
    outline: var(--focus-outline);
    outline-offset: var(--focus-outline-offset);
  }

  &:not(.is-active):hover {
    background-color: var(--ep-carousel-dot-hover-bg-color);
    transform: scale(var(--ep-carousel-dot-hover-scale));
  }

  &.is-active {
    background-color: var(--ep-carousel-dot-selected-bg-color);
    cursor: default;
    transform: scale(var(--ep-carousel-dot-selected-scale));
  }
}

@media (max-width: 768px) {
  .carousel-spacer {
    flex: 0 0 calc(50vw - 40vw / 2 - var(--ep-carousel-gap) / 2);
  }
}
```