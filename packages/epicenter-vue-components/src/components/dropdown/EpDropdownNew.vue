<template>
  <div
    ref="rootRef"
    class="ep-dropdown"
    @mouseleave="handleMouseleave"
  >
    <div ref="triggerRef">
      <slot
        name="trigger"
        :is-open="isOpen"
        :open="openDropdown"
        :close="closeDropdown"
        :toggle="toggleDropdown"
        :attrs="triggerAttrs"
        :on="triggerListeners"
      >
        <button
          type="button"
          class="ep-dropdown__fallback-trigger"
          v-bind="triggerAttrs"
          v-on="triggerListeners"
        >
          Default dropdown
        </button>
      </slot>
    </div>

    <div
      v-if="isOpen ? true : !unmountOnClose"
      v-show="isOpen"
      :id="contentId"
      ref="containerRef"
      :class="containerClasses"
      :style="floatingStyles"
      role="menu"
      @click="handleContentClick"
      @focusout="handleFocusout"
    >
      <div class="ep-dropdown__content">
        <slot
          name="header"
          :close="closeDropdown"
        />
        <slot
          name="content"
          :close="closeDropdown"
        />
        <slot
          name="footer"
          :close="closeDropdown"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { autoUpdate, computePosition, flip as floatingFlip, offset as floatingOffset, shift as floatingShift } from '@floating-ui/dom'
  import { onClickOutside } from '@vueuse/core'
  import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'

  defineOptions({ name: 'EpDropdown' })

  const props = defineProps({
    open: { type: Boolean, required: false },
    disabled: { type: Boolean, default: false },
    trigger: { type: [String, Array], default: 'click' },
    placement: { type: String, default: 'bottom-start' },
    offset: { type: Number, default: 4 },
    flip: { type: Boolean, default: true },
    shift: { type: Boolean, default: true },
    matchTriggerWidth: { type: Boolean, default: false },
    closeOnContentClick: { type: Boolean, default: true },
    unmountOnClose: { type: Boolean, default: true },
    id: { type: String, default: undefined }
  })

  const emit = defineEmits(['update:open', 'open', 'close'])

  const internalOpen = ref(false)
  const isControlled = computed(() => props.open !== undefined)
  const isOpen = computed(() => (isControlled.value ? props.open : internalOpen.value))

  const rootRef = ref(null)
  const triggerRef = ref(null)
  const containerRef = ref(null)

  const uniqueId = props.id || Math.random().toString(36).slice(2)
  const triggerId = `ep-dropdown-trigger-${uniqueId}`
  const contentId = `ep-dropdown-panel-${uniqueId}`

  const floatingStyles = ref({})
  let autoUpdateCleanup = null
  let escapeListenerAttached = false
  let previousFocusedElement = null

  const normalizedTriggers = computed(() => {
    const value = Array.isArray(props.trigger) ? props.trigger : [props.trigger]
    return value
  })

  const triggerAttrs = computed(() => ({
    id: triggerId,
    'aria-haspopup': 'menu',
    'aria-expanded': String(isOpen.value),
    'aria-controls': contentId,
    disabled: props.disabled || undefined
  }))

  const handleTriggerClick = event => {
    if (props.disabled) return
    if (!normalizedTriggers.value.includes('click')) return
    event.stopPropagation()
    toggleDropdown()
  }

  const handleTriggerContextmenu = event => {
    if (props.disabled) return
    if (!normalizedTriggers.value.includes('contextmenu')) return
    event.preventDefault()
    openDropdown()
  }

  const handleTriggerMouseenter = () => {
    if (props.disabled) return
    if (!normalizedTriggers.value.includes('hover')) return
    openDropdown()
  }

  const handleTriggerMouseleave = () => {
    if (props.disabled) return
    if (!normalizedTriggers.value.includes('hover')) return
    closeDropdown()
  }

  const handleTriggerKeydown = event => {
    if (props.disabled) return
    const key = event.key
    if (key === 'Enter' || key === ' ') {
      event.preventDefault()
      toggleDropdown()
    } else if (key === 'ArrowDown') {
      event.preventDefault()
      openDropdown()
    } else if (key === 'Escape') {
      event.preventDefault()
      closeDropdown()
    }
  }

  const triggerListeners = computed(() => ({
    click: handleTriggerClick,
    contextmenu: handleTriggerContextmenu,
    mouseenter: handleTriggerMouseenter,
    mouseleave: handleTriggerMouseleave,
    keydown: handleTriggerKeydown
  }))

  const handleMouseleave = () => {
    if (props.disabled) return
    if (!normalizedTriggers.value.includes('hover')) return
    closeDropdown()
  }

  const handleContentClick = event => {
    if (!props.closeOnContentClick) return
    const interactiveElement = event.target
    if (interactiveElement) closeDropdown()
  }

  const handleFocusout = event => {
    const nextTarget = event.relatedTarget
    const rootElement = rootRef.value
    if (!rootElement) return
    if (nextTarget && rootElement.contains(nextTarget)) return
    closeDropdown()
  }

  const openDropdown = async () => {
    if (props.disabled) return
    if (isOpen.value) return
    setOpenState(true)
    await nextTick()
    startAutoPositioning()
    moveFocusIntoContent()
  }

  const closeDropdown = () => {
    if (!isOpen.value) return
    setOpenState(false)
    stopAutoPositioning()
    restoreFocusToTrigger()
  }

  const toggleDropdown = () => {
    if (isOpen.value) closeDropdown()
    else openDropdown()
  }

  const setOpenState = nextState => {
    if (isControlled.value) {
      emit('update:open', nextState)
    } else {
      internalOpen.value = nextState
    }
    if (nextState) emit('open')
    else emit('close')
  }

  const startAutoPositioning = () => {
    const referenceElement = triggerRef.value
    const floatingElement = containerRef.value
    if (!referenceElement || !floatingElement) return
    const middlewareList = [floatingOffset(props.offset)]
    if (props.flip) middlewareList.push(floatingFlip())
    if (props.shift) middlewareList.push(floatingShift())
    const compute = () => {
      computePosition(referenceElement, floatingElement, {
        placement: props.placement,
        middleware: middlewareList
      }).then(({ x, y, strategy }) => {
        const widthStyle = props.matchTriggerWidth ? `${referenceElement.offsetWidth}px` : undefined
        floatingStyles.value = {
          position: strategy,
          left: `${x}px`,
          top: `${y}px`,
          minWidth: widthStyle
        }
      })
    }
    compute()
    autoUpdateCleanup = autoUpdate(referenceElement, floatingElement, compute)
    if (!escapeListenerAttached) {
      window.addEventListener('keydown', handleWindowKeydown, true)
      escapeListenerAttached = true
    }
    previousFocusedElement = document.activeElement
  }

  const stopAutoPositioning = () => {
    if (autoUpdateCleanup) {
      autoUpdateCleanup()
      autoUpdateCleanup = null
    }
    if (escapeListenerAttached) {
      window.removeEventListener('keydown', handleWindowKeydown, true)
      escapeListenerAttached = false
    }
  }

  const handleWindowKeydown = event => {
    if (event.key === 'Escape') {
      event.preventDefault()
      closeDropdown()
    }
  }

  const moveFocusIntoContent = () => {
    const floatingElement = containerRef.value
    if (!floatingElement) return
    const focusableSelectors = [
      'button',
      '[href]',
      'input',
      'select',
      'textarea',
      '[tabindex]:not([tabindex="-1"])'
    ]
    const firstFocusable = floatingElement.querySelector(focusableSelectors.join(','))
    if (firstFocusable) firstFocusable.focus()
  }

  const restoreFocusToTrigger = () => {
    const element = previousFocusedElement
    if (element && typeof element.focus === 'function') element.focus()
    previousFocusedElement = null
  }

  onClickOutside(rootRef, () => {
    closeDropdown()
  })

  watch(
    () => props.disabled,
    disabledNow => {
      if (disabledNow) closeDropdown()
    }
  )

  watch(
    () => props.placement,
    () => {
      if (isOpen.value) startAutoPositioning()
    }
  )

  onBeforeUnmount(() => {
    stopAutoPositioning()
  })

  defineExpose({
    open: openDropdown,
    close: closeDropdown,
    toggle: toggleDropdown
  })
</script>

<style scoped>
  .ep-dropdown {
    --ep-dropdown-padding-top: 4px;
    position: relative;
    width: fit-content;
  }

  .ep-dropdown__fallback-trigger {
    font: inherit;
    padding: 8px 12px;
    border: 1px solid var(--border-color, #ddd);
    background: var(--background-color, #fff);
    border-radius: 6px;
    cursor: pointer;
  }

  .ep-dropdown__container {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 100%;
    padding-top: var(--ep-dropdown-padding-top);
    box-shadow: var(--box-shadow--dropdown);
    z-index: var(--z-index--dropdown);
  }

  .ep-dropdown__content {
    position: relative;
    z-index: var(--z-index--dropdown);
  }
</style>