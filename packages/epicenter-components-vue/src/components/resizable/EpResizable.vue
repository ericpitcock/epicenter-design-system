<script setup>
  import { computed, ref } from 'vue'

  const props = defineProps({
    /**
     * The direction of the resizable layout.
     * @values column, row
     */
    direction: {
      type: String,
      default: 'row',
      validator: (value) => ['column', 'row'].includes(value)
    },
    /**
     * The initial size of the resizable pane (e.g., '300px' or '30%').
     */
    initialSize: {
      type: String,
      default: '300px'
    },
    /**
     * The minimum size in pixels for the resizable pane.
     */
    minSize: {
      type: Number,
      default: 200
    },
    /**
     * The maximum size in pixels for the resizable pane.
     */
    maxSize: {
      type: Number,
      default: 800
    }
  })

  const emit = defineEmits(['resize'])
  const resizablePane = ref(null)
  const isDragging = ref(false)
  const hasBeenDragged = ref(false)
  const startPos = ref(0)
  const currentSize = ref(null)

  // Dynamically determine the correct drag edge
  const dragEdge = computed(() => (props.direction === 'row' ? 'right' : 'bottom'))

  // Maintain initialSize until first drag, then convert to px
  const computedSize = computed(() => hasBeenDragged.value ? `0 0 ${currentSize.value}px` : `0 0 ${props.initialSize}`)

  const handleDragStart = (event) => {
    if (!hasBeenDragged.value) {
      // Convert initialSize to px on first drag
      const { width, height } = resizablePane.value.getBoundingClientRect()
      currentSize.value = props.direction === 'row' ? width : height
    }

    hasBeenDragged.value = true
    isDragging.value = true
    startPos.value = props.direction === 'row'
      ? (event.touches ? event.touches[0].clientX : event.clientX)
      : (event.touches ? event.touches[0].clientY : event.clientY)

    document.addEventListener('mousemove', handleDragging)
    document.addEventListener('mouseup', handleDragEnd)
    document.addEventListener('touchmove', handleDragging)
    document.addEventListener('touchend', handleDragEnd)
  }

  const handleDragging = (event) => {
    if (!isDragging.value) return

    const currentPos = props.direction === 'row'
      ? (event.touches ? event.touches[0].clientX : event.clientX)
      : (event.touches ? event.touches[0].clientY : event.clientY)

    let delta = currentPos - startPos.value
    if (dragEdge.value === 'left' || dragEdge.value === 'top') delta = -delta

    let newSize = currentSize.value + delta

    // Enforce min/max constraints
    newSize = Math.max(props.minSize, Math.min(props.maxSize, newSize))

    currentSize.value = newSize
    emit('resize', newSize)

    startPos.value = currentPos
  }

  const handleDragEnd = () => {
    isDragging.value = false
    document.removeEventListener('mousemove', handleDragging)
    document.removeEventListener('mouseup', handleDragEnd)
    document.removeEventListener('touchmove', handleDragging)
    document.removeEventListener('touchend', handleDragEnd)
  }
</script>

<template>
  <div :class="['ep-resizable', `ep-resizable--${direction}`]">
    <div
      ref="resizablePane"
      class="ep-resizable__resizable-pane"
      :style="{ flex: computedSize }"
    >
      <!-- @slot resizable - The content of the resizable pane. -->
      <slot name="resizable" />
      <div
        :class="['ep-resizable__drag-handle', `ep-resizable__drag-handle--${dragEdge}`]"
        @mousedown="handleDragStart"
        @touchstart="handleDragStart"
      />
    </div>
    <div class="ep-resizable__content-pane">
      <!-- @slot content - The content of the fixed (non-resizable) pane. -->
      <slot name="content" />
    </div>
  </div>
</template>
