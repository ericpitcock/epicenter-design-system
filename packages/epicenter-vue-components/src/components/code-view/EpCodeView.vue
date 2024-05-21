<!-- eslint-disable vue/html-closing-bracket-newline -->
<template>
  <pre
    :class="[themeClass, { 'line-numbers': enableLineNumbers }]"><code :class="`language-${language}`">{{ code }}</code></pre>
</template>

<script setup>
  import { computed, watchEffect } from 'vue'
  // eslint-disable-next-line no-unused-vars
  import Prism from 'prismjs'
  import 'prismjs/components/prism-javascript'
  import 'prismjs/components/prism-json'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js'

  // eslint-disable-next-line no-unused-vars
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



  watchEffect(() => {
    Prism.highlightAll()
  })

  // if this somehow breaks in production,
  // bring back Prism.highlightAll() in onMounted
</script>
