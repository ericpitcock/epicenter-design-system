<script setup lang="ts">
  import { codeToHtml } from 'shiki'
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

