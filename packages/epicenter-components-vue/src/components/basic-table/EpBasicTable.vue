<script setup lang="ts">
  import { computed } from 'vue'

  import type { TableColumn, TableRow } from '../../types'

  interface EpBasicTableProps {
    /** Gives borders to your table rows. Helpful for tables with a lot of data. */
    bordered?: boolean
    /** The columns of the table. */
    columns: TableColumn[]
    /** Compact rows in a single line table scenario. */
    compact?: boolean
    /** The data of the table. */
    data: TableRow[]
    /** Background colors for every other row. Helpful for tables with a lot of data. */
    striped?: boolean
  }

  const { bordered = false, compact = false, striped = false } = defineProps<EpBasicTableProps>()

  const classes = computed(() => ({
    'ep-table--bordered': bordered,
    'ep-table--compact': compact,
    'ep-table--striped': striped,
  }))
</script>

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