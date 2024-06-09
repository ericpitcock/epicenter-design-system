<template>
  <div
    ref="tableContainer"
    class="ep-table-container"
    :style="containerStyles"
    @scroll="updateLeftPosition"
  >
    <table :class="['ep-table', classes]">
      <thead
        ref="tableHead"
        :class="{ fixed: fixedHeader }"
      >
        <tr>
          <template
            v-for="(column, columnIndex) in visibleColumns"
            :key="`head-${column.key}`"
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
          <template
            v-for="(column, columnIndex) in visibleColumns"
            :key="`body-${column.key}`"
          >
            <ep-table-cell
              :row="row"
              :column="column"
              :style="cellWidths[columnIndex]"
            />
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  import {
    computed,
    ref,
    nextTick,
    onBeforeUnmount,
    onMounted,
    watch
  } from 'vue'
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
    hiddenColumns: {
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

  const updateLeftPosition = () => {
    const computedStyle = window.getComputedStyle(tableContainer.value)
    const paddingLeft = parseFloat(computedStyle.paddingLeft)

    // Calculate the new left position considering the padding
    const tableContainerLeft = -tableContainer.value.scrollLeft + paddingLeft + tableContainer.value.getBoundingClientRect().left

    tableHead.value.style.left = `${tableContainerLeft}px`
  }

  const visibleColumns = computed(() => {
    return props.columns.filter(column => !props.hiddenColumns.includes(column.key))
  })

  const cellWidths = ref([])

  const updateCellWidths = () => {
    if (!props.fixedHeader) return

    const tableHeadCells = tableHead.value.querySelectorAll('th')
    const tableBodyCells = tableBody.value.querySelectorAll('tr:first-child td')

    const newCellWidths = []

    // Get the computed styles for white-space settings
    // const getCellComputedStyle = (cell) => {
    //   return window.getComputedStyle(cell)
    // }

    const computeCellWidths = (cell) => {
      // const computedStyle = window.getComputedStyle(cell)
      // const whiteSpace = computedStyle.whiteSpace

      // Temporarily set white-space to 'nowrap' to get the max width without wrapping
      // cell.style.whiteSpace = 'nowrap'
      const width = cell.getBoundingClientRect().width
      // Revert back to original white-space setting
      // cell.style.whiteSpace = whiteSpace

      return width
    }

    tableHeadCells.forEach((cell, index) => {
      // if data-key is in hiddenColumns, skip
      // if (props.hiddenColumns.includes(cell.getAttribute('data-key'))) {
      //   return
      // }
      // console.log(cell)
      // console.log(props.hiddenColumns)
      // console.log(cell.getAttribute('data-key'))
      // const computedStyle = getCellComputedStyle(cell)
      // const whiteSpace = computedStyle.whiteSpace

      // // Temporarily set white-space to 'nowrap' to get the max width without wrapping
      // cell.style.whiteSpace = 'nowrap'
      // const width = cell.getBoundingClientRect().width
      // // Revert back to original white-space setting
      // cell.style.whiteSpace = whiteSpace

      newCellWidths[index] = { width: `${computeCellWidths(cell)}px` }
    })

    tableBodyCells.forEach((cell, index) => {
      // if (props.hiddenColumns.includes(cell.getAttribute('data-key'))) {
      //   return
      // }
      // console.log(cell)
      // console.log(props.hiddenColumns)
      // console.log(cell.getAttribute('data-key'))
      // const computedStyle = getCellComputedStyle(cell)
      // const whiteSpace = computedStyle.whiteSpace

      // // Temporarily set white-space to 'nowrap' to get the max width without wrapping
      // cell.style.whiteSpace = 'nowrap'
      // const width = cell.getBoundingClientRect().width
      // // Revert back to original white-space setting
      // cell.style.whiteSpace = whiteSpace

      if (computeCellWidths(cell) > parseFloat(newCellWidths[index].width)) {
        newCellWidths[index] = { width: `${computeCellWidths(cell)}px` }
      }
    })

    cellWidths.value = newCellWidths
    console.log(newCellWidths)
  }

  watch(() => props.fixedHeader, () => {
    updateCellWidths()
  })

  // do not change this. watch props.data only
  watch(() => props.data, () => {
    nextTick(() => {
      updateCellWidths()
    })
  })

  const onResize = () => {
    updateCellWidths()
    updateLeftPosition()
  }

  onMounted(() => {
    nextTick(() => {
      updateCellWidths()
    })
    window.addEventListener('resize', onResize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize)
  })
</script>
