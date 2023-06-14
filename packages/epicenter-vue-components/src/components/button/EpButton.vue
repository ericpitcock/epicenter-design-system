<template>
  <component
    :is="element"
    :type="type"
    :class="['ep-button', classes]"
    :style="buttonStyles"
    :title="title"
    role="button"
    :tabindex="tabindex"
    :aria-label="label ? undefined : ariaLabel"
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
    >{{ label }}</span>
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
      variant: {
        type: String,
        default: 'secondary',
        validator: value => {
          return [
            'primary',
            'secondary',
            'ghost',
            'danger',
            'warning',
            'success',
            'menu-item'
          ].includes(value)
        }
      },
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
      tabindex: {
        type: Number,
        default: -1
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
      command: {
        type: Function,
        default: undefined
      },
      type: {
        type: String,
        default: 'button',
        validator: value => {
          return ['button', 'submit'].includes(value)
        }
      },
      backgroundColor: {
        type: String,
        default: ''
      },
      backgroundHoverColor: {
        type: String,
        default: ''
      },
      textHoverColor: {
        type: String,
        default: ''
      },
      borderColor: {
        type: String,
        default: ''
      },
      borderRadius: {
        type: String,
        default: ''
      },
      textColor: {
        type: String,
        default: ''
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
        return [
          `ep-button--${this.variant}`,
          {
            [`ep-button--${this.size}`]: this.size != 'default',
            'ep-button--icon-right': this.iconRight,
            'ep-button--icon-left': this.iconLeft,
            'ep-button--disabled': this.disabled,
            'ep-button--outlined': this.outlined,
            'ep-button--menu-item--active': this.isActiveMenuItem,
            // firefox only
            // label only
            'ep-button--label-only': !this.iconLeft && !this.iconRight && this.label,
            // left icon and label
            'ep-button--icon-left': this.iconLeft && !this.iconRight && this.label,
            // right icon and label
            'ep-button--icon-right': !this.iconLeft && this.iconRight && this.label,
            // left and right icon and label
            'ep-button--icon-left-right': this.iconLeft && this.iconRight && this.label,
            // icon right or left and no label
            'ep-button--icon-only': (this.iconLeft || this.iconRight) && !this.label
          }
        ]
      },
      buttonStyles() {
        const styles = {}
        if (this.backgroundColor) {
          styles.background = this.backgroundColor
        }
        if (this.borderColor) {
          styles.borderColor = this.borderColor
        }
        if (this.borderRadius) {
          styles.borderRadius = this.borderRadius
        }
        if (this.textColor) {
          styles.color = this.textColor
        }
        if (this.backgroundHoverColor) {
          styles['--button-hover-color'] = this.backgroundHoverColor
        }
        if (this.textHoverColor) {
          styles['--button-text-hover-color'] = this.textHoverColor
        }
        return styles
      }
    },
    methods: {
      onClick() {
        this.$emit('click')
        if (this.command) {
          this.command()
        }
      }
    }
  }
</script>
