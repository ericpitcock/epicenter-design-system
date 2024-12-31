<template>
  <div
    ref="tableContainer"
    class="ep-table-container"
    :style="containerStyles"
    @scroll="syncTablePosition"
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
    <!-- table for fixed header -->
    <table
      v-show="fixedHeader"
      ref="tableFixed"
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
  import { computed, onBeforeUnmount, onMounted, ref, } from 'vue'
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
  const tableBody = ref(null)
  const tableFixed = ref(null)

  const { containerHeight } = useCalculatedHeight(tableContainer, props.calculateHeightOffset)

  const containerStyles = computed(() => ({
    ...(props.calculateHeight && containerHeight.value),
    ...props.styles
  }))

  const syncTablePosition = () => {
    console.log('syncTablePosition')
    // if (!props.fixedHeader) return
    // use styles
    tableFixed.value.style.transform = `translateX(-${tableContainer.value.scrollLeft}px)`
    // sync width of tableFixed with tableBody
    tableFixed.value.style.width = `${tableBody.value.clientWidth}px`
  }

  // on window resize
  onMounted(() => {
    window.addEventListener('resize', syncTablePosition)
  })

  // on component unmount
  onBeforeUnmount(() => {
    window.removeEventListener('resize', syncTablePosition)
  })

  // watch fixedHeader and syncTablePosition
  // watch(() => props.fixedHeader, () => {
  //   syncTablePosition()
  // })

  const classes = computed(() => {
    return {
      'ep-table--selectable': props.selectable,
      'ep-table--bordered': props.bordered,
      'ep-table--compact': props.compact,
      'ep-table--sticky': props.stickyHeader,
      'ep-table--striped': props.striped,
    }
  })

  const visibleColumns = computed(() => {
    return props.columns.filter(column => !props.hiddenColumns.includes(column.key))
  })
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