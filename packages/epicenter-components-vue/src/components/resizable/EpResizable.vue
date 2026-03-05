<script setup lang="ts">
  import { computed, ref } from 'vue'

  import type { ResizeDirection } from '../../types'

  interface EpResizableProps {
    direction?: ResizeDirection
    initialSize?: string
    maxSize?: number
    minSize?: number
  }

  const props = withDefaults(defineProps<EpResizableProps>(), {
    direction: 'row',
    initialSize: '300px',
    maxSize: 800,
    minSize: 200,
  })

  const emit = defineEmits<{
    resize: [size: number]
  }>()

  const resizablePane = ref<HTMLDivElement | null>(null)
  const isDragging = ref(false)
  const hasBeenDragged = ref(false)
  const startPos = ref(0)
  const currentSize = ref<number | null>(null)

  type ResizeEdge = 'left' | 'right' | 'top' | 'bottom'
  const dragEdge = computed<ResizeEdge>(() => (props.direction === 'row' ? 'right' : 'bottom'))

  const computedSize = computed(() => hasBeenDragged.value ? `0 0 ${currentSize.value}px` : `0 0 ${props.initialSize}`)

  const handleDragStart = (event: MouseEvent | TouchEvent): void => {
    if (!hasBeenDragged.value && resizablePane.value) {
      const { width, height } = resizablePane.value.getBoundingClientRect()
      currentSize.value = props.direction === 'row' ? width : height
    }

    hasBeenDragged.value = true
    isDragging.value = true

    const touch = 'touches' in event ? event.touches[0] : null
    startPos.value = props.direction === 'row'
      ? (touch ? touch.clientX : (event as MouseEvent).clientX)
      : (touch ? touch.clientY : (event as MouseEvent).clientY)

    document.addEventListener('mousemove', handleDragging)
    document.addEventListener('mouseup', handleDragEnd)
    document.addEventListener('touchmove', handleDragging)
    document.addEventListener('touchend', handleDragEnd)
  }

  const handleDragging = (event: MouseEvent | TouchEvent): void => {
    if (!isDragging.value || currentSize.value === null) return

    const touch = 'touches' in event ? event.touches[0] : null
    const currentPos = props.direction === 'row'
      ? (touch ? touch.clientX : (event as MouseEvent).clientX)
      : (touch ? touch.clientY : (event as MouseEvent).clientY)

    let delta = currentPos - startPos.value
    if (dragEdge.value === 'left' || dragEdge.value === 'top') delta = -delta

    let newSize = currentSize.value + delta

    newSize = Math.max(props.minSize, Math.min(props.maxSize, newSize))

    currentSize.value = newSize
    emit('resize', newSize)

    startPos.value = currentPos
  }

  const handleDragEnd = (): void => {
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
