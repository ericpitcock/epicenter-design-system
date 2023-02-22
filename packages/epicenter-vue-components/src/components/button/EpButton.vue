<template>
  <component
    :is="element"
    :type="type"
    :class="classes"
    :title="title"
    v-bind="$attrs"
    @click="handleClick"
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
    props: {
      kind: {
        type: String,
        default: 'secondary'
      },
      size: {
        type: String,
        default: 'default'
      },
      title: {
        type: String
      },
      label: {
        type: String
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
        default: 'button'
      }
    },
    components: {
      EpIcon
    },
    methods: {
      handleClick() {
        // this.$emit('click')
        if (this.command) {
          this.command()
        }
      }
    },
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
          'ep-button',
          `ep-button--${this.kind}`,
          {
            [`ep-button--${this.size}`]: this.size != 'default',
            'ep-button--icon-right': this.iconRight,
            'ep-button--icon-left': this.iconLeft,
            'ep-button--disabled': this.disabled,
            'ep-button--outlined': this.outlined,
            'ep-button--menu-item--active': this.isActiveMenuItem
          }
        ]
      }
    }
  }
</script>
