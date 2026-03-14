<script setup lang="ts">
  import { codeToHtml } from 'shiki'
  import { onMounted, ref, watch } from 'vue'

  interface EpCodeViewProps {
    code: string
    language: string
    theme?: string
  }

  const {
    code,
    language,
    theme = 'one-dark-pro',
  } = defineProps<EpCodeViewProps>()

  const highlightedCode = ref('')

  const highlightCode = async (): Promise<void> => {
    try {
      highlightedCode.value = await codeToHtml(code, {
        lang: language,
        theme: theme,
        colorReplacements: {
          '#282c34': 'var(--interface-surface)',
        }
      })
    } catch (error) {
      console.error('Error highlighting code:', error)
      highlightedCode.value = code
    }
  }

  watch(() => code, () => {
    highlightCode()
  })

  watch(() => language, () => {
    highlightCode()
  })

  watch(() => theme, () => {
    highlightCode()
  })

  onMounted(() => {
    highlightCode()
  })
</script>

<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    class="ep-code-view"
    v-html="highlightedCode"
  />
</template>

<style lang="scss">
  .ep-code-view pre {
    font-family: var(--font-family-monospace);
    white-space: pre;

    &.shiki.one-light {
      background-color: var(--interface-surface) !important;
    }
  }
</style>
