<template>
  <span>
    {{ count }} {{ count === 1 ? singular : plural }}
  </span>
</template>

<script setup>
  defineOptions({
    name: 'EpItemCount'
  })

  const props = defineProps({
    count: {
      type: Number,
      required: true
    },
    singular: {
      type: String,
      required: true
    },
    plural: {
      type: String,
      required: true
    }
  })
</script>