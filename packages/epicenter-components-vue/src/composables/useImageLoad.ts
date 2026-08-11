import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

import type { ImageState } from '../types/image'

export const useImageLoad = (
  src: () => string,
  img: () => HTMLImageElement | null,
) => {
  const state = ref<ImageState>('loading')

  // Token for the current load attempt. A src change, reload(), or unmount
  // invalidates in-flight decode() settlements: mutating src rejects a pending
  // decode() with EncodingError, and without this guard that stale rejection
  // would clobber the new attempt's 'loading' state with 'error'.
  let epoch = 0

  const onLoad = async (): Promise<'loaded' | 'error' | 'stale'> => {
    const el = img()
    if (!el) return 'stale'
    const attempt = epoch
    try {
      // Reveal only fully painted images. decode() rejects on decode failure
      // and on detached elements — both must route to 'error', never throw.
      await el.decode()
      if (attempt !== epoch) return 'stale'
      state.value = 'loaded'
      return 'loaded'
    } catch {
      if (attempt !== epoch) return 'stale'
      state.value = 'error'
      return 'error'
    }
  }

  const onError = (): void => {
    state.value = 'error'
  }

  const reload = async (): Promise<void> => {
    epoch += 1
    state.value = 'loading'
    await nextTick()
    const el = img()
    if (!el) return
    const target = src()
    // Re-assigning an identical src is a no-op for the element — clear it
    // first so the load is genuinely re-attempted.
    if (el.getAttribute('src') === target) {
      el.removeAttribute('src')
    }
    el.src = target
  }

  // External input driving internal state — the sanctioned use of watch.
  watch(src, () => {
    epoch += 1
    state.value = 'loading'
  })

  onMounted(() => {
    const el = img()
    // A cached image is already complete before `load` can fire. Resolving
    // synchronously here (pre-paint) mounts it visible with no fade flash.
    if (el && el.complete && el.naturalWidth > 0) {
      state.value = 'loaded'
    }
  })

  onBeforeUnmount(() => {
    epoch += 1
  })

  return { state, reload, onLoad, onError }
}
