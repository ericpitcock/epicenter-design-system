export default {
  props: {
    calculateHeight: {
      type: Boolean,
      default: false
    },
    calculateHeightOffset: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      dynamicHeight: ''
    }
  },
  methods: {
    calculatedHeight() {
      const offsetBottom = this.calculateHeightOffset || 0
      this.dynamicHeight = `${window.innerHeight - this.$el.getBoundingClientRect().top - offsetBottom}px`
    }
  },
  mounted() {
    if (this.calculateHeight) {
      this.calculatedHeight()
      window.addEventListener('resize', this.calculatedHeight)
    }
  },
  beforeDestroy() {
    if (this.calculateHeight) {
      window.removeEventListener('resize', this.calculatedHeight)
    }
  }
}
