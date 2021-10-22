<template>
  <component :is="type" class="ep-icon" v-html="svg" />
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
    data() {
      return {
        svg: null
      }
    },
    watch: {
      name: {
        handler() {
          this.updateIcon()
        },
        immediate: true
      },
      color: {
        handler() {
          this.updateIcon()
        },
        immediate: true
      },
      weight: {
        handler() {
          this.updateIcon()
        },
        immediate: true
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
      }
    },
    methods: {
      updateIcon() {
        const icon = svgIcons.find(icon => icon.name === this.name)
        if (icon && icon.content) {
          this.svg = icon.content
            .replace(/stroke=\S+/g, `stroke="${this.color}"`)
            .replace(/stroke-width=\S+/g, `stroke-width="${this.computedWeight}"`)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './tokens/sizes.scss';
  @import './tokens/colors.scss';

  .ep-icon {
    display: inline-flex;

    &--color {
      @each $color, $value in $token-colors {
        &-#{$color} {
          color: $value;
        }
      }
    }
  }
</style>