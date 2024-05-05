import { ref, computed } from 'vue'

export default function usePagination(data, pageSize, enablePagination) {
  const currentPage = ref(1)

  const paginatedData = computed(() => {
    if (!enablePagination) return data.value

    const startIndex = (currentPage.value - 1) * pageSize
    return data.value.slice(startIndex, startIndex + pageSize)
  })

  return { paginatedData, currentPage }
}
