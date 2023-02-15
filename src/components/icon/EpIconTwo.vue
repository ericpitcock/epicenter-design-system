<template>
  <span
    class="ep-icon"
    v-html="svgContent"
  />
</template>

<script>
  export default {
    name: 'EpIcon',
    data() {
      return {
        svgContent: '',
        weights: {
          'extra-light': 0.5,
          'light': 1,
          'regular': 1.5,
          'bold': 2,
        }
      }
    },
    props: {
      name: {
        type: String,
        required: true
      },
      color: {
        type: String,
        default: 'currentColor'
      },
      weight: {
        type: String,
        default: 'regular'
      },
      size: {
        type: Number,
        default: 20
      }
    },
    mounted() {
      this.loadIcon(this.name)
    },
    methods: {
      async loadIcon(name) {
        try {
          const response = await fetch(`./icons/${name}.svg`)
          const svg = await response.text()
          this.svgContent = svg
            .replace(/stroke=\S+/g, `stroke="${this.color}"`)
            .replace(/stroke-width=\S+/g, `stroke-width="${this.weights[this.weight]}"`)
            .replace(/[^-]width=\S+/g, `width="${this.size}"`)
            .replace(/height=\S+/g, `height="${this.size}"`)
        } catch (err) {
          console.error(`Error loading icon: ${name}.svg`, err)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-icon {
    display: inline-flex;
    color: inherit;
  }
</style>
