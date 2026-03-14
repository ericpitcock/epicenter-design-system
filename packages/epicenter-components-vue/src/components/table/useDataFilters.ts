import { type ComputedRef, type Ref, computed, onMounted, ref } from 'vue'

import type {
  CheckboxFilter,
  ColumnRangeCategories,
  CustomSortOrder,
  FilterUpdatePayload,
  Filters,
  TableColumn,
  TableRow
} from '../../types'

/** Return type of the useDataFilters composable */
export interface UseDataFiltersReturn {
  /** Data after applying all active filters */
  filteredData: ComputedRef<TableRow[]>
  /** Generated checkbox filters keyed by column */
  filters: Ref<Filters>
  /** Toggle a single filter checkbox */
  onFilterUpdate: (payload: FilterUpdatePayload) => void
  /** Manually regenerate filter options (e.g., after data changes) */
  refreshFilters: () => void
  /** Reset all filters to their default checked state */
  resetFilters: () => void
}

/**
 * Composable that generates data-value checkbox filters for specified columns,
 * with optional range-category grouping and custom sort orders.
 *
 * @param columns - Reactive column definitions
 * @param data - Reactive row data
 * @param columnsToFilter - Column keys to generate filters for
 * @param disabledFilters - Filter values that start unchecked
 * @param customSortOrder - Custom ordering for filter values per column
 * @param showCount - Whether to append match counts to filter labels
 * @param columnRangeCategories - Range-category predicates per column
 */
export default function useDataFilters(
  columns: Ref<TableColumn[]>,
  data: Ref<TableRow[]>,
  columnsToFilter: string[],
  disabledFilters: string[] = [],
  customSortOrder: CustomSortOrder = {},
  showCount = false,
  columnRangeCategories: ColumnRangeCategories = {},
): UseDataFiltersReturn {
  const filters = ref<Filters>({})

  const generateFilters = (): void => {
    const previous = filters.value || {}
    const uniqueValues: Record<string, string[]> = {}

    columns.value.forEach(column => {
      const columnKey = column.key

      if (columnsToFilter.includes(columnKey)) {
        if (columnRangeCategories[columnKey]) {
          uniqueValues[columnKey] = Object.keys(columnRangeCategories[columnKey])
        } else {
          uniqueValues[columnKey] = Array.from(
            new Set(data.value.map(row => String(getColumnValue(row, columnKey))))
          )
        }
      }
    })

    for (const key in uniqueValues) {
      if (customSortOrder[key]) {
        uniqueValues[key].sort((a, b) => {
          const indexA = customSortOrder[key].indexOf(a)
          const indexB = customSortOrder[key].indexOf(b)
          return indexA - indexB
        })
      } else {
        uniqueValues[key].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
      }
    }

    const generatedFilters: Filters = {}

    for (const key in uniqueValues) {
      const generateLabel = (value: string): string => {
        if (showCount) {
          const count = columnRangeCategories[key]
            ? data.value.filter(row =>
              columnRangeCategories[key][value](getColumnValue(row, key))
            ).length
            : data.value.filter(row => String(getColumnValue(row, key)) === value).length
          return `${value} (${count})`
        } else {
          return value
        }
      }

      generatedFilters[key] = uniqueValues[key].map(value => ({
        id: crypto.randomUUID(),
        name: key,
        value: value,
        checked: !disabledFilters.includes(value),
        label: generateLabel(value),
        disabled: false,
      }))
    }

    for (const key in generatedFilters) {
      const prevList = previous[key] || []
      const prevByValue = new Map(prevList.map(f => [String(f.value), f]))
      generatedFilters[key] = generatedFilters[key].map(f => {
        const prev = prevByValue.get(String(f.value))
        return prev ? { ...f, checked: prev.checked, id: prev.id } : f
      })
    }

    filters.value = generatedFilters
  }

  const getColumnValue = (item: TableRow, key: string): unknown => {
    const val = item[key]
    if (val && typeof val === 'object' && 'value' in val) {
      return (val as { value: unknown }).value
    }
    return val
  }

  const filteredData = computed(() => {
    let filtered = data.value

    for (const key in filters.value) {
      filtered = filtered.filter(row => {
        const value = getColumnValue(row, key)
        const isChecked = filters.value[key].some((filter: CheckboxFilter) => {
          if (columnRangeCategories[key]) {
            return filter.checked && columnRangeCategories[key][filter.value](value)
          } else {
            return filter.checked && filter.value === value
          }
        })
        return isChecked
      })
    }

    return filtered
  })

  const onFilterUpdate = ({ category, label, checked }: FilterUpdatePayload): void => {
    const filter = filters.value[category].find(filter => filter.label === label)
    if (filter) {
      filter.checked = checked
    }
  }

  const resetFilters = (): void => {
    for (const key in filters.value) {
      filters.value[key].forEach(filter => {
        if (!disabledFilters.includes(filter.value)) {
          filter.checked = true
        }
      })
    }
  }

  onMounted(() => generateFilters())

  const refreshFilters = (): void => generateFilters()

  return {
    filters,
    filteredData,
    onFilterUpdate,
    resetFilters,
    refreshFilters,
  }
}