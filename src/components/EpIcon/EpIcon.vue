<template>
  <component :is="type" class="ep-icon" :class="classes" v-html="svg" />
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
        default: ''
      },
      fill: {
        type: String,
        default: 'currentColor'
      },
      size: {
        type: String,
        default: '300'
      },
      type: {
        type: String,
        default: 'span'
      },
      weight: {
        type: Number,
        default: 0
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
      fill: {
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
      size: {
        handler() {
          this.updateIcon()
        },
        immediate: true
      }
    },
    computed: {
      classes() {
        return {
          [`ep-icon--size-${this.size}`]: !!this.size,
          [`ep-icon--color-${this.color}`]: !!this.color,
        }
      },
      computedWeight() {
        if (this.weight) {
          return this.weight
        }
        switch (parseInt(this.size)) {
          case 200:
            return 1.2
          case 300:
          case 400:
            return 1.5
          default:
            return 2
        }
      }
    },
    methods: {
      updateIcon() {
        const icon = svgIcons.find(icon => icon.name.slice(2, -4) === this.name)
        if (icon && icon.content) {
          this.svg = icon.content
            .replace(/stroke=\S+/g, `fill="none" stroke="${this.fill}"`)
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