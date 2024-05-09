<template>
  <pre><code :class="classes">{{ code }}</code></pre>
</template>

<script setup>
  import { computed, nextTick, onMounted, watch } from 'vue'
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

  // const highlightCode = () => {
  //   Prism.highlightAll()
  // }

  onMounted(() => {
    Prism.highlightAll()
  })

  // watch(() => props.code, () => {
  //   // nextTick is needed to ensure the code is updated before highlighting
  //   nextTick(() => {
  //     highlightCode()
  //   })
  // })
</script>
