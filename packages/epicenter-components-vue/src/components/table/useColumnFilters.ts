import { type ComputedRef, type Ref, computed, ref } from 'vue'

import type { CheckboxFilter, TableColumn, TableRow } from '../../types'
import useExclude from './useExclude'

/** Return type of the useColumnFilters composable */
export interface UseColumnFiltersReturn {
  /** Checkbox filter items derived from filterable columns */
  columnFilters: ComputedRef<CheckboxFilter[]>
  /** Columns visible after applying column filters */
  visibleColumns: ComputedRef<TableColumn[]>
  /** Row data with hidden columns removed */
  visibleData: ComputedRef<TableRow[]>
  /** Toggle a column filter on or off */
  onFilterToggle: (checked: boolean, filterId: string) => void
}

/**
 * Composable that generates column-visibility checkbox filters and
 * removes unchecked columns from both headers and data.
 *
 * @param columns - Reactive column definitions
 * @param data - Reactive row data
 * @param disabledColumns - Initial list of column keys that start hidden
 */
export default function useColumnFilters(
  columns: Ref<TableColumn[]>,
  data: Ref<TableRow[]>,
  disabledColumns: string[]
): UseColumnFiltersReturn {
  const disabledColumnsRef = ref(disabledColumns)

  const columnFilters = computed<CheckboxFilter[]>(() => {
    return columns.value.map(column => ({
      id: column.key,
      name: 'columns',
      value: column.key,
      checked: !disabledColumnsRef.value.includes(column.key),
      label: column.label,
      disabled: false,
      filterable: column.filterable
    })).filter(column => column.filterable)
  })

  const onFilterToggle = (checked: boolean, filterId: string): void => {
    if (!checked) {
      disabledColumnsRef.value.push(filterId)
    } else {
      disabledColumnsRef.value = disabledColumnsRef.value.filter(column => column !== filterId)
    }
  }

  const {
    includedColumns: visibleColumns,
    includedData: visibleData
  } = useExclude(columns, data, disabledColumnsRef)

  return {
    columnFilters,
    visibleColumns,
    visibleData,
    onFilterToggle
  }
}
