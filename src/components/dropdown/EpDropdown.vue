<template>
  <div class="ep-dropdown" v-click-outside="closeDropdown">
    <div @click="onClick">
      <slot name="trigger" />
    </div>
    <div
      v-show="dropdownVisible"
      :class="[
        'ep-dropdown__container',
        { 'ep-dropdown__container--align-right': alignRight }
      ]"
    >
      <div class="ep-dropdown__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
  import clickOutside from '@/directives/clickOutside'
  import EpButton from '@/components/button/EpButton'

  export default {
    name: 'EpDropdown',
    directives: {
      clickOutside
    },
    components: {
      EpButton
    },
    data: () => ({
      dropdownVisible: false
    }),
    computed: {
      icon() {
        return this.chevron ? 'chevron-down' : this.buttonIcon
      }
    },
    methods: {
      onClick() {
        this.toggleDropdown()
      },
      toggleDropdown() {
        this.dropdownVisible = !this.dropdownVisible
      },
      closeDropdown() {
        this.dropdownVisible = false
      }
    },
    props: {
      alignRight: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-dropdown {
    position: relative;
    &__container {
      position: absolute;
      top: 100%;
      left: 0;
      min-width: 200px;
      padding-top: 4px;
      z-index: 10;
      &--align-right {
        right: 0;
        left: auto;
      }
    }
    &__content {
      display: flex;
      flex-direction: column;
      background: var(--foreground);
      padding: 1rem 0;
      border: 1px solid var(--foreground-border);
      border-radius: 3px;
      box-shadow: var(--default-drop-shadow);
    }
  }
</style>
