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
| `theme` | The theme to use for highlighting. | `string` | `'one-dark-pro'` |


::: info
This component does not use events, slots.
:::

## Component Code

```vue
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

```

## Styles (SCSS)

```scss
:root {
  --ep-code-block-font-family: "Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace;
  --ep-code-block-font-variation-settings: "wght" 400
}

html[data-color-theme=light] {
  --ep-code-block-font-variation-settings: "wght" 450
}

.ep-code-view code,
.ep-code-view pre {
  font-family: var(--ep-code-block-font-family);
  font-variation-settings: var(--ep-code-block-font-variation-settings);
  direction: ltr;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  line-height: 1.5;
  -moz-tab-size: 2;
  -o-tab-size: 2;
  tab-size: 2;
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none
}
```