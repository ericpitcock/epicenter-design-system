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

