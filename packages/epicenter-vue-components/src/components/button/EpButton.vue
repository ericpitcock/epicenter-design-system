<template>
  <component
    :is="element"
    :type
    :class="['ep-button', classes]"
    :style="styles"
    :title="title"
    :aria-label="ariaLabel ? ariaLabel : label"
    :disabled="disabled"
    @click="onClick"
  >
    <span
      v-if="iconLeft"
      class="ep-button__icon ep-button__icon--left"
    >
      <ep-icon v-bind="iconLeft" />
    </span>
    <span
      v-if="label"
      class="ep-button__label"
    >
      {{ label }}
    </span>
    <span
      v-if="iconRight"
      class="ep-button__icon ep-button__icon--right"
    >
      <ep-icon v-bind="iconRight" />
    </span>
  </component>
</template>

<script>
  import EpIcon from '../icon/EpIcon.vue'

  export default {
    name: 'EpButton',
    components: {
      EpIcon
    },
    props: {
      size: {
        type: String,
        default: 'default',
        validator: value => {
          return [
            'small',
            'default',
            'large',
            'xlarge'
          ].includes(value)
        }
      },
      title: {
        type: String,
        default: ''
      },
      ariaLabel: {
        type: String,
        default: ''
      },
      label: {
        type: String,
        default: ''
      },
      iconLeft: {
        type: Object,
        default: undefined
      },
      iconRight: {
        type: Object,
        default: undefined
      },
      disabled: {
        type: Boolean,
        default: false
      },
      outlined: {
        type: Boolean,
        default: false
      },
      isActiveMenuItem: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'button',
        validator: value => {
          return ['button', 'submit'].includes(value)
        }
      },
      styles: {
        type: Object,
        default: () => ({})
      },
    },
    emits: ['click'],
    computed: {
      element() {
        const attrs = this.$attrs
        if (attrs && attrs.to) {
          return 'router-link'
        }
        if (attrs && attrs.href) {
          return 'a'
        }
        return 'button'
      },
      classes() {
        return {
          [`ep-button--${this.size}`]: this.size != 'default',
          'ep-button--icon-right': this.iconRight,
          'ep-button--icon-left': this.iconLeft,
          'ep-button--disabled': this.disabled,
          'ep-button--outlined': this.outlined,
          'ep-button--menu-item--active': this.isActiveMenuItem,
        }
      },
    },
    methods: {
      onClick() {
        this.$emit('click')
      }
    }
  }
</script>
