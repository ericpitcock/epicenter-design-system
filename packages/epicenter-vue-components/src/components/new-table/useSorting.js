import { computed } from 'vue'

export default function useSorting(data, sortColumn, sortOrder) {
  const sortedData = computed(() => {
    if (!sortColumn.value) return data.value

    const modifier = sortOrder.value === 'desc' ? -1 : 1

    return [...data].sort((a, b) => {
      const aValue = a[sortColumn.value]
      const bValue = b[sortColumn.value]

      if (aValue < bValue)
        return -1 * modifier
      if (aValue > bValue)
        return 1 * modifier
      return 0
    })
  })

  const sortBy = (columnKey) => {
    if (sortColumn.value === columnKey) {
      sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
    } else {
      sortColumn.value = columnKey
      sortOrder.value = 'asc'
    }
  }

  return { sortedData, sortBy }
}
