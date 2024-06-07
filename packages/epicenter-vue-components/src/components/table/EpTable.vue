<template>
  <div
    ref="tableContainer"
    class="ep-table-container"
    :style="containerStyles"
    @scroll="onScroll"
  >
    <table :class="['ep-table', classes]">
      <thead
        ref="tableHead"
        :class="{ fixed: fixedHeader }"
      >
        <tr>
          <template
            v-for="(column, columnIndex) in columns"
            :key="column.key"
          >
            <slot
              v-if="$slots.header && column.sortable"
              name="header"
              v-bind="{ column, cellWidths, columnIndex }"
            />
            <th
              v-else
              :style="cellWidths[columnIndex]"
            >
              <div>
                <span class="label">{{ column.label || '\u00A0' }}</span>
              </div>
            </th>
          </template>
        </tr>
      </thead>
      <tbody
        ref="tableBody"
        :class="{ fixed: fixedHeader }"
      >
        <tr
          v-for="row in data"
          :key="row.id"
          @click="onRowClick(row)"
        >
          <ep-table-cell
            v-for="(column, index) in columns"
            :key="column.key"
            :row="row"
            :column="column"
            :style="cellWidths[index]"
          />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  import { computed, ref, nextTick, onMounted, watch } from 'vue'
  import EpTableCell from './EpTableCell.vue'
  import useCalculatedHeight from '../../composables/useCalculatedHeight.js'

  defineOptions({
    name: 'EpTable'
  })

  const props = defineProps({
    columns: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    exclude: {
      type: Array,
      default: () => []
    },
    compact: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    selectable: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: false
    },
    stickyHeader: {
      type: Boolean,
      default: false
    },
    fixedHeader: {
      type: Boolean,
      default: false
    },
    calculateHeight: {
      type: Boolean,
      default: false
    },
    calculateHeightOffset: {
      type: Number,
      default: 0
    },
    styles: {
      type: Object,
      default: () => ({})
    },
  })

  const emit = defineEmits(['row-click'])

  const onRowClick = (row) => {
    if (props.selectable) emit('row-click', row)
  }

  const tableContainer = ref(null)
  const tableHead = ref(null)
  const tableBody = ref(null)

  const { containerHeight } = useCalculatedHeight(tableContainer, props.calculateHeightOffset)

  const containerStyles = computed(() => ({
    ...(props.calculateHeight && containerHeight.value),
    ...props.styles
  }))

  const classes = computed(() => {
    return {
      'ep-table--selectable': props.selectable,
      'ep-table--bordered': props.bordered,
      'ep-table--compact': props.compact,
      'ep-table--sticky': props.stickyHeader,
      'ep-table--striped': props.striped,
    }
  })

  const onScroll = () => {
    const computedStyle = window.getComputedStyle(tableContainer.value)
    const paddingLeft = parseFloat(computedStyle.paddingLeft)

    // Calculate the new left position considering the padding
    const tableContainerLeft = -tableContainer.value.scrollLeft + paddingLeft + tableContainer.value.getBoundingClientRect().left

    tableHead.value.style.left = `${tableContainerLeft}px`
  }

  const cellWidths = ref([])

  // const updateCellWidths = () => {
  //   if (!props.fixedHeader) return

  //   console.log('updateCellWidths')

  //   const tableHeadCells = tableHead.value.querySelectorAll('th')
  //   const tableBodyCells = tableBody.value.querySelectorAll('tr:first-child td')

  //   const newCellWidths = []

  //   tableHeadCells.forEach((cell, index) => {
  //     const width = cell.getBoundingClientRect().width
  //     newCellWidths[index] = { width: `${width}px` }
  //   })

  //   tableBodyCells.forEach((cell, index) => {
  //     const width = cell.getBoundingClientRect().width
  //     if (width > newCellWidths[index].width) {
  //       newCellWidths[index] = { width: `${width}px` }
  //     }
  //   })

  //   console.log('newCellWidths', newCellWidths)

  //   cellWidths.value = newCellWidths
  // }

  const updateCellWidths = () => {
    if (!props.fixedHeader) return

    console.log('updateCellWidths')

    const tableHeadCells = tableHead.value.querySelectorAll('th')
    const tableBodyCells = tableBody.value.querySelectorAll('tr:first-child td')

    const newCellWidths = []

    // Get the computed styles for white-space settings
    const getCellComputedStyle = (cell) => {
      return window.getComputedStyle(cell)
    }

    tableHeadCells.forEach((cell, index) => {
      const computedStyle = getCellComputedStyle(cell)
      const whiteSpace = computedStyle.whiteSpace

      // Temporarily set white-space to 'nowrap' to get the max width without wrapping
      cell.style.whiteSpace = 'nowrap'
      const width = cell.getBoundingClientRect().width
      // Revert back to original white-space setting
      cell.style.whiteSpace = whiteSpace

      newCellWidths[index] = { width: `${width}px` }
    })

    tableBodyCells.forEach((cell, index) => {
      const computedStyle = getCellComputedStyle(cell)
      const whiteSpace = computedStyle.whiteSpace

      // Temporarily set white-space to 'nowrap' to get the max width without wrapping
      cell.style.whiteSpace = 'nowrap'
      const width = cell.getBoundingClientRect().width
      // Revert back to original white-space setting
      cell.style.whiteSpace = whiteSpace

      if (width > parseFloat(newCellWidths[index].width)) {
        newCellWidths[index] = { width: `${width}px` }
      }
    })

    console.log('newCellWidths', newCellWidths)

    cellWidths.value = newCellWidths
  }

  watch(() => props.fixedHeader, () => {
    updateCellWidths()
  })

  onMounted(() => {
    nextTick(() => {
      updateCellWidths()
    })
    window.addEventListener('resize', () => {
      updateCellWidths()
    })
  })

  // do not change this. watch props.data only
  watch(() => props.data, () => {
    console.log('props.data changed, updating cell widths')
    nextTick(() => {
      console.log('watch:props.data:nextTick')
      updateCellWidths()
    })
  })

  // const observer = new MutationObserver(updateCellWidths)

  // onMounted(() => {
  //   observer.observe(tableBody.value, {
  //     childList: true,
  //     subtree: true,
  //   })
  // })

  // onBeforeUnmount(() => {
  //   observer.disconnect()
  // })
</script>
