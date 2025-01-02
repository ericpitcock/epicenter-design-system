import { ref, onBeforeUnmount, onMounted, useTemplateRef } from 'vue'
import { useDebounceFn } from '@vueuse/core'

export default function useFixedHeader(
  scrollElement = window,
  initialFixedHeader = false,
  fixedHeaderOffset = 0,
  fixedTop = 0,
) {
  const tableComponent = useTemplateRef('tableComponent')
  const tableContainer = ref(null)
  const tableFixed = ref(null)
  const tableBody = ref(null)
  const fixedHeader = ref(initialFixedHeader)
  const cellWidths = ref([])
  const tableHead = ref(null)
  const scrollTarget = scrollElement === window ? window : scrollElement

  // get scroll target top position
  const getScrollTop = () => {
    if (scrollElement === window) {
      return window.scrollY || document.documentElement.scrollTop
    }
    return scrollElement.scrollTop
  }

  const updateCellWidths = () => {
    fixedHeader.value = getScrollTop() > fixedHeaderOffset
    console.log(fixedHeader.value)
    if (!fixedHeader.value) return


    const tableHeadCells = tableHead.value?.$refs.tableHeadd.querySelectorAll('th')
    if (!tableHeadCells) return

    cellWidths.value = Array.from(tableHeadCells).map((cell) => ({
      width: `${cell.getBoundingClientRect().width}px`,
    }))
  }

  // need to sync top, right, and left positions
  // top with the fixedTop value
  // right with the tableBody.clientWidth
  // left with the tableContainer.scrollLeft
  const syncTablePosition = () => {
    // top - assigned by the fixedTop value
    tableFixed.value.style.top = `${fixedTop}px`
    // width - match the tableBody width
    tableFixed.value.style.width = `${tableBody.value.clientWidth}px`
    // left - match the tableBody left position
    tableFixed.value.style.left = `${tableBody.value.getBoundingClientRect().left}px`
    console.log('tableContainer.value.scrollLeft', tableContainer.value.scrollLeft)
    // tableFixed.value.style.transform = `translateX(-${tableContainer.value.scrollLeft}px)`
  }

  const updateAndSync = useDebounceFn(() => {
    console.log('running updateAndSync')
    updateCellWidths()
    syncTablePosition()
  }, 0, { maxWait: 100 })

  onMounted(() => {
    tableContainer.value = tableComponent.value.$refs.tableContainer
    tableFixed.value = tableComponent.value.$refs.tableFixed
    tableBody.value = tableComponent.value.$refs.tableBody

    console.log('scrollTarget', scrollTarget)
    updateAndSync()
    scrollTarget.addEventListener('scroll', updateAndSync)
    scrollTarget.addEventListener('resize', updateAndSync)
  })

  onBeforeUnmount(() => {
    scrollTarget.removeEventListener('scroll', updateAndSync)
    scrollTarget.removeEventListener('resize', updateAndSync)
  })

  return {
    fixedHeader,
    cellWidths,
    tableComponent,
    tableHead,
    updateCellWidths,
    syncTablePosition,
    updateAndSync,
  }
}