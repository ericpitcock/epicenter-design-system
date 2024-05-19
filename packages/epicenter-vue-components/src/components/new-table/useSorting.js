import { computed, ref } from 'vue'

export default function useSorting(data, initialSortColumn = '', initialSortOrder = 'asc') {
  const sortColumn = ref(initialSortColumn)
  const sortOrder = ref(initialSortOrder)

  const sortedData = computed(() => {
    if (!sortColumn.value) return data.value

    const modifier = sortOrder.value === 'desc' ? -1 : 1

    return [...data.value].sort((a, b) => {
      // component cells are sorted by .value property
      const aValue = typeof a[sortColumn.value] === 'object'
        ? a[sortColumn.value].value
        : a[sortColumn.value]
      const bValue = typeof b[sortColumn.value] === 'object'
        ? b[sortColumn.value].value
        : b[sortColumn.value]

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
