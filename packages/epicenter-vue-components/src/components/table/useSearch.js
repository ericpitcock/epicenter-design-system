import { computed, ref } from 'vue'

export default function useSearch(data) {
  const searchTerms = ref([])

  const searchedData = computed(() => {
    if (searchTerms.value.length === 0) return data.value

    return data.value.filter((row) => {
      return searchTerms.value.every((term) => {
        const searchQuery = term.trim().toLowerCase()
        return Object.values(row).some((value) => {
          const searchableValue = value.value || value
          return String(searchableValue).toLowerCase().includes(searchQuery)
        })
      })
    })
  })

  const onSearchUpdate = (terms) => {
    searchTerms.value = terms
  }

  return { searchedData, searchTerms, onSearchUpdate }
}
