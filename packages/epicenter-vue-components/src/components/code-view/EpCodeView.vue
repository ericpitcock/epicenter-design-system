<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    class="ep-code-block"
    v-html="highlightedCode"
  />
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { codeToHtml } from 'shiki'

  defineOptions({
    name: 'EpCodeView'
  })

  const props = defineProps({
    /**
     * The code to display.
     */
    code: {
      type: String,
      required: true
    },
    /**
     * The language of the code.
     */
    language: {
      type: String,
      required: true
    },
    /**
     * The theme to use for highlighting.
     */
    theme: {
      type: String,
      default: 'vitesse-dark'
    }
  })

  const highlightedCode = ref('')

  const highlightCode = async () => {
    try {
      highlightedCode.value = await codeToHtml(props.code, {
        lang: props.language,
        theme: 'one-dark-pro',
        colorReplacements: {
          '#282c34': 'var(--interface-surface)',
        }
      })
    } catch (error) {
      console.error('Error highlighting code:', error)
      // Fallback to plain text
      highlightedCode.value = props.code
    }
  }

  onMounted(() => {
    highlightCode()
  })
</script>

<style lang="scss">
  .ep-code-block pre {
    white-space: pre;
  }
</style>
