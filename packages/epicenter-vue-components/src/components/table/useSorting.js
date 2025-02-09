import { computed, ref } from 'vue'

export default function useSorting(columns, data, initialSortColumn, initialSortOrder = 'asc') {
  // const data = ref(data)
  const sortColumn = ref(initialSortColumn)
  const sortOrder = ref(initialSortOrder)

  const sortedData = computed(() => {
    const column = columns.value.find(column => column.key === sortColumn.value)
    if (!column) return data.value

    const sorter = column.sorter || defaultSorter(column.key)

    const modifier = sortOrder.value === 'asc' ? 1 : -1

    return [...data.value].sort((a, b) => {
      const result = sorter(a, b)
      return result * modifier
    })
  })

  const onSortChange = (columnKey) => {
    if (sortColumn.value === columnKey) {
      sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
    } else {
      sortColumn.value = columnKey
    }
  }

  const defaultSorter = (key) => (a, b) => {
    // if (a[key] < b[key]) return -1
    // if (a[key] > b[key]) return 1
    // return 0
    const aValue = a[key] ?? ''
    const bValue = b[key] ?? ''
    return aValue < bValue ? -1 : aValue > bValue ? 1 : 0
  }

  return {
    sortedData,
    onSortChange,
    sortColumn,
    sortOrder
  }
}
