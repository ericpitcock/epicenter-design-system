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
              v-bind="{ column, headerStyles, columnIndex }"
            />
            <th
              v-else
              :style="headerStyles[columnIndex]"
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
            :style="headerStyles[index]"
          />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  import { computed, ref, onMounted, nextTick, watch } from 'vue'
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
    // tHeadLeft: {
    //   type: Number,
    //   default: 0
    // },
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

  const headerStyles = ref([])

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

  // const tHeadLeftPosition = ref('0px')

  // onMounted(() => {
  //   const tableContainerLeft = tableContainer.value.getBoundingClientRect().left
  //   tHeadLeftPosition.value = `${tableContainerLeft}px`
  // })

  const onScroll = () => {
    // Get the computed style of the table container
    const computedStyle = window.getComputedStyle(tableContainer.value)
    // Extract the padding-left value and convert it to a number
    const paddingLeft = parseFloat(computedStyle.paddingLeft)

    console.log(paddingLeft)

    // Calculate the new left position considering the padding
    const tableContainerLeft = -tableContainer.value.scrollLeft + paddingLeft + tableContainer.value.getBoundingClientRect().left

    console.log('tableContainerLeft', tableContainerLeft)

    tableHead.value.style.left = `${tableContainerLeft}px`
  }

  const updateHeaderWidths = () => {
    // console.log('updating header widths')
    const bodyCells = tableBody.value.querySelector('tr').children
    // console.log(bodyCells[0].clientWidth)
    headerStyles.value = Array.from(bodyCells).map(cell => ({
      width: `${cell.clientWidth}px`
    }))
  }

  watch(() => props.fixedHeader, () => {
    // console.log('fixedHeader changed')
    updateHeaderWidths()
  })

  onMounted(() => {
    // if (props.fixedHeader) {
    nextTick(() => {
      updateHeaderWidths()
    })
    // }
    window.addEventListener('resize', () => {
      if (props.fixedHeader) {
        updateHeaderWidths()
      }
    })
  })

  watch(() => props.data, () => {
    nextTick(updateHeaderWidths)
  })
</script>

<style lang="scss" scoped>
  // thead.fixed {
  //   position: fixed;
  //   top: 0;
  //   z-index: 1;
  //   display: table;
  // }
  // thead.fixed th {
  //   display: table-cell;
  // }
</style>
