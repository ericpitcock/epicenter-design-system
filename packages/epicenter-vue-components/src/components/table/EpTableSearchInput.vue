<script setup>
  const modelValue = defineModel({
    type: String,
    required: true
  })
</script>

<template>
  <input
    v-model="modelValue"
    placeholder="Search..."
  >
</template>
