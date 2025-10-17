import { computed, ref } from 'vue'

export default function useSearch(data, columns) {
  const searchTerms = ref({ and: [], or: [] })

  const searchedData = computed(() => {
    const { and, or } = searchTerms.value

    if (!and.length && !or.length) {
      return data.value // No filtering, show all data
    }

    return data.value.filter(row => {
      // Create a searchable object that contains both raw and formatted values
      const searchableRow = { ...row }

      // Add formatted values to the searchable object
      if (columns?.value) {
        for (const column of columns.value) {
          if (column.formatter && row[column.key] !== undefined) {
            const formattedValue = column.formatter(row[column.key], row)
            // Add the formatted value with a special key to avoid conflicts
            searchableRow[`${column.key}_formatted`] = formattedValue
          }
        }
      }

      // Convert the enhanced object (with both raw and formatted values) to a string for searching
      const rowString = JSON.stringify(searchableRow).toLowerCase()

      // Handle AND conditions: Every term in `and` must be found
      const matchesAllAnd = and.length === 0 || and.every(term => rowString.includes(term.toLowerCase()))

      // Handle OR conditions: At least one term in `or` must be found
      const matchesAnyOr = or.length === 0 || or.some(term => rowString.includes(term.toLowerCase()))

      // If only terms are provided without operators, default to OR logic
      if (!and.length && or.length) return matchesAnyOr

      return matchesAllAnd && matchesAnyOr
    })
  })

  const onSearchUpdate = (terms) => {
    searchTerms.value = terms || { and: [], or: [] }
  }

  return { searchedData, searchTerms, onSearchUpdate }
}