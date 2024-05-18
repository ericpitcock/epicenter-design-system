import { computed } from 'vue'

export default function usePagination(data, pageSize, currentPage, totalPages) {
  const paginatedData = computed(() => {
    // if (!enablePagination) return data.value
    // Ensure currentPage is within bounds
    if (currentPage.value > totalPages) {
      currentPage.value = totalPages.value
    } else if (currentPage.value < 1) {
      currentPage.value = 1
    }

    const startIndex = (currentPage.value - 1) * pageSize.value
    return data.value.slice(startIndex, startIndex + pageSize.value)
  })

  console.log(pageSize.value, currentPage.value, totalPages.value)

  return { paginatedData }
}
