import { ref, computed } from 'vue'

export default function usePagination(data, pageSize, enablePagination) {
  const currentPage = ref(1)

  const totalPages = computed(() => {
    return Math.ceil(data.value.length / pageSize)
  })

  const paginatedData = computed(() => {
    if (!enablePagination) return data.value

    // Ensure currentPage is within bounds
    if (currentPage.value > totalPages.value) {
      currentPage.value = totalPages.value
    } else if (currentPage.value < 1) {
      currentPage.value = 1
    }

    const startIndex = (currentPage.value - 1) * pageSize
    return data.value.slice(startIndex, startIndex + pageSize)
  })

  console.log('paginatedData:', paginatedData.value)

  return { paginatedData, currentPage, totalPages }
}
