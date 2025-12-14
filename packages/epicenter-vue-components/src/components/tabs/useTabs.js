import { ref } from 'vue'

export default function useTabs(defaultActiveTab = 0) {
  const activeTab = ref(defaultActiveTab)

  const setActiveTab = ({ index }) => {
    activeTab.value = index
  }

  return {
    activeTab,
    setActiveTab,
  }
}