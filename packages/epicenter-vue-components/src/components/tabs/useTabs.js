import { ref } from 'vue'

export default function useTabs() {
  const activeTab = ref(0)

  const setActiveTab = (index) => {
    activeTab.value = index
  }

  return {
    activeTab,
    setActiveTab,
  }
}