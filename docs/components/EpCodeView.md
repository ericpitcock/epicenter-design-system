# EpCodeView



`EpCodeView` is a component that displays code snippets with syntax highlighting via [Shiki](https://shiki.matsu.io/).

## Usage
```vue
  <template>
    <ep-code-view
      :code="codeExamples['javascript']"
      language="javascript"
      theme="vitesse-dark"
    />
  </template>

  <script setup>
    import { EpCodeView } from '@epicenter/vue-components'
    import { codeExamples } from './EpCodeView.data'
  </script>
```
    

## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `code` | The code to display. | `string` | `-` |
| `language` | The language of the code. | `string` | `-` |
| `theme` | The theme to use for highlighting. | `string` | `'vitesse-dark'` |


::: info
This component does not use events, slots.
:::

## Component Code

```vue
<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    class="ep-code-block"
    v-html="highlightedCode"
  />
</template>

<script setup>
  import { onMounted, ref, watch } from 'vue'
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

  watch(() => props.code, () => {
    highlightCode()
  })

  onMounted(() => {
    highlightCode()
  })
</script>

<style lang="scss">
  .ep-code-block pre {
    white-space: pre;
  }
</style>

```