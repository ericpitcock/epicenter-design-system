# EpResizable



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `direction` | The direction of the resizable layout. | `string` | `'row'` |
| `initialSize` | The initial size of the resizable pane (e.g., '300px' or '30%'). | `string` | `'300px'` |
| `minSize` | The minimum size in pixels for the resizable pane. | `number` | `200` |
| `maxSize` | The maximum size in pixels for the resizable pane. | `number` | `800` |

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
<template>
  <div :class="['ep-resizable-wrapper', `ep-resizable-wrapper--${direction}`]">
    <div
      ref="resizablePane"
      class="resizable-pane"
      :style="{ flex: computedSize }"
    >
      <!-- @slot resizable - The content of the resizable pane. -->
      <slot name="resizable" />
      <div
        :class="['drag-handle', dragEdge]"
        @mousedown="handleDragStart"
        @touchstart="handleDragStart"
      />
    </div>
    <div class="content-pane">
      <!-- @slot content - The content of the fixed (non-resizable) pane. -->
      <slot name="content" />
    </div>
  </div>
</template>

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

  const resizablePane = ref(null)
  const emit = defineEmits(['resize'])
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

<style lang="scss" scoped>
  .ep-resizable-wrapper {
    --ep-resizable-flex-direction: column;
    display: flex;
    flex-direction: var(--ep-resizable-flex-direction);
    width: 100%;
    height: 100%;
    user-select: none;

    &--row {
      --ep-resizable-flex-direction: row;
    }
  }

  .resizable-pane {
    position: relative;
    display: flex;
    overflow: hidden;
  }

  .content-pane {
    flex: 1;
  }

  .drag-handle {
    position: absolute;
    background: var(--interface-foreground);
    border-width: 0;
    border-style: solid;
    border-color: var(--border-color);
  }

  .drag-handle:hover {
    background: var(--primary-color-300);
    border-color: var(--primary-color-300);
  }

  .right,
  .left {
    width: 5px;
    top: 0;
    bottom: 0;
    border-right-width: 0.1rem;
    border-left-width: 0.1rem;
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
    border-top-width: 0.1rem;
    border-bottom-width: 0.1rem;
    cursor: ns-resize;
  }

  .top {
    top: 0;
  }

  .bottom {
    bottom: 0;
  }
</style>
```