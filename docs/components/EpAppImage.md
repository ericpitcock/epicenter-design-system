# EpAppImage



## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `load` | - | - |
| `error` | - | - |

## Slots
| Name | Description |
|------|-------------|
| `error` | Rendered in place of the image when state === 'error'. |
| `overlay` | Rendered inside the clipped box, above the image. |


::: info
This component does not use props.
:::

## CSS Custom Properties

Set any of these with a selector that matches `.ep-app-image` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-app-image {
  --ep-app-image-aspect-ratio: /* … */;
}
```

### Box

| Property | Default | State |
|---|---|---|
| `--ep-app-image-aspect-ratio` | `auto` | — |

### Effect

| Property | Default | State |
|---|---|---|
| `--ep-app-image-border-corner-shape` | `round` | — |
| `--ep-app-image-duration` | `200ms` | — |
| `--ep-app-image-scale` | `1` | — |
| `--ep-app-image-transform-origin` | `center` | — |
| `--ep-app-image-translate-x` | `0` | — |
| `--ep-app-image-translate-y` | `0` | — |

### Border

| Property | Default | State |
|---|---|---|
| `--ep-app-image-border-radius` | `var(--border-radius--large)` | — |

### Layout

| Property | Default | State |
|---|---|---|
| `--ep-app-image-inset` | `0` | — |
| `--ep-app-image-object-fit` | `cover` | — |
| `--ep-app-image-object-position` | `center` | — |
| `--ep-app-image-overlay-z-index` | `var(--z-index--overlap)` | — |

## Component Code

```vue
<script setup lang="ts">
  import { computed, useTemplateRef, watchEffect } from 'vue'
  import type { ImgHTMLAttributes } from 'vue'

  import { useImageLoad } from '../../composables/useImageLoad'
  import type { CssLength, EpAppImageProps, ImageAnchor } from '../../types/image'

  const {
    src,
    srcset,
    sizes = 'auto',
    aspectRatio,
    width,
    height,
    loading = 'lazy',
    fetchPriority = 'auto',
    decoding = 'async',
    crossorigin,
    referrerpolicy,
    mode = 'fit',
    fit = 'cover',
    anchor = 'center',
    inset,
    offsetX = 0,
    offsetY = 0,
    origin,
    minZoom = 0.1,
    maxZoom = 10,
    radius,
    fadeDuration = 200,
    alt,
    decorative,
  } = defineProps<EpAppImageProps>()

  const emit = defineEmits<{ load: [], error: [event: Event] }>()

  defineSlots<{
    /** Rendered inside the clipped box, above the image. */
    overlay?: () => any
    /** Rendered in place of the image when state === 'error'. */
    error?: () => any
  }>()

  const zoom = defineModel<number>('zoom', { default: 1 })

  defineOptions({ name: 'EpAppImage', inheritAttrs: false })

  const imgEl = useTemplateRef<HTMLImageElement>('imgEl')

  const {
    state,
    reload,
    onLoad: settleLoad,
    onError: settleError,
  } = useImageLoad(() => src, () => imgEl.value)

  const onLoad = async (): Promise<void> => {
    const outcome = await settleLoad()
    if (outcome === 'loaded') {
      emit('load')
    } else if (outcome === 'error') {
      // decode() rejected — there is no native event to forward
      emit('error', new Event('error'))
    }
  }

  const onError = (event: Event): void => {
    settleError()
    emit('error', event)
  }

  const toCssLength = (value: CssLength): string =>
    typeof value === 'number' ? `${value}px` : value

  interface AnchorAxes {
    x: 'left' | 'center' | 'right'
    y: 'top' | 'center' | 'bottom'
  }

  const resolveAnchor = (value: ImageAnchor): AnchorAxes => {
    const parts = value.split(' ')
    return {
      x: parts.includes('left') ? 'left' : parts.includes('right') ? 'right' : 'center',
      y: parts.includes('top') ? 'top' : parts.includes('bottom') ? 'bottom' : 'center',
    }
  }

  // `free` mode: `anchor` desugars to which inset sides get 0. An explicit
  // `inset` takes over its axis and disables that axis' centering translate,
  // so `top: 50%` never fights a consumer-provided `bottom`.
  const freeLayout = computed(() => {
    const { x, y } = resolveAnchor(anchor)
    const ins = inset
    let top = 'auto'
    let right = 'auto'
    let bottom = 'auto'
    let left = 'auto'
    let centerX = false
    let centerY = false

    if (ins && (ins.left != null || ins.right != null)) {
      if (ins.left != null) left = toCssLength(ins.left)
      if (ins.right != null) right = toCssLength(ins.right)
    } else if (x === 'left') {
      left = '0'
    } else if (x === 'right') {
      right = '0'
    } else {
      left = '50%'
      centerX = true
    }

    if (ins && (ins.top != null || ins.bottom != null)) {
      if (ins.top != null) top = toCssLength(ins.top)
      if (ins.bottom != null) bottom = toCssLength(ins.bottom)
    } else if (y === 'top') {
      top = '0'
    } else if (y === 'bottom') {
      bottom = '0'
    } else {
      top = '50%'
      centerY = true
    }

    return { inset: `${top} ${right} ${bottom} ${left}`, centerX, centerY }
  })

  const translateX = computed(() => {
    const offset = toCssLength(offsetX)
    return mode === 'free' && freeLayout.value.centerX ? `calc(-50% + ${offset})` : offset
  })

  const translateY = computed(() => {
    const offset = toCssLength(offsetY)
    return mode === 'free' && freeLayout.value.centerY ? `calc(-50% + ${offset})` : offset
  })

  // Clamp on read only — the consumer's bound ref is never mutated.
  const clampedZoom = computed(() => Math.min(maxZoom, Math.max(minZoom, zoom.value)))

  const resolvedOrigin = computed(() => origin ?? anchor)

  const resolvedAlt = computed(() => (decorative ? '' : alt ?? ''))

  // Native lazy loading fetches only when the element's box intersects the
  // viewport. In `free` mode the img has zero area until it loads (no
  // intrinsic size yet), so without explicit width/height lazy can never
  // fire — fall back to eager instead of never loading.
  const resolvedLoading = computed(() => {
    if (loading === 'lazy' && mode === 'free' && (width == null || height == null)) {
      return 'eager'
    }
    return loading
  })

  // The prop is a plain string for ergonomics; the DOM attribute type is a
  // closed union — narrow at the binding site only.
  const resolvedReferrerPolicy = computed(
    () => referrerpolicy as ImgHTMLAttributes['referrerpolicy'],
  )

  const rootStyle = computed(() => ({
    '--ep-app-image-aspect-ratio': typeof aspectRatio === 'number' ? String(aspectRatio) : aspectRatio,
    '--ep-app-image-scale': String(clampedZoom.value),
    '--ep-app-image-translate-x': translateX.value,
    '--ep-app-image-translate-y': translateY.value,
    '--ep-app-image-transform-origin': resolvedOrigin.value,
    '--ep-app-image-duration': `${fadeDuration}ms`,
    ...(radius != null ? { '--ep-app-image-border-radius': toCssLength(radius) } : {}),
    ...(mode === 'fit'
      ? { '--ep-app-image-object-fit': fit, '--ep-app-image-object-position': anchor }
      : { '--ep-app-image-inset': freeLayout.value.inset }),
  }))

  if (import.meta.env.DEV) {
    watchEffect(() => {
      if (loading === 'lazy' && fetchPriority === 'high') {
        console.warn(
          '[EpAppImage] `loading="lazy"` contradicts `fetchPriority="high"` — a lazily '
          + 'loaded image cannot be fetched at high priority. This is the classic LCP '
          + 'regression; use `loading="eager"` for LCP-critical images.',
        )
      }
      if (loading === 'lazy' && mode === 'free' && (width == null || height == null)) {
        console.warn(
          '[EpAppImage] `loading="lazy"` cannot take effect in `free` mode without '
          + '`width` and `height` — the image box has zero area before load, so the '
          + 'browser never starts fetching. Loading eagerly instead; pass `width` and '
          + '`height` to keep lazy loading.',
        )
      }
    })
  }

  defineExpose({ reload, state })
</script>

<template>
  <div
    v-bind="$attrs"
    class="ep-app-image"
    :data-state="state"
    :style="rootStyle"
  >
    <!--
      v2 note: art-directed <picture> requires the <img> as a direct child, so
      it would drop in here without changing the container. Deliberately out
      of scope — format fallback belongs to CDN Accept negotiation.
    -->
    <img
      v-if="state !== 'error'"
      ref="imgEl"
      class="ep-app-image__img"
      :class="mode === 'free' ? 'ep-app-image__img--free' : 'ep-app-image__img--fit'"
      :src="src"
      :srcset="srcset"
      :sizes="srcset ? sizes : undefined"
      :alt.attr="resolvedAlt"
      :width="width"
      :height="height"
      :loading="resolvedLoading"
      :fetchpriority="fetchPriority"
      :decoding="decoding"
      :crossorigin="crossorigin"
      :referrerpolicy="resolvedReferrerPolicy"
      draggable="false"
      @load="onLoad"
      @error="onError"
    >
    <div
      v-else-if="$slots.error"
      class="ep-app-image__error"
    >
      <slot name="error" />
    </div>
    <div
      v-if="$slots.overlay"
      class="ep-app-image__overlay"
    >
      <slot name="overlay" />
    </div>
  </div>
</template>


```

## Styles (SCSS)

```scss
// Moved out of EpAppImage.vue and renamed from --image-* to --ep-app-image-*.
// The values marked "set by the component" are written by EpAppImage's computed
// style from its props — this is the case where a prop legitimately becomes a
// custom property, because the value cannot be enumerated as a modifier class.
// The rest are free to override in CSS.
.ep-app-image {
  --ep-app-image-aspect-ratio: auto;
  --ep-app-image-border-radius: var(--border-radius--large);

  // Progressive enhancement: ignored by browsers without corner-shape support.
  --ep-app-image-border-corner-shape: round;

  // Set by the component from props.
  --ep-app-image-transform-origin: center;
  --ep-app-image-translate-x: 0;
  --ep-app-image-translate-y: 0;
  --ep-app-image-scale: 1;
  --ep-app-image-duration: 200ms;
  --ep-app-image-object-fit: cover;
  --ep-app-image-object-position: center;
  --ep-app-image-inset: 0;
  --ep-app-image-overlay-z-index: var(--z-index--overlap);

  position: relative;
  // `clip`, never `hidden` — `hidden` creates a scroll container that a stray
  // focus/scrollIntoView can scroll, silently displacing the image, and it
  // breaks position: sticky on descendants.
  overflow: clip;
  border-radius: var(--ep-app-image-border-radius);
  aspect-ratio: var(--ep-app-image-aspect-ratio);
  corner-shape: var(--ep-app-image-border-corner-shape);
  // Load-bearing WebKit fix: rounded clips fail on composited (transformed)
  // children unless the container has its own stacking context. Do not replace
  // with translateZ(0)/will-change (forces a raster layer) or clip-path (clips
  // box-shadow and focus outlines).
  isolation: isolate;

  &[data-state='loaded'] .ep-app-image__img {
    opacity: 1;
  }
}

.ep-app-image__img {
  display: block;
  opacity: 0;
  scale: var(--ep-app-image-scale);
  transform-origin: var(--ep-app-image-transform-origin);
  transition: opacity var(--ep-app-image-duration) ease;
  translate: var(--ep-app-image-translate-x) var(--ep-app-image-translate-y);

  &--fit {
    width: 100%;
    height: 100%;
    object-fit: var(--ep-app-image-object-fit);
    object-position: var(--ep-app-image-object-position);
  }

  &--free {
    position: absolute;
    // Free mode sizes from the intrinsic or width/height attribute size —
    // defeat global `img { max-width: 100% }` resets.
    max-width: none;
    inset: var(--ep-app-image-inset);
  }
}

.ep-app-image__overlay {
  position: absolute;
  z-index: var(--ep-app-image-overlay-z-index);
  inset: 0;
  // Overlays never eat clicks by default; consumers re-enable per child.
  pointer-events: none;
}

.ep-app-image__error {
  position: absolute;
  inset: 0;
}

```