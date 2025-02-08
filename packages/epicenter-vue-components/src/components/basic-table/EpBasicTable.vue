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

  defineOptions({
    name: 'EpBasicTable'
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
    bordered: {
      type: Boolean,
      default: false
    },
    compact: {
      type: Boolean,
      default: false
    },
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