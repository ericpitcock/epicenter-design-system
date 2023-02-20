<template>
  <component
    :is="type"
    class="ep-icon"
    v-html="svg"
  />
</template>

<script>
  export default {
    name: 'EpIcon',
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
    data() {
      return {
        // iconSvg: iconSvg,
        weights: {
          'extra-light': 0.5,
          'light': 1,
          'regular': 1.5,
          'bold': 2,
        }
      }
    },
    computed: {
      iconSvg() {
        const iconSvg = require(`./icons/${this.name}.svg`)
        return iconSvg.default
          .replace(/stroke=\S+/g, `stroke="${this.color}"`)
          .replace(/stroke-width=\S+/g, `stroke-width="${this.weights[this.weight]}"`)
          .replace(/[^-]width=\S+/g, `width="${this.size}"`)
          .replace(/height=\S+/g, `height="${this.size}"`)
      }
    }
  }
</script>
