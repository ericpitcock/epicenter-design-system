<template>
  <input
    v-model="modelValue"
    placeholder="Search..."
  >
</template>

<script setup>
  const modelValue = defineModel({
    type: String,
    required: true
  })
</script>
