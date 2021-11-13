<template>
  <component :is="type" class="ep-icon" v-html="svg" />
</template>

<script>
  import svgIcons from './load-icons'

  export default {
    name: 'EpIcon',
    data: () => ({
      weights: {
        'light': 1,
        'regular': 1.5,
        'bold': 2,
      }
    }),
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
            // .replace(/stroke=\S+/g, `stroke="var(${this.color})"`)
            .replace(/stroke-width=\S+/g, `stroke-width="${this.weights[this.weight]}"`)
            .replace(/[^-]width=\S+/g, `width="${this.size}"`)
            .replace(/height=\S+/g, `height="${this.size}"`)
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