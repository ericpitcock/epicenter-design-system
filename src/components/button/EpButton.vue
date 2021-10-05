<template>
  <component
    :is="element"
    :href="link"
    :class="buttonClasses"
    :disabled="disabled"
  >
    <span v-if="icon" class="ep-button__icon">
      <!-- <span class="icon"> -->
        <EpIcon :name="iconSource" />
      <!-- </span> -->
    </span>
    <span v-if="label" class="ep-button__text">{{ labelText }}</span>
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
  }

  .ep-button {
    display: inline-flex;
    align-items: center;
    // vertical-align: bottom;
    padding: 0.9rem 1.4rem; //9px 14px
    border: 0;
    border-radius: 3px;
    font-size: inherit;
    line-height: 1;
    appearance: none;
    text-decoration: none;
    cursor: pointer;
    user-select: none;
    
    // @TODO figure out accessibility here
    // &:focus {
    //   outline: none;
    // }
    // &::-moz-focus-inner {
    //   border: 0;
    // }
    // kind
    &--primary {
      @include button-theme(
        // $bg-color
        var(--primary-color),
        // $font-color
        var(--primary-color-text)
      );
    }
    &--secondary {
      @include button-theme(
        // $bg-color
        var(--primary-color),
        // $font-color
        var(--main-text),
        // $hover-bg-color darken($secondary-button-color, 5%),
        // $active-color lighten($secondary-button-color, 5%)
      );
    }
    &--naked {
      @include button-theme(
        // $bg-color
        transparent,
        // $font-color
        var(--main-text),
        // $hover-bg-color $light-gray,
        // $active-color #f4f4f4
      );
    }
    // size
    &--small {
      padding: 0.75rem 1.2rem; //7.5px 12px
      font-size: var(--font-size--small)
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
      display: inline-flex;
      align-items: center;
      justify-content: center;
      // .icon {
      //   display: inline-block;
      //   width: 17px;
      //   height: 17px;
      // }
    }
    &__icon {
      display: inline-block;
      line-height: 1;
      // width: 17px;
      // height: 17px;
    }
    &__text {
      padding: 0.3rem 0;
      .ep-button--icon & {
        margin-left: 0.8rem;
      }
      .ep-button--icon-right & {
        margin-right: 0.8rem;
        margin-left: 0;
      }
    }
  }
</style>
