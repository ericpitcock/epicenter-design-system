<template>
  <component
    :is="element"
    :class="classes"
    :title="title"
    v-bind="$attrs"
  >
    <span v-if="iconLeft" class="ep-button__icon ep-button__icon--left">
      <ep-icon :name="iconLeft" />
    </span>
    <span v-if="label" class="ep-button__label">{{ label }}</span>
    <span v-if="iconRight" class="ep-button__icon ep-button__icon--right">
      <ep-icon :name="iconRight" />
    </span>
  </component>
</template>

<script>
  import EpIcon from '@/components/icon/EpIcon'

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
      iconRight: {
        type: String,
        default: undefined
      },
      iconLeft: {
        type: String,
        default: undefined
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
          { [`ep-button--${this.size}`]: this.size != 'default' },
          { 'ep-button--icon-right': this.iconRight },
          { 'ep-button--icon-left': this.iconLeft},
          { 'ep-button--disabled': this.disabled}
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
    $hover-font-color,
    $active-color
  ) {
    background-color: $bg-color;
    border-width: 1px;
    border-style: solid;
    border-color: $border-color;
    color: $font-color;

    &:hover {
      color: $hover-font-color;
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
    justify-content: space-between;
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

    // kind template
    // $bg-color,
    // $border-color,
    // $font-color,
    // $hover-bg-color,
    // $hover-font-color,
    // $active-color
    &--primary {
      @include button-theme(
        var(--primary-color--base),
        var(--primary-color--border),
        var(--primary-color--text),
        var(--primary-color--hover),
        var(--primary-color--text),
        var(--primary-color--active),
      );
    }
    &--secondary {
      @include button-theme(
        var(--background-4),
        var(--border-color),
        var(--text-color),
        var(--button-secondary--hover),
        var(--text-color),
        var(--button-secondary--active)
      );
    }
    &--danger {
      @include button-theme(
        var(--danger-red--base),
        var(--danger-red--border),
        var(--danger-red--text),
        var(--danger-red--hover),
        var(--danger-red--text),
        var(--danger-red--active)
      );
    }
    &--warning {
      @include button-theme(
        var(--warning-yellow--base),
        var(--warning-yellow--border),
        var(--warning-yellow--text),
        var(--warning-yellow--hover),
        var(--warning-yellow--text),
        var(--warning-yellow--active)
      );
    }
    &--success {
      @include button-theme(
        var(--success-green--base),
        var(--success-green--border),
        var(--success-green--text),
        var(--success-green--hover),
        var(--success-green--text),
        var(--success-green--active)
      );
    }
    &--naked {
      @include button-theme(
        transparent,
        transparent,
        var(--button-naked--text),
        var(--button-naked--hover),
        var(--text-color),
        var(--button-naked--active)
      );
    }
    &--menu-item {
      @include button-theme(
        transparent,
        transparent,
        var(--button-naked--text),
        var(--button-menu-item--hover),
        var(--button-menu-item-text-hover),
        var(--button-menu-item--active)
      );
      width: 100%;
      border-radius: 0;
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
    &--disabled {
      @include button-theme(
        var(--button-disabled--bg-color),
        var(--button-disabled--border-color),
        var(--button-disabled--text),
        var(--button-disabled--bg-color),
        var(--button-disabled--text),
        var(--button-disabled--bg-color)
      );
      pointer-events: none;
      cursor: default;
    }
    // &--icon-right {
    //   // flex-direction: row-reverse;
    //   .ep-button__icon {
    //     // padding: 0.4rem 0.8rem 0.4rem 0.6rem;
    //   }
    // }
    &__icon {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      line-height: 1;
      & + & {
        padding-left: 0rem;
      }
      &--left {
        padding: 0.4rem 0.6rem 0.4rem 0.8rem;
      }
      &--right {
        padding: 0.4rem 0.8rem 0.4rem 0.6rem;
      }
      &:only-child {
        padding-right: 0.8rem;
      }
    }
    &__label {
      flex: 1;
      text-align: left;
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
