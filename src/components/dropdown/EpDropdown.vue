<template>
  <div class="ep-dropdown" v-click-outside="closeDropdown">
    <div @click="toggleDropdown">
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
  // import EpDropdownItem from './EpDropdownItem'

  export default {
    name: 'EpDropdown',
    directives: {
      clickOutside
    },
    components: {
      // EpDropdownItem
    },
    data: () => ({
      dropdownVisible: false
    }),
    props: {
      alignRight: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      toggleDropdown() {
        this.dropdownVisible = !this.dropdownVisible
      },
      closeDropdown() {
        this.dropdownVisible = false
      },
      selectItem(item) {
        this.$emit('select', item)
        this.closeDropdown()
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
      box-shadow: var(--drop-shadow);
    }
  }
</style>
