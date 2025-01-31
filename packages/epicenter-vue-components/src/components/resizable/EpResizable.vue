<template>
  <div class="resizable-wrapper">
    <div
      class="resizable-pane"
      :style="{ flex: computedSize }"
    >
      <slot name="resizable"></slot>
      <div
        class="drag-handle"
        :class="dragEdge"
        @mousedown="handleDragStart"
        @touchstart="handleDragStart"
      ></div>
    </div>
    <div class="sibling-pane">
      <slot name="sibling"></slot>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'

  const props = defineProps({
    dragEdge: {
      type: String,
      required: true,
      validator: (v) => ['top', 'right', 'bottom', 'left'].includes(v)
    },
    initialSize: { type: String, default: '300px' }, // Default size
    minSize: { type: Number, default: 100 }, // Min size in px
    maxSize: { type: Number, default: 800 } // Max size in px
  })

  const emit = defineEmits(['resize'])
  const isDragging = ref(false)
  const startPos = ref(0)
  const currentSize = ref(parseInt(props.initialSize)) // Extract numeric size
  const unit = ref(props.initialSize.replace(/[0-9]/g, '').trim() || 'px') // Extract unit

  const computedSize = computed(() => `1 1 ${currentSize.value}${unit.value}`)

  const handleDragStart = (event) => {
    isDragging.value = true
    startPos.value = (props.dragEdge === 'right' || props.dragEdge === 'left')
      ? (event.touches ? event.touches[0].clientX : event.clientX)
      : (event.touches ? event.touches[0].clientY : event.clientY)

    document.addEventListener('mousemove', handleDragging)
    document.addEventListener('mouseup', handleDragEnd)
    document.addEventListener('touchmove', handleDragging)
    document.addEventListener('touchend', handleDragEnd)
  }

  const handleDragging = (event) => {
    if (!isDragging.value) return

    const currentPos = (props.dragEdge === 'right' || props.dragEdge === 'left')
      ? (event.touches ? event.touches[0].clientX : event.clientX)
      : (event.touches ? event.touches[0].clientY : event.clientY)

    let delta = currentPos - startPos.value
    if (props.dragEdge === 'left' || props.dragEdge === 'top') delta = -delta

    let newSize = currentSize.value + delta

    // Enforce min/max constraints
    newSize = Math.max(props.minSize, Math.min(props.maxSize, newSize))

    currentSize.value = newSize
    emit('resize', newSize + unit.value)

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

<style scoped>
  .resizable-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .resizable-pane {
    position: relative;
    display: flex;
    overflow: hidden;
  }

  .sibling-pane {
    flex: 1;
  }

  .drag-handle {
    position: absolute;
    background: rgba(0, 0, 0, 0.2);
    transition: background 0.2s;
  }

  .drag-handle:hover {
    background: rgba(0, 0, 0, 0.4);
  }

  .right,
  .left {
    width: 5px;
    top: 0;
    bottom: 0;
    cursor: ew-resize;
  }

  .right {
    right: 0;
  }

  .left {
    left: 0;
  }

  .top,
  .bottom {
    height: 5px;
    left: 0;
    right: 0;
    cursor: ns-resize;
  }

  .top {
    top: 0;
  }

  .bottom {
    bottom: 0;
  }
</style>