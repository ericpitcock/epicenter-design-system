import { computed } from 'vue'

export default function useSearch(data, searchText) {
  // const searchText = ref('')
  const searchedData = computed(() => {
    if (!searchText.value.trim()) return data.value

    const searchQuery = searchText.value.trim().toLowerCase()
    return data.value.filter((row) => {
      return Object.values(row).some((value) => {
        return String(value).toLowerCase().includes(searchQuery)
      })
    })
  })

  return { searchedData }
}
