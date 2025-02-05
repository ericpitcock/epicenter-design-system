import { ref, onMounted, onBeforeUnmount } from 'vue'

export default function useCalculatedHeight(element, calculateHeightOffset = 0) {
  const dynamicHeight = ref(0)

  const calculateHeight = () => {
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