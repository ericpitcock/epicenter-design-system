import { computed, ref } from 'vue'

export default function useSearch(data) {
  const searchText = ref('')

  const searchedData = computed(() => {
    if (!searchText.value.trim()) return data.value

    const searchQuery = searchText.value.trim().toLowerCase()
    return data.value.filter((row) => {
      return Object.values(row).some((value) => {
        const searchableValue = value.value || value
        return String(searchableValue).toLowerCase().includes(searchQuery)
      })
    })
  })

  const updateSearchText = (text) => {
    searchText.value = text
  }

  return { searchedData, searchText, updateSearchText }
}
