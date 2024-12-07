<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<!-- eslint-disable vue/no-v-html -->
<template>
  <component
    :is="type"
    class="ep-icon"
    v-html="svgContent"
  />
</template>

<script setup>
  import { ref, watch } from 'vue'
  import { loadIcon } from 'epicenter-icons'

  defineOptions({
    name: 'EpIcon'
  })

  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'span'
    }
  })

  const svgContent = ref('')

  watch(
    () => props.name,
    async (name) => svgContent.value = await loadIcon(name),
    { immediate: true }
  )
</script>
