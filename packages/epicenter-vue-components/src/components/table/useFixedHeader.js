import { ref, onBeforeUnmount, onMounted, useTemplateRef } from 'vue'
import { useDebounceFn } from '@vueuse/core'

export default function useFixedHeader(initialFixedHeader = false, fixedHeaderOffset = 0) {
  const tableComponent = useTemplateRef('tableComponent')
  const tableContainer = ref(null)
  const tableFixed = ref(null)
  const tableBody = ref(null)
  const fixedHeader = ref(initialFixedHeader)

  const cellWidths = ref([])
  const tableHead = ref(null)

  const updateCellWidths = () => {
    fixedHeader.value = window.scrollY > fixedHeaderOffset
    if (!fixedHeader.value) return

    const tableHeadCells = tableHead.value?.$refs.tableHeadd.querySelectorAll('th')
    if (!tableHeadCells) return

    cellWidths.value = Array.from(tableHeadCells).map((cell) => ({
      width: `${cell.getBoundingClientRect().width}px`,
    }))
  }

  const syncTablePosition = () => {
    // leftPosition is tableContainer.value.scrollLeft
    tableFixed.value.style.transform = `translateX(-${tableContainer.value.scrollLeft}px)`
    tableFixed.value.style.width = `${tableBody.value.clientWidth}px`
  }

  const updateAndSync = useDebounceFn(() => {
    console.log('updateAndSync')
    updateCellWidths()
    syncTablePosition()
  }, 0, { maxWait: 100 })

  onMounted(() => {
    console.log('onMounted')
    tableContainer.value = tableComponent.value.$refs.tableContainer
    tableFixed.value = tableComponent.value.$refs.tableFixed
    tableBody.value = tableComponent.value.$refs.tableBody

    window.addEventListener('scroll', updateAndSync)
    window.addEventListener('resize', updateAndSync)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', updateAndSync)
    window.removeEventListener('resize', updateAndSync)
  })

  return {
    fixedHeader, // yes
    cellWidths, // yes
    tableComponent,
    tableHead,
    updateCellWidths,
    syncTablePosition,
    updateAndSync, // yes
  }
}