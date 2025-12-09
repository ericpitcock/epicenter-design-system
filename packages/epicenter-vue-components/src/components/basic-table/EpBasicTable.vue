<template>
  <div class="ep-table-container">
    <table :class="['ep-table', classes]">
      <thead>
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
          >
            <div>
              <span>
                {{ column.label }}
              </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, rowIndex) in data"
          :key="rowIndex"
        >
          <td
            v-for="column in columns"
            :key="column.key"
          >
            {{ row[column.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    /**
     * The columns of the table.
     */
    columns: {
      type: Array,
      required: true
    },
    /**
     * The data of the table.
     */
    data: {
      type: Array,
      required: true
    },
    /**
     * Gives borders to your table rows. Helpful for tables with a lot of data.
     */
    bordered: {
      type: Boolean,
      default: false
    },
    /**
     * Compact rows in a single line table scenario.
     */
    compact: {
      type: Boolean,
      default: false
    },
    /**
     * Background colors for every other row. Helpful for tables with a lot of data.
     */
    striped: {
      type: Boolean,
      default: false
    }
  })

  const classes = computed(() => ({
    'ep-table--bordered': props.bordered,
    'ep-table--compact': props.compact,
    'ep-table--striped': props.striped,
  }))
</script>