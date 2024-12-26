import { computed, ref } from 'vue'

export default function useSorting(data, initialSortColumn = '', initialSortOrder = 'asc', columns) {
  const sortColumn = ref(initialSortColumn)
  const sortOrder = ref(initialSortOrder)

  const sortedData = computed(() => {
    if (!sortColumn.value || !data.value || !columns.value) return data.value

    const column = columns.value.find((column) => column.key === sortColumn.value)
    if (!column || !column.sortable) return data.value

    const modifier = sortOrder.value === 'desc' ? -1 : 1
    // if a custom sorter is provided, use it, otherwise use the default sorter
    const sorter = column.sorter || ((a, b) => {
      const aValue = a[sortColumn.value] ?? ''
      const bValue = b[sortColumn.value] ?? ''
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0
    })

    return [...data.value].sort((a, b) => sorter(a, b) * modifier)
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