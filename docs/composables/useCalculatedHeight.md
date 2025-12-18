# useCalculatedHeight

`useCalculatedHeight` is a composable for dynamically calculating and maintaining the height of an element based on its position in the viewport. It's particularly useful for creating elements that should fill the remaining vertical space.

## Features

- **Dynamic height calculation**: Automatically calculates height based on element position
- **Responsive**: Updates height on window resize
- **Offset support**: Apply custom offsets for padding, margins, or other UI elements
- **Automatic cleanup**: Removes event listeners on unmount

## Usage

### Basic Height Calculation

```vue
<template>
  <div ref="containerRef" :style="{ height: dynamicHeight + 'px' }">
    Content that fills remaining space
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useCalculatedHeight from '@/composables/useCalculatedHeight.js'

const containerRef = ref(null)

// Calculate height from element's top to bottom of viewport
const { dynamicHeight } = useCalculatedHeight(containerRef)
</script>
```

### With Offset

Apply an offset to account for footers, padding, or other elements:

```vue
<template>
  <div ref="contentRef" :style="{ height: dynamicHeight + 'px', overflow: 'auto' }">
    <div v-for="item in items" :key="item.id">
      {{ item.name }}
    </div>
  </div>
  <footer style="height: 60px">
    Footer content
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import useCalculatedHeight from '@/composables/useCalculatedHeight.js'

const contentRef = ref(null)

// Reserve 60px for footer
const { dynamicHeight } = useCalculatedHeight(contentRef, 60)
</script>
```

### Full Page Content Area

Create a content area that fills the space below a header:

```vue
<template>
  <div class="page-layout">
    <header style="height: 80px">
      <h1>My Application</h1>
    </header>
    
    <main ref="mainRef" :style="{ height: dynamicHeight + 'px', overflow: 'auto' }">
      <div class="content">
        <!-- Scrollable content -->
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useCalculatedHeight from '@/composables/useCalculatedHeight.js'

const mainRef = ref(null)

// Main area will fill from its top position to bottom of viewport
const { dynamicHeight } = useCalculatedHeight(mainRef)
</script>
```

### Table with Fixed Height

```vue
<template>
  <div class="table-container">
    <div class="table-header">
      <h2>Data Table</h2>
      <ep-button>Add Item</ep-button>
    </div>
    
    <div 
      ref="tableWrapperRef" 
      :style="{ height: dynamicHeight + 'px' }"
      class="table-wrapper"
    >
      <ep-table :data="tableData" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useCalculatedHeight from '@/composables/useCalculatedHeight.js'
import { EpButton, EpTable } from '@epicenter/vue-components'

const tableWrapperRef = ref(null)
const tableData = ref([/* data */])

// Account for padding and action buttons (20px)
const { dynamicHeight } = useCalculatedHeight(tableWrapperRef, 20)
</script>

<style scoped>
.table-wrapper {
  overflow: auto;
}
</style>
```

### Split View Layout

```vue
<template>
  <div class="split-view">
    <aside class="sidebar" style="width: 250px">
      Sidebar content
    </aside>
    
    <div ref="contentAreaRef" class="content-area" :style="{ height: dynamicHeight + 'px' }">
      <div class="scrollable-content">
        Main content area
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useCalculatedHeight from '@/composables/useCalculatedHeight.js'

const contentAreaRef = ref(null)

const { dynamicHeight } = useCalculatedHeight(contentAreaRef)
</script>

<style scoped>
.split-view {
  display: flex;
}

.content-area {
  flex: 1;
  overflow: hidden;
}

.scrollable-content {
  height: 100%;
  overflow: auto;
}
</style>
```

## API

### Parameters

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `element` | `Ref<HTMLElement>` | Required | Template ref to the element whose height should be calculated |
| `calculateHeightOffset` | `number` | `0` | Pixel offset to subtract from calculated height (for padding, footers, etc.) |

### Returns

| Name | Type | Description |
|------|------|-------------|
| `dynamicHeight` | `Ref<number>` | Reactive number representing the calculated height in pixels |

## How It Works

The composable calculates height using this formula:

```
dynamicHeight = window.innerHeight - element.top - offset
```

Where:
- `window.innerHeight` is the viewport height
- `element.top` is the distance from the top of the viewport to the top of the element
- `offset` is the custom offset you provide

The calculation runs:
- On component mount
- Whenever the window is resized
- Event listeners are automatically cleaned up on unmount

## Common Use Cases

### Dashboard Widgets

```vue
<template>
  <div class="dashboard-widget">
    <div class="widget-header">Widget Title</div>
    <div ref="widgetBodyRef" :style="{ height: dynamicHeight + 'px', overflow: 'auto' }">
      <!-- Widget content -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useCalculatedHeight from '@/composables/useCalculatedHeight.js'

const widgetBodyRef = ref(null)
const { dynamicHeight } = useCalculatedHeight(widgetBodyRef, 10)
</script>
```

### Modal Content Areas

```vue
<template>
  <ep-overlay v-model="showModal">
    <div class="modal">
      <div class="modal-header">
        <h2>Modal Title</h2>
      </div>
      <div ref="modalBodyRef" :style="{ height: dynamicHeight + 'px', overflow: 'auto' }">
        <!-- Scrollable modal content -->
      </div>
      <div class="modal-footer">
        <ep-button>Close</ep-button>
      </div>
    </div>
  </ep-overlay>
</template>

<script setup>
import { ref } from 'vue'
import useCalculatedHeight from '@/composables/useCalculatedHeight.js'
import { EpButton, EpOverlay } from '@epicenter/vue-components'

const showModal = ref(false)
const modalBodyRef = ref(null)

// Reserve space for footer (80px)
const { dynamicHeight } = useCalculatedHeight(modalBodyRef, 80)
</script>
```

## Tips

- Always use with `overflow: auto` or `overflow-y: auto` to enable scrolling
- Remember to account for padding, margins, and other spacing in your offset
- The element must be rendered in the DOM before height can be calculated
- Consider using with `v-show` rather than `v-if` to ensure element exists for calculation
- Works great with virtualized lists or data tables that need fixed heights
