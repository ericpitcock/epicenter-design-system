import { type ComputedRef, type Ref, computed, isRef, ref } from 'vue'

import type { TableColumn, TableRow } from '../../types'

/** Return type of the useExclude composable */
export interface UseExcludeReturn {
  /** Columns after removing excluded keys */
  includedColumns: ComputedRef<TableColumn[]>
  /** Row data with excluded column keys removed */
  includedData: ComputedRef<TableRow[]>
}

/**
 * Composable that filters out excluded columns from both column definitions and row data.
 *
 * @param columns - Reactive array of table column definitions
 * @param data - Reactive array of table row data
 * @param exclude - Column keys to exclude (reactive or static array)
 */
export default function useExclude(
  columns: Ref<TableColumn[]>,
  data: Ref<TableRow[]>,
  exclude: Ref<string[]> | string[] = []
): UseExcludeReturn {
  const excludeRef = isRef(exclude) ? exclude : ref(exclude)

  const includedColumns = computed(() => {
    return columns.value.filter(column => !excludeRef.value.includes(column.key))
  })

  const includedData = computed(() => {
    return data.value.map(row => {
      const newRow: TableRow = {}
      includedColumns.value.forEach(column => {
        newRow[column.key] = row[column.key]
      })
      return newRow
    }).filter(row => Object.keys(row).length > 0)
  })

  return { includedColumns, includedData }
}
