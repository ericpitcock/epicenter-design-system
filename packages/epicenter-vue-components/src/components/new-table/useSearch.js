import { computed, ref } from 'vue'

export default function useSearch(data) {
  const searchText = ref('')

  const searchedData = computed(() => {
    if (!searchText.value.trim()) return data

    const searchQuery = searchText.value.trim().toLowerCase()
    return data.filter((row) => {
      return Object.values(row).some((value) => {
        return String(value).toLowerCase().includes(searchQuery)
      })
    })
  })

  const updateSearchText = (text) => {
    searchText.value = text
  }

  return { searchedData, searchText, updateSearchText }
}
