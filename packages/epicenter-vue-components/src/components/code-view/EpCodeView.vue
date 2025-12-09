<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    class="ep-code-view"
    v-html="highlightedCode"
  />
</template>

<script setup>
  import { codeToHtml } from 'shiki'
  import { onMounted, ref, watch } from 'vue'

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
      default: 'one-dark-pro'
    }
  })

  const highlightedCode = ref('')

  const highlightCode = async () => {
    try {
      highlightedCode.value = await codeToHtml(props.code, {
        lang: props.language,
        theme: props.theme,
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

  watch(() => props.code, () => {
    highlightCode()
  })

  watch(() => props.language, () => {
    highlightCode()
  })

  watch(() => props.theme, () => {
    highlightCode()
  })

  onMounted(() => {
    highlightCode()
  })
</script>

<style lang="scss">
  .ep-code-view pre {
    font-family: var(--font-family-monospace);
    white-space: pre;

    &.shiki.one-light {
      background-color: var(--interface-surface) !important;
    }
  }
</style>
