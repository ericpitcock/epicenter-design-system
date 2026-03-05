import { type ComputedRef, type Ref, computed, ref } from 'vue'

import type { SortOrder, TableColumn, TableRow } from '../../types'

/** Return type of the useSorting composable */
export interface UseSortingReturn {
  /** Sorted copy of the data array */
  sortedData: ComputedRef<TableRow[]>
  /** Toggle or change the sort column */
  onSortChange: (columnKey: string) => void
  /** Currently sorted column key */
  sortColumn: Ref<string>
  /** Current sort direction */
  sortOrder: Ref<SortOrder>
}

/**
 * Composable that sorts table data by a column with asc/desc toggling.
 *
 * @param columns - Reactive column definitions (used to look up custom sorters)
 * @param data - Reactive array of table row data
 * @param initialSortColumn - Column key to sort by initially
 * @param initialSortOrder - Initial sort direction (default 'asc')
 */
export default function useSorting(
  columns: Ref<TableColumn[]>,
  data: Ref<TableRow[]>,
  initialSortColumn: string,
  initialSortOrder: SortOrder = 'asc'
): UseSortingReturn {
  const sortColumn = ref(initialSortColumn)
  const sortOrder = ref<SortOrder>(initialSortOrder)

  const sortedData = computed(() => {
    const column = columns.value.find(
      column => column.key === sortColumn.value
    )
    if (!column) return data.value

    const sorter = column.sorter || defaultSorter(column.key)

    const modifier = sortOrder.value === 'asc' ? 1 : -1

    return [...data.value].sort((a, b) => {
      const result = sorter(a, b)
      return result * modifier
    })
  })

  const onSortChange = (columnKey: string): void => {
    if (sortColumn.value === columnKey) {
      sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
    } else {
      sortColumn.value = columnKey
    }
  }

  const defaultSorter = (key: string) => (a: TableRow, b: TableRow): number => {
    const aValue = (a[key] as string | number) ?? ''
    const bValue = (b[key] as string | number) ?? ''
    return aValue < bValue ? -1 : aValue > bValue ? 1 : 0
  }

  return {
    sortedData,
    onSortChange,
    sortColumn,
    sortOrder
  }
}
