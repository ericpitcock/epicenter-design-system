import { computed, ref, toRef } from 'vue'

export default function useExclude(columns, data, exclude = []) {
  const excludeRef = ref(exclude)

  // if exclude is empty, return all columns
  if (excludeRef.value.length === 0) {
    return { includedColumns: toRef(columns), includedData: toRef(data) }
  }

  const includedColumns = computed(() => {
    return columns.value.filter(column => !excludeRef.value.includes(column.key))
  })

  const includedData = computed(() => {
    return data.value.filter(row => {
      return excludeRef.value.some(key => row[key])
    })
  })

  return { includedColumns, includedData }
}