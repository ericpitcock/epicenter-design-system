import { ref, computed } from 'vue'

export default function useSorting(data, enableSorting) {
  const sortColumn = ref('')
  const sortOrder = ref('asc')

  const sortedData = computed(() => {
    if (!enableSorting) return data.value
    if (!sortColumn.value) return data.value

    return [...data.value].sort((a, b) => {
      const aValue = a[sortColumn.value]
      const bValue = b[sortColumn.value]
      return sortOrder.value === 'asc' ? aValue - bValue : bValue - aValue
    })
  })

  const sortBy = (columnKey) => {
    if (enableSorting) {
      if (sortColumn.value === columnKey) {
        sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
      } else {
        sortColumn.value = columnKey
        sortOrder.value = 'asc'
      }
    }
  }

  return { sortedData, sortBy, sortColumn, sortOrder }
}
