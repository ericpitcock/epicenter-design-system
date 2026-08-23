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
    import { EpCodeView } from '@ericpitcock/epicenter-components-vue'
    import { codeExamples } from './EpCodeView.data'
  </script>
```
    

## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `code` | - | `string` | `-` |
| `language` | - | `string` | `-` |
| `theme` | - | `string` | `-` |


::: info
This component does not use events, slots.
:::

## CSS Custom Properties

Set any of these with a selector that matches `.ep-code-view` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-code-view {
  --ep-code-view-bg-color: /* … */;
}
```

### Surface

| Property | Default | State |
|---|---|---|
| `--ep-code-view-bg-color` | `var(--interface-surface)` | — |

### Text

| Property | Default | State |
|---|---|---|
| `--ep-code-view-font-family` | `"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace` | — |
| `--ep-code-view-font-variation-settings` | `light-dark("wght" 450, "wght" 400)` | — |
| `--ep-code-view-line-height` | `var(--text-line-height--normal)` | — |

## Component Code

```vue
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


```

## Styles (SCSS)

```scss
.ep-code-view {
  --ep-code-view-line-height: var(--text-line-height--normal);
  --ep-code-view-bg-color: var(--interface-surface);
  --ep-code-view-font-family: "Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace;
  // The lighter theme needs slightly more weight to hold the same optical
  // density, so this one is a light-dark() pair rather than a single value.
  --ep-code-view-font-variation-settings: light-dark("wght" 450, "wght" 400);
}

.ep-code-view code,
.ep-code-view pre {
  direction: ltr;
  font-family: var(--ep-code-view-font-family);
  font-variation-settings: var(--ep-code-view-font-variation-settings);
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  line-height: var(--ep-code-view-line-height);
  -moz-tab-size: 2;
  -o-tab-size: 2;
  tab-size: 2;
  text-align: left;
  white-space: pre;
  word-break: normal;
  word-spacing: normal
}
// Moved out of EpCodeView.vue's scoped block.
.ep-code-view pre {
  font-family: var(--ep-code-view-font-family);
  white-space: pre;

  // Shiki writes its theme background inline on the <pre>, so this has to win.
  &.shiki.one-light {
    background-color: var(--ep-code-view-bg-color) !important;
  }
}

```