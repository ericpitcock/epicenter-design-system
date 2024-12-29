<!-- eslint-disable vue/html-closing-bracket-newline -->
<template>
  <!-- eslint-disable-next-line vue/max-attributes-per-line -->
  <pre :class="[themeClass, { 'line-numbers': enableLineNumbers }]">
    <code :class="`language-${language}`">{{ code }}</code>
  </pre>
</template>

<script setup>
  defineOptions({
    name: 'EpCodeView'
  })

  import { computed } from 'vue'
  // eslint-disable-next-line no-unused-vars
  import Prism from 'prismjs'
  import 'prismjs/components/prism-javascript'
  import 'prismjs/components/prism-json'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js'

  const props = defineProps({
    code: {
      type: String,
      required: true
    },
    language: {
      type: String,
      required: true
    },
    enableLineNumbers: {
      type: Boolean,
      default: true
    },
    theme: {
      type: String,
      default: 'dark'
    }
  })

  const themeClass = computed(() => {
    return props.theme === 'dark' ? 'dark-theme' : 'light-theme'
  })


  // if this somehow breaks in production,
  // bring back Prism.highlightAll() in onMounted
</script>
