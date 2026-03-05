import { type ComputedRef, type Ref, computed, ref } from 'vue'

import type { SearchTerms, TableColumn, TableRow } from '../../types'

/** Return type of the useSearch composable */
export interface UseSearchReturn {
  /** Filtered data matching the current search terms */
  searchedData: ComputedRef<TableRow[]>
  /** Current AND/OR search terms */
  searchTerms: Ref<SearchTerms>
  /** Update search terms (pass null to clear) */
  onSearchUpdate: (terms: SearchTerms | null) => void
}

/**
 * Composable that filters table data using AND/OR search terms.
 * Searches both raw and formatted cell values.
 *
 * @param data - Reactive array of table row data
 * @param columns - Optional reactive columns (used to apply formatters during search)
 */
export default function useSearch(
  data: Ref<TableRow[]>,
  columns?: Ref<TableColumn[]>
): UseSearchReturn {
  const searchTerms = ref<SearchTerms>({ and: [], or: [] })

  const searchedData = computed(() => {
    const { and, or } = searchTerms.value

    if (!and.length && !or.length) {
      return data.value
    }

    return data.value.filter(row => {
      const searchableRow: TableRow = { ...row }

      if (columns?.value) {
        for (const column of columns.value) {
          if (column.formatter && row[column.key] !== undefined) {
            const formattedValue = column.formatter(row[column.key], row)
            searchableRow[`${column.key}_formatted`] = formattedValue
          }
        }
      }

      const rowString = JSON.stringify(searchableRow).toLowerCase()

      const matchesAllAnd = and.length === 0 || and.every(term => rowString.includes(term.toLowerCase()))
      const matchesAnyOr = or.length === 0 || or.some(term => rowString.includes(term.toLowerCase()))

      if (!and.length && or.length) return matchesAnyOr

      return matchesAllAnd && matchesAnyOr
    })
  })

  const onSearchUpdate = (terms: SearchTerms | null): void => {
    searchTerms.value = terms || { and: [], or: [] }
  }

  return { searchedData, searchTerms, onSearchUpdate }
}