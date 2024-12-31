<template>
  <div
    ref="tableContainer"
    class="ep-table-container"
    :style="containerStyles"
  >
    <table :class="['ep-table', classes]">
      <slot
        name="thead"
        v-bind="{ visibleColumns, showActionsMenu }"
      />
      <tbody ref="tableBody">
        <tr
          v-for="row in data"
          :key="row.id"
          @click="onRowClick(row)"
        >
          <template
            v-for="column in visibleColumns"
            :key="`body-${column.key}`"
          >
            <td>
              <slot
                v-if="$slots[`cell-${column.key}`]"
                :name="`cell-${column.key}`"
                v-bind="{ row, column }"
              />
              <ep-table-cell
                v-else
                :row="row"
                :column="column"
              />
            </td>
          </template>

          <td
            v-if="showActionsMenu"
            class="ep-table__actions-menu"
          >
            <slot
              name="actions-menu"
              v-bind="{ row }"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <!-- table for the head clone only -->
    <table
      v-if="fixedHeader"
      class="ep-table ep-table--fixed-header"
    >
      <slot
        name="thead-fixed"
        v-bind="{ visibleColumns, showActionsMenu }"
      />
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
    useTemplateRef,
    watch
  } from 'vue'
  // import EpTableHead from './EpTableHead.vue'
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
    showActionsMenu: {
      type: Boolean,
      default: false
    },
  })

  const emit = defineEmits(['row-click'])

  const onRowClick = (row) => {
    if (props.selectable) emit('row-click', row)
  }

  const tableContainer = ref(null)
  // const tableHeadRef = useTemplateRef('tableHead')
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

  // const fixedHeaderVisible = ref(false)
  // const cellWidths = ref([])

  // const onScroll = () => {
  //   // console.log('scrolling')
  //   // console log scrol top of window
  //   // console.log(window.scrollY)
  //   // when scroll top is greater than 100, fixedHeaderVisible is true
  //   fixedHeaderVisible.value = window.scrollY > 100

  //   if (!fixedHeaderVisible.value) return
  //   // sync cell width with fixed header
  //   console.log(tableHeadRef.value)
  //   const tableHeadCells = tableHeadRef.value.querySelectorAll('th')
  //   // const tableBodyCells = tableBody.value.querySelectorAll('tr:first-child td')

  //   const newCellWidths = []

  //   const computeCellWidths = (cell) => {
  //     const width = cell.getBoundingClientRect().width

  //     return width
  //   }

  //   tableHeadCells.forEach((cell, index) => {
  //     // if (computeCellWidths(cell) > parseFloat(newCellWidths[index].width)) {
  //     newCellWidths[index] = { width: `${computeCellWidths(cell)}px` }
  //     // }
  //   })

  //   cellWidths.value = newCellWidths
  // }

  // const updateLeftPosition = () => {
  //   if (!props.fixedHeader) return

  //   requestAnimationFrame(() => {
  //     const computedStyle = window.getComputedStyle(tableContainer.value)
  //     const paddingLeft = parseFloat(computedStyle.paddingLeft)

  //     // Calculate the new left position considering the padding
  //     const tableContainerLeft = -tableContainer.value.scrollLeft + paddingLeft + tableContainer.value.getBoundingClientRect().left

  //     tableHead.value.style.left = `${tableContainerLeft}px`
  //   })
  // }

  // defineExpose({
  //   updateLeftPosition
  // })

  const visibleColumns = computed(() => {
    return props.columns.filter(column => !props.hiddenColumns.includes(column.key))
  })



  // const updateCellWidths = () => {
  //   if (!props.fixedHeader) return

  //   const tableHeadCells = tableHead.value.querySelectorAll('th')
  //   const tableBodyCells = tableBody.value.querySelectorAll('tr:first-child td')

  //   const newCellWidths = []

  //   const computeCellWidths = (cell) => {
  //     const width = cell.getBoundingClientRect().width

  //     return width
  //   }

  //   tableHeadCells.forEach((cell, index) => {
  //     newCellWidths[index] = { width: `${computeCellWidths(cell)}px` }
  //   })

  //   tableBodyCells.forEach((cell, index) => {
  //     if (computeCellWidths(cell) > parseFloat(newCellWidths[index].width)) {
  //       newCellWidths[index] = { width: `${computeCellWidths(cell)}px` }
  //     }
  //   })

  //   cellWidths.value = newCellWidths
  // }

  // watch(() => props.fixedHeader, () => {
  //   updateCellWidths()
  // })

  // watch(() => props.data, () => {
  //   nextTick(() => {
  //     updateCellWidths()
  //   })
  // })

  // const onResize = () => {
  //   updateCellWidths()
  //   updateLeftPosition()
  // }

  // onMounted(() => {
  //   nextTick(() => {
  //     updateCellWidths()
  //   })
  //   window.addEventListener('resize', onResize)
  // })

  // onBeforeUnmount(() => {
  //   window.removeEventListener('resize', onResize)
  // })

  // add scroll event listener to window
  // onMounted(() => {
  //   if (props.fixedHeader) {
  //     window.addEventListener('scroll', onScroll)
  //   }
  // })

  // onBeforeUnmount(() => {
  //   if (props.fixedHeader) {
  //     window.removeEventListener('scroll', onScroll)
  //   }
  // })
</script>

<style lang="scss">
  .ep-table--fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
  }
</style>