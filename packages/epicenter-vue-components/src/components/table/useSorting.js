import { computed, ref } from 'vue'

export default function useSorting(
  columns,
  data,
  initialSortColumn,
  initialSortOrder = 'asc'
) {
  const sortColumn = ref(initialSortColumn)
  const sortOrder = ref(initialSortOrder)

  const sortedData = computed(() => {
    const column = columns.value.find(
      column => column.key === sortColumn.value
    )
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
    // Curried sorter: given a key, returns an Array.sort comparator.
    // Treats null/undefined as '' via ??, then compares and returns -1/0/1.
    // Asc/desc is handled outside via the modifier in sortedData.
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
