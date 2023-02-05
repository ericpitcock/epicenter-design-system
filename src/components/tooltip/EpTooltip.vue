<template>
  <div class="ep-tooltip
    {{ placement }}
    {{ show ? 'show' : '' }}
    {{ disabled ? 'disabled' : '' }}
    {{ isActive ? 'active' : '' }}"
    :style="style"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @click="onClick"
  >
    <div class="ep-tooltip__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'EpTooltip',
  props: {
    placement: {
      type: String,
      default: 'top'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: false
    },
    style: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    onMouseEnter () {
      this.$emit('mouseenter')
    },
    onMouseLeave () {
      this.$emit('mouseleave')
    },
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.ep-tooltip {
  position: relative;
  display: inline-block;
  &.top {
    .ep-tooltip__content {
      top: -5px;
      left: 50%;
      transform: translateX(-50%);
      &:after {
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  &.bottom {
    .ep-tooltip__content {
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      &:after {
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  &.left {
    .ep-tooltip__content {
      top: 50%;
      left: -5px;
      transform: translateY(-50%);
      &:after {
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
      }
    }
  }
  &.right {
    .ep-tooltip__content {
      top: 50%;
      right: -5px;
      transform: translateY(-50%);
      &:after {
        top: 50%;
        right: 100%;
        transform: translateY(-50%);
      }
    }
  }
  &.show {
    .ep-tooltip__content {
      visibility: visible;
      opacity: 1;
    }
  }
  &.disabled {
    .ep-tooltip__content {
      visibility: hidden;
      opacity: 0;
    }
  }
  &.active {
    .ep-tooltip__content {
      visibility: visible;
      opacity: 1;
    }
  }
  .ep-tooltip__content {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    z-index: var(--z-index--tooltip);
    background-color: var(--color--primary);
    color: var(--color--white);
    text-align: center;
    border-radius: 6px;
    padding: 5px 10px;
    transition: opacity 0.3s;
    &:after {
      content: '';
      position: absolute;
      border-width: 5px;
      border-style: solid;
      border-color: var(--color--primary) transparent transparent transparent;
    }
  }
}
</style>