import { computed, ref } from 'vue'

export default function useExclude(columns, data, exclude = []) {
  const excludeRef = ref(exclude)

  const includedColumns = computed(() => {
    return columns.value.filter(column => !excludeRef.value.includes(column.key))
  })

  const includedData = computed(() => {
    return data.value.map(row => {
      const newRow = {}
      includedColumns.value.forEach(column => {
        newRow[column.key] = row[column.key]
      })
      return newRow
    }).filter(row => Object.keys(row).length > 0) // Ensure rows are not empty
  })

  return { includedColumns, includedData }
}
