<template>
  <pre><code :class="classes">{{ code }}</code></pre>
</template>

<script>
  import Prism from 'prismjs'
  import './prism-onedark.css'
  import 'prismjs/components/prism-javascript'
  import 'prismjs/components/prism-json'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js'

  export default {
    name: 'EpCodeView',
    props: {
      code: {
        type: String,
        required: true
      },
      language: {
        type: String,
        required: true
      },
      lineNumbers: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classes() {
        return [
          `language-${this.language}`,
          { 'line-numbers': this.lineNumbers }
        ]
      }
    },
    watch: {
      code() {
        // using nextTick to ensure the DOM is updated before highlighting
        this.$nextTick(() => {
          Prism.highlightAll()
        })
      },
    },
    mounted() {
      Prism.highlightAll()
    }
  }
</script>
