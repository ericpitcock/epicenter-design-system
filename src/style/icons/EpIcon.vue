<template>
  <component :is="type" class="ep-icon" v-html="icon" />
</template>

<script>
  import svgIcons from './load-icons'

  export default {
    name: 'EpIcon',
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
      type: {
        type: String,
        default: 'span'
      }
    },
    computed: {
      computedWeight() {
        switch (this.weight) {
          case 'light':
            return 1
          case 'regular':
            return 1.5
          case 'bold':
            return 2
          default:
            return 1.5
        }
      },
      icon() {
        const icon = svgIcons.find(icon => icon.name === this.name)
        if (icon && icon.content) {
          return icon.content
            .replace(/stroke=\S+/g, `stroke="${this.color}"`)
            .replace(/stroke-width=\S+/g, `stroke-width="${this.computedWeight}"`)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-icon {
    display: inline-flex;
  }
</style>