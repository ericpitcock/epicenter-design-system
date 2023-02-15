<template>
  <div
    class="icon"
    :style="{
      width: size + 'px',
      height: size + 'px',
      fill: color
    }"
    v-html="svg"
  ></div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      size: {
        type: Number,
        default: 24
      },
      color: {
        type: String,
        default: 'currentColor'
      }
    },
    data() {
      return {
        svg: ''
      }
    },
    created() {
      this.loadSvg()
    },
    methods: {
      async loadSvg() {
        const response = await import(`./icons/${this.name}.svg`)
        const svg = response.default
        this.svg = svg
      }
    }
  }
</script>

<style scoped>
  .icon {
    display: inline-block;
    vertical-align: middle;
  }
</style>
