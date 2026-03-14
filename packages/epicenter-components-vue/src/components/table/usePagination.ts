import { type ComputedRef, type Ref, computed, ref, watch } from 'vue'

import type { TableRow } from '../../types'

/** Return type of the usePagination composable */
export interface UsePaginationReturn {
  /** Current page number (1-based) */
  currentPage: Ref<number>
  /** Navigate to a specific page and scroll the table container to top */
  onPageNavigate: (page: number) => void
  /** Update the page size (accepts string or number for select compatibility) */
  onPageSizeUpdate: (size: string | number) => void
  /** Number of rows per page */
  pageSize: Ref<number>
  /** Slice of data for the current page */
  paginatedData: ComputedRef<TableRow[]>
  /** Total number of pages based on data length and page size */
  totalPages: ComputedRef<number>
}

/**
 * Composable for paginating table data.
 *
 * @param data - Reactive array of table row data
 * @param initialPage - Starting page number (default 1)
 * @param initialPageSize - Starting page size (default 10)
 */
export default function usePagination(
  data: Ref<TableRow[]>,
  initialPage = 1,
  initialPageSize = 10
): UsePaginationReturn {
  const currentPage = ref(initialPage)
  const pageSize = ref(initialPageSize)

  const totalPages = computed(() => {
    return Math.ceil(data.value.length / pageSize.value)
  })

  // Clamp currentPage when totalPages changes (e.g. after filtering)
  watch(totalPages, (max) => {
    if (currentPage.value > max) {
      currentPage.value = Math.max(1, max)
    }
  })

  const paginatedData = computed(() => {
    const page = Math.max(1, Math.min(currentPage.value, totalPages.value))
    const startIndex = (page - 1) * pageSize.value
    return data.value.slice(startIndex, startIndex + pageSize.value)
  })

  const onPageNavigate = (page: number): void => {
    currentPage.value = page

    const tableContainer = document.querySelector('.ep-table-container')
    if (tableContainer) {
      tableContainer.scrollTop = 0
    }
  }

  const onPageSizeUpdate = (size: string | number): void => {
    pageSize.value = Number(size)
  }

  return {
    currentPage,
    pageSize,
    totalPages,
    paginatedData,
    onPageNavigate,
    onPageSizeUpdate
  }
}
