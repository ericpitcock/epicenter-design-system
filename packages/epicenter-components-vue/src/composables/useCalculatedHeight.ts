import { type Ref, onBeforeUnmount, onMounted, ref } from 'vue'

/** Return type of the useCalculatedHeight composable */
export interface UseCalculatedHeightReturn {
  /** Reactive pixel height calculated as viewport minus element top minus offset */
  dynamicHeight: Ref<number>
}

/**
 * Composable that calculates a dynamic height based on an element's position
 * in the viewport, useful for filling remaining vertical space.
 *
 * @param element - Template ref of the element whose position determines the height
 * @param calculateHeightOffset - Additional pixel offset to subtract (e.g., for footers)
 */
export default function useCalculatedHeight(
  element: Ref<HTMLElement | null>,
  calculateHeightOffset = 0
): UseCalculatedHeightReturn {
  const dynamicHeight = ref(0)

  const calculateHeight = (): void => {
    if (element.value) {
      dynamicHeight.value =
        window.innerHeight - element.value.getBoundingClientRect().top - calculateHeightOffset
    }
  }

  onMounted(() => {
    calculateHeight()
    window.addEventListener('resize', calculateHeight)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', calculateHeight)
  })

  return { dynamicHeight }
}