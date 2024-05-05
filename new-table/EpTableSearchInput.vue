<template>
  <input
    v-model="searchText"
    placeholder="Search..."
  >
</template>

<script setup>
  import { defineProps, defineEmits } from 'vue'

  const props = defineProps({
    searchText: {
      type: String,
      required: true
    }
  })

  const emits = defineEmits(['update:searchText'])
</script>
