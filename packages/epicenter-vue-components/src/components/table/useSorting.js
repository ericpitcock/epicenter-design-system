import { computed, ref } from 'vue'

export default function useSorting(data, initialSortColumn = '', initialSortOrder = 'asc') {
  const sortColumn = ref(initialSortColumn)
  const sortOrder = ref(initialSortOrder)

  const sortedData = computed(() => {
    if (!sortColumn.value) return data.value

    const modifier = sortOrder.value === 'desc' ? -1 : 1

    return [...data.value].sort((a, b) => {
      // raw value if it exists, otherwise value for components,
      // otherwise basic values that had no formatting applied
      const getValue = (item, column) => item[column]?.raw || item[column]?.value || item[column]

      const aValue = getValue(a, sortColumn.value)
      const bValue = getValue(b, sortColumn.value)

      return (aValue < bValue ? -1 : aValue > bValue ? 1 : 0) * modifier
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
