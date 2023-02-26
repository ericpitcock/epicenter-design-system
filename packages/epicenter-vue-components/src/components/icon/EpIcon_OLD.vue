<template>
  <component
    :is="type"
    class="ep-icon"
    v-html="svg"
  />
</template>

<script>
  import { svgIcons } from './load-icons'

  export default {
    name: 'EpIconOLD',
    data() {
      return {
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
        const icon = svgIcons.find(icon => icon.name === this.name)
        if (icon && icon.content) {
          return icon.content
            .replace(/stroke=\S+/g, `stroke="${this.color}"`)
            .replace(/stroke-width=\S+/g, `stroke-width="${this.weights[this.weight]}"`)
            .replace(/[^-]width=\S+/g, `width="${this.size}"`)
            .replace(/height=\S+/g, `height="${this.size}"`)
        }
      }
    }
  }
</script>
