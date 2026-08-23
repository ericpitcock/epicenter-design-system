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

## CSS Custom Properties

Set any of these with a selector that matches `.ep-image` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-image {
  --ep-image-border-radius: /* … */;
}
```

### Border

| Property | Default | State |
|---|---|---|
| `--ep-image-border-radius` | `var(--border-radius--large)` | — |

### Effect

| Property | Default | State |
|---|---|---|
| `--ep-image-fade-duration` | `0.4s` | — |
| `--ep-image-shimmer-angle` | `90deg` | — |
| `--ep-image-shimmer-duration` | `1.5s` | — |

### Surface

| Property | Default | State |
|---|---|---|
| `--ep-image-loading-bg-color` | `var(--interface-surface)` | loading |
| `--ep-image-shimmer-bg-color` | `light-dark(hsl(0 0% 0% / 0.06), hsl(0 0% 100% / 0.2))` | — |

### Box

| Property | Default | State |
|---|---|---|
| `--ep-image-max-width` | `100%` | — |

### Layout

| Property | Default | State |
|---|---|---|
| `--ep-image-object-fit` | `cover` | — |

## Component Code

```vue
<script setup lang="ts">
  import { computed, onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue'

  interface Props {
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
    placeholderColor = 'var(--interface-surface)',
    placeholderOpacity = 1,
    width = '100%',
  } = defineProps<Props>()

  defineOptions({ name: 'EpImage' })

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


```

## Styles (SCSS)

```scss
// Shared by EpImage and EpLazyImage, which both render `.ep-image`.
.ep-image {
  --ep-image-max-width: 100%;
  --ep-image-border-radius: var(--border-radius--large);
  --ep-image-object-fit: cover;
  --ep-image-loading-bg-color: var(--interface-surface);
  --ep-image-shimmer-bg-color: light-dark(hsl(0 0% 0% / 0.06), hsl(0 0% 100% / 0.2));
  --ep-image-shimmer-duration: 1.5s;
  --ep-image-shimmer-angle: 90deg;
  --ep-image-fade-duration: 0.4s;

  position: relative;
  display: block;
  overflow: hidden;
  max-width: var(--ep-image-max-width);

  &--rounded {
    border-radius: var(--ep-image-border-radius);
  }

  &--loading {
    background: var(--ep-image-loading-bg-color);

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      animation: ep-image-shimmer var(--ep-image-shimmer-duration) infinite;
      background: linear-gradient(var(--ep-image-shimmer-angle), transparent, var(--ep-image-shimmer-bg-color), transparent);
      content: '';
    }
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: var(--ep-image-object-fit);
  }
}

.ep-image__img {
  display: block;
  width: 100%;
  height: auto;
  animation: ep-image-fade-in var(--ep-image-fade-duration) ease-in-out forwards;
  opacity: 0;
  transition: opacity var(--ep-image-fade-duration) ease-in-out;
}

.ep-image__placeholder,
.image__placeholder {
  position: absolute;
  top: 0;
  left: 0;
}

@keyframes ep-image-fade-in {
  to {
    opacity: 1;
  }
}

@keyframes ep-image-shimmer {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

```