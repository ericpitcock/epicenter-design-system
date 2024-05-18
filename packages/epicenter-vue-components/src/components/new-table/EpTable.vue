<template>
  <div>
    <table :class="['ep-table', classes]">
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
  })

  const classes = computed(() => {
    return {
      // 'ep-table--selectable': this.selectable,
      'ep-table--bordered': props.bordered,
      // 'ep-table--compact': this.compact,
      // 'ep-table--sticky': this.stickyHeader,
      'ep-table--striped': props.striped,
      // 'ep-table--sortable': this.sortable,
      // 'ep-table--layout-fixed': this.layoutFixed,
    }
  })
</script>
