<template>
  <pre><code :class="classes">{{ code }}</code></pre>
</template>

<script setup>
  import { computed, onMounted } from 'vue'
  import Prism from 'prismjs'
  import './prism-onedark.css'
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
    }
  })

  const classes = computed(() => [
    `language-${props.language}`,
    { 'line-numbers': props.enableLineNumbers }
  ])

  onMounted(() => {
    Prism.highlightAll()
  })
</script>
