import { ref, computed } from 'vue'

export default function useSearch(data, enableSearch) {
  const searchText = ref('')
  const searchedData = computed(() => {
    if (!enableSearch || !searchText.value.trim()) return data.value

    const searchQuery = searchText.value.trim().toLowerCase()
    return data.value.filter((row) => {
      return Object.values(row).some((value) => {
        return String(value).toLowerCase().includes(searchQuery)
      })
    })
  })

  return { searchText, searchedData }
}
