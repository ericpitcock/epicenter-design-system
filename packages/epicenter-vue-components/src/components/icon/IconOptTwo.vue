<!-- import.meta.glob is a vite thing. this may be useful when I get to vite. -->
<template>
  <span v-html="svg" />
</template>

<script>
  export default {
    name: 'IconOpt2',
    props: {
      name: {
        type: String,
        required: true
      },
      color: {
        type: String,
        default: 'currentcolor'
      },
      weight: {
        type: String,
        default: 'regular'
      },
      size: {
        type: Number,
        default: 20
      },
      type: {
        type: String,
        default: 'span'
      }
    },
    computed: {
      svg() {
        // const path = this.src ? this.src : ''
        // const file = this.name
        const modules = import.meta.glob('./icons/**/*.svg', {
          as: 'raw',
          eager: true,
        })
        return modules[`./icons/${this.name}.svg`]
      }
    }
  }
</script>