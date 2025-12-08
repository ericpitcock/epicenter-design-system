<template>
  <thead ref="tableHeadd">
    <tr>
      <template
        v-for="(column, columnIndex) in columns"
        :key="`head-${column.key}`"
      >
        <!-- @slot Custom header content for sortable columns. Receives column, cellWidths, and columnIndex as scoped props. -->
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
  defineOptions({
    name: 'EpTableHead'
  })

  const props = defineProps({
    /**
     * Array of column configuration objects defining table structure.
     */
    columns: {
      type: Array,
      required: true
    },
    /**
     * Array of width values for each column cell.
     */
    cellWidths: {
      type: Array,
      default: () => []
    },
    /**
     * If true, enables fixed header behavior.
     */
    fixedHeader: Boolean,
    /**
     * If true, shows an additional column for the actions menu.
     */
    showActionsMenu: Boolean,
  })
</script>