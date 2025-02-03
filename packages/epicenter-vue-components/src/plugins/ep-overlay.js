import { reactive, markRaw, readonly } from 'vue'

const overlayState = reactive([])

export function useOverlay() {
  function showOverlay({ type = 'toast', component, props = {}, options = {} }) {
    console.log('showOverlay', { type, component, props, options })
    const id = Symbol()
    overlayState.push({ id, type, component: markRaw(component), props, options })
    return id
  }

  function removeOverlay(id) {
    const index = overlayState.findIndex(o => o.id === id)
    if (index !== -1) overlayState.splice(index, 1)
  }

  return {
    showOverlay,
    removeOverlay,
    overlays: readonly(overlayState),
  }
}

export default {
  install(app) {
    const overlay = useOverlay()
    app.config.globalProperties.$epOverlay = overlay
    app.provide('epOverlay', overlay)
  }
}