<script setup lang="ts">
  import { computed, onMounted, onUpdated, ref } from 'vue'

  interface Props {
    code: string
    language: string
    theme?: string
  }

  const {
    code,
    language,
    theme = 'one-dark-pro',
  } = defineProps<Props>()

  defineOptions({ name: 'EpCodeView' })

  const highlightedCode = ref('')
  const highlightedSignature = ref('')
  const highlightSignature = computed(() => `${language}::${theme}::${code}`)

  const highlightCode = async (): Promise<void> => {
    const signature = highlightSignature.value

    if (highlightedSignature.value === signature) return

    highlightedSignature.value = signature

    try {
      // shiki is an optional peer — importing it lazily keeps it out of every
      // consumer's install and bundle, not just out of the initial chunk.
      const { codeToHtml } = await import('shiki')

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

  onMounted(() => {
    void highlightCode()
  })

  onUpdated(() => {
    void highlightCode()
  })
</script>

<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    class="ep-code-view"
    v-html="highlightedCode"
  />
</template>

