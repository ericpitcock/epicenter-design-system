<template>
  <div
    ref="tableContainer"
    class="ep-table-container"
    :style="containerStyles"
  >
    <table
      :class="['ep-table', classes]"
      :style="styles"
    >
      <thead>
        <tr>
          <template
            v-for="column in columns"
            :key="column.key"
          >
            <slot
              v-if="$slots.header"
              name="header"
              v-bind="{ column }"
            />
            <th v-else>
              <div>
                <span class="label">{{ column.label }}</span>
              </div>
            </th>
          </template>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in data"
          :key="row.id"
          @click="onRowClick(row)"
        >
          <ep-table-cell
            v-for="column in columns"
            :key="column.key"
            :row="row"
            :column="column"
          />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  import EpTableCell from './EpTableCell.vue'
  import useCalculatedHeight from '../../composables/useCalculatedHeight.js'
  import { computed, ref } from 'vue'

  // eslint-disable-next-line no-unused-vars
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
  const { containerHeight } = useCalculatedHeight(tableContainer, props.calculateHeightOffset)

  const containerStyles = computed(() => {
    return {
      ...(props.calculateHeight && containerHeight.value),
    }
  })

  const classes = computed(() => {
    return {
      'ep-table--selectable': props.selectable,
      'ep-table--bordered': props.bordered,
      'ep-table--compact': props.compact,
      'ep-table--sticky': props.stickyHeader,
      'ep-table--striped': props.striped,
      // 'ep-table--layout-fixed': this.layoutFixed,
    }
  })
</script>
