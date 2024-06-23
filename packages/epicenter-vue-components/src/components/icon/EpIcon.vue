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
  defineOptions({
    name: 'EpIcon'
  })

  import { ref, watch } from 'vue'

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
    async (name) => {
      const { default: rawSvg } = await import(`./icons/${name}.svg?raw`)
      svgContent.value = rawSvg
    },
    { immediate: true }
  )
</script>
