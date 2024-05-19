import { computed, ref, onMounted, onBeforeUnmount } from 'vue'

export default function useCalculatedHeight(element, calculateHeightOffset = 0) {
  const dynamicHeight = ref('')

  const calculatedHeight = () => {
    dynamicHeight.value = `${window.innerHeight - element.value.getBoundingClientRect().top - calculateHeightOffset}px`
  }

  onMounted(() => {
    calculatedHeight()
    window.addEventListener('resize', calculatedHeight)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', calculatedHeight)
  })

  const containerStyles = computed(() => {
    return {
      height: dynamicHeight.value
    }
  })

  return {
    containerStyles
  }
}
