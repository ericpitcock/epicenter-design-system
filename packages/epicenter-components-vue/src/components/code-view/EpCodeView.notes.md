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