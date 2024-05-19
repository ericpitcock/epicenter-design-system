import { computed, ref } from 'vue'

export default function usePagination(data, initialPage = 1, initialPageSize = 10) {
  const currentPage = ref(initialPage)
  const pageSize = ref(initialPageSize)

  const totalPages = computed(() => {
    return Math.ceil(data.value.length / pageSize.value)
  })

  const paginatedData = computed(() => {
    if (currentPage.value > totalPages.value) {
      currentPage.value = totalPages.value
    } else if (currentPage.value < 1) {
      currentPage.value = 1
    }

    const startIndex = (currentPage.value - 1) * pageSize.value
    return data.value.slice(startIndex, startIndex + pageSize.value)
  })

  const onPageChange = (page) => {
    currentPage.value = page
  }

  return { paginatedData, currentPage, totalPages, onPageChange }
}
