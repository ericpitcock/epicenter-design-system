<script setup lang="ts">
  import type { TableColumn } from '../../types'

  interface EpTableHeadProps {
    cellWidths?: Record<string, string>[]
    columns: TableColumn[]
    fixedHeader?: boolean
    showActionsMenu?: boolean
  }

  const {
    cellWidths = [],
    showActionsMenu = false,
  } = defineProps<EpTableHeadProps>()
</script>

<template>
  <thead ref="thead">
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