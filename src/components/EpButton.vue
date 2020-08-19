<template>
  <component
    :is="element"
    :href="link"
    :class="buttonClasses"
    :disabled="disabled"
  >
    <div v-if="icon" class="button__icon-container">
      <div class="icon">
        <EpIcon :name="iconSource" />
      </div>
    </div>
    <div v-if="label" class="button__text">{{ labelText }}</div>
  </component>
</template>

<script>
  import EpIcon from './EpIcon/EpIcon'

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
        default: false
      },
      labelText: {
        type: String,
        default: undefined
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
        let classes = ['button']
        // kind
        classes.push(`button--${this.kind}`)
        // size
        if (this.size != 'default') classes.push(`button--${this.kind}`)
        // icon
        if (this.icon) {
          classes.push('button--icon')
          classes.push(`button--icon-${this.iconSource}`)
          if (this.iconAlignRight) classes.push(`button--icon-right`)
        }
        // disabled
        if (this.disabled) classes.push(`button--disabled`)

        return classes.join(' ')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @mixin button-theme(
    $bg-color,
    // $border-color,
    $font-color,
    $hover-bg-color,
    $active-color
  ) {
    background-color: $bg-color;
    // border-width: $button-outline-width;
    // border-style: solid;
    // border-color: $border-color;
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

    // .#{$prefix}--btn__icon,
    // .#{$prefix}--btn__icon path {
    //   fill: $icon-color;
    // }
  }

  .button {
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
      $primary-button-color: $blue;
      @include button-theme(
        // $bg-color
        $primary-button-color,
        // $font-color
        $white,
        // $hover-bg-color
        darken($primary-button-color, 5%),
        // $active-color
        lighten($primary-button-color, 5%)
      );
    }
    &--secondary {
      $secondary-button-color: $medium-gray;
      @include button-theme(
        // $bg-color
        $secondary-button-color,
        // $font-color
        $black,
        // $hover-bg-color
        darken($secondary-button-color, 5%),
        // $active-color
        lighten($secondary-button-color, 5%)
      );
    }
    &--tertiary {
      $tertiary-button-color: rgb(133, 228, 223);
      @include button-theme(
        // $bg-color
        $tertiary-button-color,
        // $font-color
        $black,
        // $hover-bg-color
        darken($tertiary-button-color, 6%),
        // $active-color
        lighten($tertiary-button-color, 5%)
      );
    }
    &--naked {
      $naked-button-color: transparent;
      @include button-theme(
        // $bg-color
        $naked-button-color,
        // $font-color
        $black,
        // $hover-bg-color
        $light-gray,
        // $active-color
        #f4f4f4
      );
    }
    &--danger {
      @include button-theme(
        // $bg-color
        $danger-red,
        // $font-color
        $black,
        // $hover-bg-color
        darken($danger-red, 6%),
        // $active-color
        lighten($danger-red, 5%)
      );
    }
    &--warning {
      @include button-theme(
        // $bg-color
        $warning-yellow,
        // $font-color
        $black,
        // $hover-bg-color
        darken($warning-yellow, 6%),
        // $active-color
        lighten($warning-yellow, 5%)
      );
    }
    &--success {
      @include button-theme(
        // $bg-color
        $success-green,
        // $font-color
        $black,
        // $hover-bg-color
        darken($success-green, 6%),
        // $active-color
        lighten($success-green, 5%)
      );
    }
    // size
    &--large {
      height: 40px;
      padding: 0 20px;
      font-size: 14px;
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
      .button--icon & {
        margin-left: 8px;
      }
      .button--icon-right & {
        margin-right: 8px;
        margin-left: 0;
      }
    }
  }
</style>