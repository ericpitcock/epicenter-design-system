import { computed, ref } from 'vue'

export default function useSearch(data) {
  // const searchTerms = ref([])
  const searchTerms = ref({ and: [], or: [] })

  // const searchedData = computed(() => {
  //   if (searchTerms.value.length === 0) return data.value

  //   return data.value.filter((row) => {
  //     return searchTerms.value.every((term) => {
  //       const searchQuery = term.trim().toLowerCase()
  //       return Object.values(row).some((value) => {
  //         const searchableValue = value.value || value
  //         return String(searchableValue).toLowerCase().includes(searchQuery)
  //       })
  //     })
  //   })
  // })

  const searchedData = computed(() => {
    const { and, or } = searchTerms.value

    if (!and.length && !or.length) {
      return data.value // No filtering, show all alerts
    }

    return data.value.filter(alert => {
      const alertString = JSON.stringify(alert).toLowerCase()

      // Handle AND conditions: Every term in `and` must be found
      const matchesAllAnd = and.length === 0 || and.every(term => alertString.includes(term.toLowerCase()))

      // Handle OR conditions: At least one term in `or` must be found
      const matchesAnyOr = or.length === 0 || or.some(term => alertString.includes(term.toLowerCase()))

      // If only terms are provided without operators, default to OR logic
      if (!and.length && or.length) return matchesAnyOr

      return matchesAllAnd && matchesAnyOr
    })
  })

  const onSearchUpdate = (terms) => {
    console.log('onSearchUpdate', terms)
    // searchTerms.value = terms
    searchTerms.value = terms || { and: [], or: [] }
  }

  return { searchedData, searchTerms, onSearchUpdate }
}
