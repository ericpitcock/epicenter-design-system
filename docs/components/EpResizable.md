# EpResizable



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `direction` | - | `ResizeDirection` | `-` |
| `initialSize` | - | `string` | `-` |
| `maxSize` | - | `number` | `-` |
| `minSize` | - | `number` | `-` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `resize` | - | - |

## Slots
| Name | Description |
|------|-------------|
| `resizable` | The content of the resizable pane. |
| `content` | The content of the fixed (non-resizable) pane. |

## Component Code

```vue
<script setup lang="ts">
  import { computed, ref, useTemplateRef } from 'vue'

  import type { ResizeDirection } from '../../types'

  interface Props {
    direction?: ResizeDirection
    initialSize?: string
    maxSize?: number
    minSize?: number
  }

  const {
    direction = 'row',
    initialSize = '300px',
    maxSize = 800,
    minSize = 200,
  } = defineProps<Props>()

  const emit = defineEmits<{
    resize: [size: number]
  }>()

  defineOptions({ name: 'EpResizable' })

  const resizablePane = useTemplateRef<HTMLDivElement>('resizablePane')
  const isDragging = ref(false)
  const hasBeenDragged = ref(false)
  const startPos = ref(0)
  const currentSize = ref<number | null>(null)

  type ResizeEdge = 'left' | 'right' | 'top' | 'bottom'
  const dragEdge = computed<ResizeEdge>(() => (direction === 'row' ? 'right' : 'bottom'))

  const computedSize = computed(() => hasBeenDragged.value ? `0 0 ${currentSize.value}px` : `0 0 ${initialSize}`)

  const onDragStart = (event: MouseEvent | TouchEvent): void => {
    if (!hasBeenDragged.value && resizablePane.value) {
      const { width, height } = resizablePane.value.getBoundingClientRect()
      currentSize.value = direction === 'row' ? width : height
    }

    hasBeenDragged.value = true
    isDragging.value = true

    const touch = 'touches' in event ? event.touches[0] : null
    startPos.value = direction === 'row'
      ? (touch ? touch.clientX : (event as MouseEvent).clientX)
      : (touch ? touch.clientY : (event as MouseEvent).clientY)

    document.addEventListener('mousemove', onDragging)
    document.addEventListener('mouseup', onDragEnd)
    document.addEventListener('touchmove', onDragging)
    document.addEventListener('touchend', onDragEnd)
  }

  const onDragging = (event: MouseEvent | TouchEvent): void => {
    if (!isDragging.value || currentSize.value === null) return

    const touch = 'touches' in event ? event.touches[0] : null
    const currentPos = direction === 'row'
      ? (touch ? touch.clientX : (event as MouseEvent).clientX)
      : (touch ? touch.clientY : (event as MouseEvent).clientY)

    let delta = currentPos - startPos.value
    if (dragEdge.value === 'left' || dragEdge.value === 'top') delta = -delta

    let newSize = currentSize.value + delta

    newSize = Math.max(minSize, Math.min(maxSize, newSize))

    currentSize.value = newSize
    emit('resize', newSize)

    startPos.value = currentPos
  }

  const onDragEnd = (): void => {
    isDragging.value = false
    document.removeEventListener('mousemove', onDragging)
    document.removeEventListener('mouseup', onDragEnd)
    document.removeEventListener('touchmove', onDragging)
    document.removeEventListener('touchend', onDragEnd)
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
        @mousedown="onDragStart"
        @touchstart="onDragStart"
      />
    </div>
    <div class="ep-resizable__content-pane">
      <!-- @slot content - The content of the fixed (non-resizable) pane. -->
      <slot name="content" />
    </div>
  </div>
</template>

```

## Styles (SCSS)

```scss
.ep-resizable {
  --ep-resizable-flex-direction: column;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: var(--ep-resizable-flex-direction);
  user-select: none;

  &--row {
    --ep-resizable-flex-direction: row;
  }
}

.ep-resizable__resizable-pane {
  position: relative;
  display: flex;
  overflow: hidden;
}

.ep-resizable__content-pane {
  flex: 1;
}

.ep-resizable__drag-handle {
  position: absolute;
  border-width: 0;
  border-style: solid;
  border-color: var(--border-color);
  background: var(--interface-foreground);

  &:hover {
    border-color: var(--primary-color-300);
    background: var(--primary-color-300);
  }

  &--right,
  &--left {
    top: 0;
    bottom: 0;
    width: 5px;
    border-right-width: 0.1rem;
    border-left-width: 0.1rem;
    cursor: ew-resize;
  }

  &--right {
    right: 0;
  }

  &--left {
    left: 0;
  }

  &--top,
  &--bottom {
    right: 0;
    left: 0;
    height: 5px;
    border-top-width: 0.1rem;
    border-bottom-width: 0.1rem;
    cursor: ns-resize;
  }

  &--top {
    top: 0;
  }

  &--bottom {
    bottom: 0;
  }
}
```