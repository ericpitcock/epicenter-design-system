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
    <label
      v-show="label && hasInput || hasFocus"
      class="ep-input-styler__inner__label"
      :for="id"
    >
      {{ label }}
    </label>
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
      id: {
        type: String,
        default: ''
      },
      hasFocus: {
        type: Boolean,
        default: false
      },
      hasInput: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: ''
      },
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
    data() {
      return {
        showLabel: false,
      }
    },
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
    // mounted() {
    //   // listen for focus event on the input in the slot
    //   const slot = this.$slots.default()
    //   if (slot && slot[0]) {
    //     slot[0].elm.addEventListener('focus', () => {
    //       this.showLabel = true
    //     })
    //   }
    // },
    mounted() {
      // const childComponentInstance = this.$slots.default()[0].componentInstance
      // childComponentInstance.$on('focus', this.onFocus)
      // console.log('mounted', this.$slots.default()[0])
      // this.$refs.childComponent.$on('focus', this.onFocus)
    },
    methods: {
      onClick() {
        if (!this.iconRightVisible) return
        this.$emit('click')
      },
      onFocus() {
        this.showLabel = true
        console.log('focus')
      },
    },
  }
</script>