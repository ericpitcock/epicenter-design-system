import { computed } from 'vue'

export default function usePagination(data, pageSize, currentPage, totalPages, enablePagination) {
  const paginatedData = computed(() => {
    if (!enablePagination) return data.value
    // Ensure currentPage is within bounds
    if (currentPage > totalPages) {
      currentPage = totalPages
    } else if (currentPage < 1) {
      currentPage = 1
    }

    const startIndex = (currentPage - 1) * pageSize
    return data.value.slice(startIndex, startIndex + pageSize)
  })

  console.log('paginatedData:', paginatedData.value)

  return { paginatedData }
}
