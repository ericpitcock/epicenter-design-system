import { type Ref, ref } from 'vue'

/** Return type of the useTabs composable */
export interface UseTabsReturn {
  /** Index of the currently active tab */
  activeTab: Ref<number>
  /** Set the active tab by index */
  setActiveTab: (payload: { index: number }) => void
}

/**
 * Composable for managing tab state.
 *
 * @param defaultActiveTab - Initial active tab index (default 0)
 */
export default function useTabs(defaultActiveTab = 0): UseTabsReturn {
  const activeTab = ref(defaultActiveTab)

  const setActiveTab = ({ index }: { index: number }): void => {
    activeTab.value = index
  }

  return {
    activeTab,
    setActiveTab,
  }
}