<script>
import { defineComponent, h } from 'vue'
import svgIcons from './load-icons'

export default defineComponent({
  name: 'VueFeather',
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
    tag: {
      type: String,
      default: 'span'
    }
  },
  computed: {
    isRemSize() {
      return typeof this.size === 'string' && this.size.endsWith('rem')
    },
  },
  render() {
    const {
      name,
      color,
      weight,
      size,
      type,
    } = this

    const icon = svgIcons.find(icon => icon.name === this.name)

    return h(this.tag,
      {
        // ...this.$attrs,
        // 'data-name': type,
        // 'data-tags': icon.tags,
        // 'data-type': type,

        class: ['ep-icon'],

        style: isRemSize ? {
          height: size,
          width: size,
        } : undefined,
      },
      [h('svg',
        // XXX: The `width` and `height` attributes do not support the `rem` unit in Safari (#13).
        {
          ...icon.attrs,
          fill: this.fill,
          height: isRemSize ? undefined : size,
          stroke: this.stroke,
          'stroke-linecap': this.strokeLinecap,
          'stroke-linejoin': this.strokeLinejoin,
          'stroke-width': this.strokeWidth,
          width: isRemSize ? undefined : size,
          class: [icon.attrs.class, 'vue-feather__content'],
          innerHTML: icon.contents,
        }
      )]
    )
  }
})
</script>

<style lang="scss">
</style>