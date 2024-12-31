<template>
  <thead ref="tableHeadd">
    <tr>
      <template
        v-for="(column, columnIndex) in columns"
        :key="`head-${column.key}`"
      >
        <slot
          v-if="$slots.header && column.sortable"
          name="header"
          v-bind="{ column, cellWidths, columnIndex }"
        />
        <th
          v-else
          :style="cellWidths[columnIndex]"
        >
          <div>
            <span class="label">{{ column.label }}</span>
          </div>
        </th>
      </template>
      <th
        v-if="showActionsMenu"
        class="ep-table__actions-menu"
      >
        <div>
          <span class="label">
            &nbsp;
          </span>
        </div>
      </th>
    </tr>
  </thead>
</template>

<script setup>
  const props = defineProps({
    columns: {
      type: Array,
      required: true
    },
    cellWidths: {
      type: Array,
      default: () => []
    },
    fixedHeader: Boolean,
    showActionsMenu: Boolean,
  })
</script>