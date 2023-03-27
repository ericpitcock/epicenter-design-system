<template>
  <div
    class="ep-input-styler__container"
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
        class="ep-input-styler__inner__icon-right"
        :style="iconStyles"
        @click="onClick"
      >
        <ep-icon v-bind="iconRight" />
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
        default: () => { }
      },
      iconRight: {
        type: Object,
        default: () => { }
      }
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
        console.log('click')
        this.$emit('click')
      }
    },
  }
</script>