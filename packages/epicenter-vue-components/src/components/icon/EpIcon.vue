<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<!-- eslint-disable vue/no-v-html -->
<template>
  <component
    :is="type"
    class="ep-icon"
    :style="styles"
    v-html="svgContent"
  />
</template>

<script setup>
  import { ref, watchEffect } from 'vue'

  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    styles: {
      type: Object,
      default: () => ({}),
    },
    type: {
      type: String,
      default: 'span'
    }
  })

  const icon = import(`./icons/${props.name}.svg?raw`)

  const svgContent = ref('')

  watchEffect(async () => {
    const { default: rawSvg } = await icon
    svgContent.value = rawSvg
  })
</script>
