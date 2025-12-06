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
      :style="{ aspectRatio: aspectRatio, objectFit: objectFit }"
    >
    <div
      v-else
      class="ep-image__placeholder"
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
    aspectRatio: {
      type: String,
      default: '16 / 10',
    },
    objectFit: {
      type: String,
      default: 'contain',
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
    rounded: {
      type: Boolean,
      default: true,
    },
    rootMargin: {
      type: String,
      default: '0px 0px 100px 0px',
    },
  })

  const isLoaded = ref(false)
  const imageEl = ref(null)
  let observer = null

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

  const addLazyLoadListener = () => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage()
          observer.unobserve(entry.target)
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

  const loadImage = () => {
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