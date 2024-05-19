<template>
  <div>
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
  import { computed } from 'vue'

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
    bordered: {
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
    styles: {
      type: Object,
      default: () => ({})
    },
  })

  const classes = computed(() => {
    return {
      // 'ep-table--selectable': this.selectable,
      'ep-table--bordered': props.bordered,
      // 'ep-table--compact': this.compact,
      'ep-table--sticky': props.stickyHeader,
      'ep-table--striped': props.striped,
      // 'ep-table--layout-fixed': this.layoutFixed,
    }
  })
</script>
