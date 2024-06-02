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
            v-for="(column, index) in columns"
            :key="column.key"
          >
            <slot
              v-if="$slots.header && column.sortable"
              name="header"
              v-bind="{ column }"
            />
            <th
              v-else
              :style="headerStyles[index]"
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
    // fixedHeaderOffset: {
    //   type: Number,
    //   default: null
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

  const onScroll = () => {
    if (props.fixedHeader && tableHead.value) {
      tableHead.value.style.left = `${-tableContainer.value.scrollLeft}px`
    }
  }

  const updateHeaderWidths = () => {
    // if (tableBody.value && tableHead.value) {
    const bodyCells = tableBody.value.querySelector('tr').children
    console.log('bodyCells', bodyCells[0].clientWidth)
    headerStyles.value = Array.from(bodyCells).map(cell => ({
      width: `${cell.clientWidth}px`
    }))

    console.log('updating header widths')
    // }
  }

  watch(() => props.fixedHeader, () => {
    console.log('watch:props.fixedHeader')
    updateHeaderWidths()
  })

  onMounted(() => {
    // if (props.fixedHeader) {
    nextTick(() => {
      updateHeaderWidths()
    })
    // }
    window.addEventListener('resize', () => {
      // console.log('window:resize:updateHeaderWidths')
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
  thead.fixed {
    position: fixed;
    top: 0;
    z-index: 1;
    display: table;
  }

  // tbody.fixed {
  //   position: absolute;
  //   display: table;
  // }
  thead.fixed th {
    display: table-cell;
  }
</style>
