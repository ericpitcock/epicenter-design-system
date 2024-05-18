import { computed, ref } from 'vue'

export default function useSorting(data) {
  const sortColumn = ref('id')
  const sortOrder = ref('desc')

  const sortedData = computed(() => {
    if (!sortColumn.value) return data.value

    const modifier = sortOrder.value === 'desc' ? -1 : 1

    return [...data.value].sort((a, b) => {
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

  return { sortedData, sortBy, sortColumn, sortOrder }
}
