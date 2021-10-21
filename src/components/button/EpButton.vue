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
    <span v-if="label" class="ep-button__label">{{ labelText }}</span>
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
    $border-color,
    $font-color,
    // $hover-bg-color,
    // $active-color
  ) {
    background-color: $bg-color;
    border-width: 1px;
    border-style: solid;
    border-color: $border-color;
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
    padding: 0;
    // vertical-align: bottom;
    // padding-top: 0.45rem; // 6px
    // padding-right: 1.2rem; // 12px
    // padding-bottom: 0.45rem; // 6px
    // padding-left: 0;
    // border: 1px solid ;
    border-radius: 3px;
    // font-size: inherit;
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
        var(--primary-color),
        var(--primary-color-border),
        var(--primary-color-text)
      );
    }
    &--secondary {
      @include button-theme(
        // chamge these
        var(--gray-4),
        var(--gray-7),
        var(--primary-color-text)
      );
    }
    &--naked {
      @include button-theme(
        transparent,
        transparent,
        var(--main-text)
      );
    }
    // size
    &--small {
      padding: 0.4rem 1rem; //7.5px 12px
      font-size: var(--font-size--small);
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
      display: inline-flex;
      justify-content: center;
      align-items: center;
      line-height: 1;
      // background: red;
      // width: 4rem;
      padding: 0.55rem 0.8rem; //0.55rem 1rem;
      height: 100%;
      // width: 17px;
      // height: 17px;
    }
    &__label {
      // padding: 0.8rem 0; // 8px
      padding-left: 0;
      padding-right: 1.2rem;
      .ep-button--icon-right & {
        padding-left: 1.2rem;
        padding-right: 0;
      }
      // background: green;
      // .ep-button--icon & {
      //   margin-left: 0.8rem;
      // }
      // .ep-button--icon-right & {
      //   margin-right: 0.8rem;
      //   margin-left: 0;
      // }
    }
  }
</style>
