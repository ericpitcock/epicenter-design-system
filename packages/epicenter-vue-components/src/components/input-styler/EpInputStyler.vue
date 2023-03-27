<template>
  <div
    :class="['ep-input-styler__container', { 'ep-input-styler__container--disabled': disabled }]"
    :style="containerStyles"
  >
    <div
      class="ep-input-styler__inner"
      :style="innerStyles"
    >
      <div
        v-if="iconLeft"
        class="ep-input-styler__inner__icon-left"
        :style="iconStyles"
      >
        <ep-icon v-bind="iconLeft" />
      </div>
      <div
        v-if="iconRight"
        :class="['ep-input-styler__inner__icon-right', { 'ep-input-styler__inner__icon-right--active': iconRightVisible }]"
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
  import EpIcon from '../icon/EpIcon.vue'

  export default {
    name: 'EpInputStyler',
    components: {
      EpIcon
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      width: {
        type: String,
        default: '100%'
      },
      size: {
        type: String,
        default: 'default'
      },
      iconLeft: {
        type: Object,
        default: () => ({})
      },
      iconRight: {
        type: Object,
        default: () => ({})
      },
      iconRightVisible: {
        type: Boolean,
        default: false
      },
    },
    emits: ['click'],
    data() {
      return {
        sizes: {
          small: '22px',
          default: '30px',
          large: '38px',
          xlarge: '46px'
        }
      }
    },
    computed: {
      containerStyles() {
        return {
          width: this.width,
          // height is small 22px, default 30px, large 38px
          height: this.sizes[this.size]
        }
      },
      innerStyles() {
        return {
          // height is small 22px, default 30px, large 38px
          // height: this.sizes[this.size]
        }
      },
      iconStyles() {
        return {
          width: this.sizes[this.size],
          height: this.sizes[this.size],
          cursor: 'pointer'
        }
      }
    },
    methods: {
      onClick() {
        if (!this.iconRightVisible) return
        console.log('click')
        this.$emit('click')
      }
    },
  }
</script>