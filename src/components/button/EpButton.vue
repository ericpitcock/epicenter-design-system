<template>
  <component
    :is="element"
    :href="link"
    :class="buttonClasses"
    :disabled="disabled"
  >
    <div v-if="icon" class="ep-button__icon-container">
      <div class="icon">
        <EpIcon :name="iconSource" />
      </div>
    </div>
    <div v-if="label" class="ep-button__text">{{ labelText }}</div>
  </component>
</template>

<script>
  import EpIcon from '@/style/icons/EpIcon'

  export default {
    name: 'EpButton',
    props: {
      kind: {
        type: String,
        required: true
      },
      element: {
        type: String,
        default: 'button'
      },
      link: {
        type: String,
        default: null
      },
      size: {
        type: String,
        default: 'default'
      },
      label: {
        type: Boolean,
        default: true
      },
      labelText: {
        type: String,
        default: 'Default button text'
      },
      icon: {
        type: Boolean,
        default: false
      },
      iconSource: {
        type: String,
        default: undefined
      },
      iconAlignRight: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      tipLabel: {
        type: String,
        default: undefined
      },
      tipPosition: {
        type: String,
        default: undefined
      },
      tipAlignment: {
        type: String,
        default: undefined
      }
    },
    components: {
      EpIcon
    },
    computed: {
      buttonClasses() {
        return [
          'ep-button',
          `ep-button--${this.kind}`,
          { [`ep-button--${this.size}`]: this.size != 'default' },
          { 'ep-button--icon': this.icon },
          { [`ep-button--icon-${this.iconSource}`]: this.icon },
          { 'ep-button--icon-right': this.icon && this.iconAlignRight },
          { 'ep-button--disabled': this.disabled }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @mixin button-theme(
    $bg-color,
    // $border-color,
    $font-color,
    // $hover-bg-color,
    // $active-color
  ) {
    background-color: $bg-color;
    // border-width: $button-outline-width;
    // border-style: solid;
    // border-color: $border-color;
    color: $font-color;

    &:hover {
      // background-color: $hover-bg-color;
    }

    &:focus {
      // border-color: ;
      // box-shadow: inset 0 0 0 $button-border-width $focus,
      //   inset 0 0 0 ($button-border-width + $button-outline-width) $ui-02;
    }

    &:active {
      // background-color: $active-color;
    }

    // .#{$prefix}--btn__icon,
    // .#{$prefix}--btn__icon path {
    //   fill: $icon-color;
    // }
  }

  .ep-button {
    display: inline-flex;
    align-items: center;
    padding: 9px 14px 9px 14px;
    // height: 31px;
    border: 0;
    border-radius: 3px;
    font-size: 14px;
    line-height: normal;
    appearance: none;
    text-decoration: none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    &::-moz-focus-inner {
      border: 0;
    }
    // kind
    &--primary {
      // $primary-button-color: var(--theme-primary);
      @include button-theme(
        // $bg-color
        var(--theme-primary),
        //$font-color
        var(--main-text)
      );
    }
    &--secondary {
      // $secondary-button-color: $medium-gray;
      @include button-theme(
        // $bg-color
        var(--theme-primary),
        // $font-color
        var(--main-text),
        // $hover-bg-color darken($secondary-button-color, 5%),
        // $active-color lighten($secondary-button-color, 5%)
      );
    }

    // tertiary is not a button kind, removing all together

    &--naked {
      $naked-button-color: transparent;
      @include button-theme(
        // $bg-color
          $naked-button-color,
        // $font-color
          var(--main-text),
        // $hover-bg-color $light-gray,
        // $active-color #f4f4f4
      );
    }

    // TODO move 'danger', 'warning', and 'success' to 'button appearance, not button kind

    // size
    &--small {
      padding: 7.5px 12px 7.5px 12px;
      font-size: 12px;
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
    &__icon-container {
      display: flex;
      align-items: center;
      justify-content: center;
      // height: 31px;
      .icon {
        display: inline-block;
        width: 17px;
        height: 17px;
        // background: rgba(0,0,0,0.15);
      }
    }
    &__text {
      // line-height: 30px;
      // display: inline;
      // vertical-align: text-top;
      position: relative;
      top: -1px;
      .ep-button--icon & {
        margin-left: 8px;
      }
      .ep-button--icon-right & {
        margin-right: 8px;
        margin-left: 0;
      }
    }
  }
</style>
