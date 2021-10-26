<template>
  <component
    :is="element"
    :href="link"
    :class="buttonClasses"
    :disabled="disabled"
    :title="title"
  >
    <span v-if="icon" class="ep-button__icon">
      <ep-icon :name="icon" />
    </span>
    <span v-if="label" class="ep-button__label">{{ label }}</span>
  </component>
</template>

<script>
  import EpIcon from '@/style/icons/EpIcon'

  export default {
    name: 'EpButton',
    props: {
      kind: {
        type: String,
        default: 'secondary'
      },
      // element: {
      //   type: String,
      //   default: 'button'
      // },
      link: {
        type: String,
        default: null
      },
      size: {
        type: String,
        default: 'default'
      },
      title: {
        type: String
      },
      to: {
        type: [String, Object],
        default: '',
      },
      label: {
        type: String
      },
      icon: {
        type: String,
        default: undefined
      },
      iconAlignment: {
        type: String,
        default: 'left'
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    components: {
      EpIcon
    },
    computed: {
      element() {
        const attrs = this.$attrs
        if (attrs && this.to) {
          return 'RouterLink'
        }
        if (attrs && attrs.href) {
          return 'a'
        }
        return 'button'
      },
      buttonClasses() {
        return [
          'ep-button',
          `ep-button--${this.kind}`,
          { [`ep-button--${this.size}`]: this.size != 'default' },
          { 'ep-button--icon-right': this.icon && this.iconAlignment == 'right' },
          { 'ep-button--icon-left': this.icon && this.iconAlignment == 'left'}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @mixin button-theme(
    $bg-color,
    $border-color,
    $font-color,
    $hover-bg-color,
    $active-color
  ) {
    background-color: $bg-color;
    border-width: 1px;
    border-style: solid;
    border-color: $border-color;
    color: $font-color;

    &:hover {
      background-color: $hover-bg-color;
    }

    &:focus {
      // border-color: ;
      // box-shadow: inset 0 0 0 $button-border-width $focus,
      //   inset 0 0 0 ($button-border-width + $button-outline-width) $ui-02;
    }

    &:active {
      background-color: $active-color;
    }
  }

  .ep-button {
    display: inline-flex;
    align-items: center;
    padding: 0;
    border-radius: 3px;
    font-size: var(--font-size--small);
    line-height: 1;
    appearance: none;
    text-decoration: none;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;

    // @TODO figure out accessibility here
    // &:focus {
    //   outline: none;
    // }
    // &::-moz-focus-inner {
    //   border: 0;
    // }

    // kind template
    // $bg-color,
    // $border-color,
    // $font-color,
    // $hover-bg-color,
    // $active-color
    &--primary {
      @include button-theme(
        var(--primary-color--base),
        var(--primary-color--border),
        var(--primary-color--text),
        var(--primary-color--hover),
        var(--primary-color--active),
      );
    }
    &--secondary {
      @include button-theme(
        var(--foreground),
        var(--border-color),
        var(--text-color),
        var(--button-secondary--hover),
        var(--button-secondary--active)
      );
    }
    &--danger {
      @include button-theme(
        var(--danger-red--base),
        var(--danger-red--border),
        var(--danger-red--text),
        var(--danger-red--hover),
        var(--danger-red--active)
      );
    }
    &--warning {
      @include button-theme(
        var(--warning-yellow--base),
        var(--warning-yellow--border),
        var(--warning-yellow--text),
        var(--warning-yellow--hover),
        var(--warning-yellow--active)
      );
    }
    &--success {
      @include button-theme(
        var(--success-green--base),
        var(--success-green--border),
        var(--success-green--text),
        var(--success-green--hover),
        var(--success-green--active)
      );
    }
    &--naked {
      @include button-theme(
        transparent,
        transparent,
        var(--button-naked--text),
        var(--button-naked--hover),
        var(--button-naked--active)
      );
    }
    // size
    &--small {
      .ep-button__icon {
        padding: 0 0.3rem;
      }
      .ep-button__label {
        padding: 0.5rem 0.6rem;
        font-size: var(--font-size--tiny);
      }
    }
    // disabled
    &:disabled {
      background: rgb(219, 219, 219);
      color: rgb(182, 182, 182);
      cursor: not-allowed;
    }
    &--icon-right {
      flex-direction: row-reverse;
    }
    &__icon {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      line-height: 1;
      padding: 0.4rem 0.6rem 0.4rem 0.8rem;
      // when just an icon button, even out the padding
      &:only-child {
        padding-right: 0.8rem;
      }
    }
    &__label {
      padding: 0.8rem 1.2rem;
      .ep-button--icon-right &,
      .ep-button--icon-left & {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
      }
      .ep-button--icon-right & {
        padding-right: 0;
      }
      .ep-button--icon-left & {
        padding-left: 0;
      }
    }
  }
</style>
