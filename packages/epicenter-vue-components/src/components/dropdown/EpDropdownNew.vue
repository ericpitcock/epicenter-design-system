<template>
  <div
    ref="rootRef"
    class="ep-dropdown"
    @mouseleave="onMouseleave"
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
      :style="finalFloatingStyles"
      role="menu"
      @click="onContentClick"
      @focusout="onFocusout"
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
  import {
    autoUpdate,
    flip as flipMiddleware,
    offset as offsetMiddleware,
    shift as shiftMiddleware,
    useFloating
  } from '@floating-ui/vue'
  import { onClickOutside } from '@vueuse/core'
  import { computed, nextTick, ref, watch } from 'vue'

  defineOptions({ name: 'EpDropdown' })

  const props = defineProps({
    open: {
      type: Boolean,
      required: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: [String, Array],
      default: 'click'
    },
    placement: {
      type: String,
      default: 'bottom-start'
    },
    offset: {
      type: Number,
      default: 4
    },
    flip: {
      type: Boolean,
      default: true
    },
    shift: {
      type: Boolean,
      default: true
    },
    matchTriggerWidth: {
      type: Boolean,
      default: false
    },
    closeOnContentClick: {
      type: Boolean,
      default: true
    },
    unmountOnClose: {
      type: Boolean,
      default: true
    },
    id: {
      type: String,
      default: undefined
    }
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

  let escapeListenerAttached = false
  let previousFocusedElement = null

  const normalizedTriggers = computed(() => {
    const value = Array.isArray(props.trigger) ? props.trigger : [props.trigger]
    return value
  })

  const containerClasses = computed(() => ['ep-dropdown__container'])

  // Setup floating-ui
  const middleware = computed(() => {
    const list = [offsetMiddleware(props.offset)]
    if (props.flip) list.push(flipMiddleware())
    if (props.shift) list.push(shiftMiddleware())
    return list
  })

  const { floatingStyles: computedFloatingStyles } = useFloating(triggerRef, containerRef, {
    placement: computed(() => props.placement),
    middleware,
    whileElementsMounted: autoUpdate
  })

  // Extend floating styles with width matching if needed
  const finalFloatingStyles = computed(() => {
    const styles = { ...computedFloatingStyles.value }
    if (props.matchTriggerWidth && triggerRef.value) {
      styles.width = `${triggerRef.value.offsetWidth}px`
    }
    return styles
  })

  const triggerAttrs = computed(() => ({
    id: triggerId,
    'aria-haspopup': 'menu',
    'aria-expanded': String(isOpen.value),
    'aria-controls': contentId,
    disabled: props.disabled || undefined
  }))

  const onTriggerClick = event => {
    if (props.disabled) return
    if (!normalizedTriggers.value.includes('click')) return
    event.stopPropagation()
    toggleDropdown()
  }

  const onTriggerContextmenu = event => {
    if (props.disabled) return
    if (!normalizedTriggers.value.includes('contextmenu')) return
    event.preventDefault()
    openDropdown()
  }

  const onTriggerMouseenter = () => {
    if (props.disabled) return
    if (!normalizedTriggers.value.includes('hover')) return
    openDropdown()
  }

  const onTriggerMouseleave = () => {
    if (props.disabled) return
    if (!normalizedTriggers.value.includes('hover')) return
    closeDropdown()
  }

  const onTriggerKeydown = event => {
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
    click: onTriggerClick,
    contextmenu: onTriggerContextmenu,
    mouseenter: onTriggerMouseenter,
    mouseleave: onTriggerMouseleave,
    keydown: onTriggerKeydown
  }))

  const onMouseleave = () => {
    if (props.disabled) return
    if (!normalizedTriggers.value.includes('hover')) return
    closeDropdown()
  }

  const onContentClick = event => {
    if (!props.closeOnContentClick) return
    const interactiveElement = event.target
    if (interactiveElement) closeDropdown()
  }

  const onFocusout = event => {
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
    moveFocusIntoContent()
    if (!escapeListenerAttached) {
      window.addEventListener('keydown', onWindowKeydown, true)
      escapeListenerAttached = true
    }
    previousFocusedElement = document.activeElement
  }

  const closeDropdown = () => {
    if (!isOpen.value) return
    setOpenState(false)
    restoreFocusToTrigger()
    if (escapeListenerAttached) {
      window.removeEventListener('keydown', onWindowKeydown, true)
      escapeListenerAttached = false
    }
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

  const onWindowKeydown = event => {
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

  defineExpose({
    open: openDropdown,
    close: closeDropdown,
    toggle: toggleDropdown
  })
</script>
