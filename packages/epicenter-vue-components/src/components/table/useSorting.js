import { computed, ref } from 'vue'

export default function useSorting(data, initialSortColumn = '', initialSortOrder = 'asc', columns) {
  const sortColumn = ref(initialSortColumn)
  const sortOrder = ref(initialSortOrder)

  const sortedData = computed(() => {
    if (!sortColumn.value) return data.value

    const modifier = sortOrder.value === 'desc' ? -1 : 1

    return [...data.value].sort((a, b) => {
      const column = columns.value.find((column) => column.key === sortColumn.value)

      if (!column.sortable) return data.value

      const sorter = column?.sorter

      if (sorter) {
        // Use custom sorter if defined
        return sorter(a, b) * modifier
      }

      // Default sorting logic
      const aValue = a[sortColumn.value]
      const bValue = b[sortColumn.value]

      return (aValue < bValue ? -1 : aValue > bValue ? 1 : 0) * modifier
    })
  })

  const sortBy = (columnKey) => {
    if (sortColumn.value === columnKey) {
      // toggle sort order when clicking on the same column
      sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
    } else {
      // set new column and persist the sort order
      sortColumn.value = columnKey
    }
  }

  return { sortedData, sortBy, sortColumn, sortOrder }
}
