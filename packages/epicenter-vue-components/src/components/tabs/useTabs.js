import { ref } from 'vue'

export default function useTabs() {
  const activeTab = ref(0)

  const setActiveTab = (item) => {
    activeTab.value = item.index
  }

  return {
    activeTab,
    setActiveTab,
  }
}