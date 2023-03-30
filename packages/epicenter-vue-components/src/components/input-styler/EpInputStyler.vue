<template>
  <div
    :class="['ep-input-styler__container', { 'ep-input-styler__container--disabled': disabled }]"
    :style="containerStyles"
  >
    <div class="ep-input-styler__inner">
      <div
        v-if="iconLeft"
        class="ep-input-styler__inner__icon-left"
        :style="iconStyles"
      >
        <ep-icon v-bind="iconLeft" />
      </div>
      <div
        v-if="iconRight"
        :class="['ep-input-styler__inner__icon-right', { 'ep-input-styler__inner__icon-right--clickable': iconRightClickable }]"
        :style="iconStyles"
        @click="onClick"
      >
        <ep-icon
          v-show="iconRightVisible"
          v-bind="iconRight"
        />
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
  import inputMixin from '../../mixins/inputMixin.js'
  import EpIcon from '../icon/EpIcon.vue'

  export default {
    name: 'EpInputStyler',
    components: {
      EpIcon
    },
    mixins: [inputMixin],
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      width: {
        type: String,
        default: '100%'
      },
      iconLeft: {
        type: Object,
        default: null
      },
      iconRight: {
        type: Object,
        default: null
      },
      iconRightClickable: {
        type: Boolean,
        default: false
      },
      iconRightVisible: {
        type: Boolean,
        default: false
      },
    },
    emits: ['click'],
    computed: {
      containerStyles() {
        return {
          width: this.width,
          // height is small 22px, default 30px, large 38px
          height: `${this.sizes[this.size]}px`
        }
      },
      iconStyles() {
        return {
          width: `${this.sizes[this.size]}px`,
          height: `${this.sizes[this.size]}px`,
          cursor: 'pointer'
        }
      }
    },
    methods: {
      onClick() {
        if (!this.iconRightVisible) return
        this.$emit('click')
      }
    },
  }
</script>