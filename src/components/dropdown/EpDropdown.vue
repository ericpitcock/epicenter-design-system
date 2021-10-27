<template>
  <div
    class="ep-dropdown"
    v-click-outside="closeDropdown"
  >
    <ep-button
      @click.native="toggleDropdown"
      :kind="buttonKind"
      label="Secondary"
      icon="chevron-down"
      iconAlignment="right"
    />
    <div
      v-show="dropdownVisible"
      class="ep-dropdown__menu"
    >
      <div class="ep-dropdown__content"></div>
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
    methods: {
      toggleDropdown() {
        this.dropdownVisible = !this.dropdownVisible
      },
      closeDropdown() {
        this.dropdownVisible = false
      }
    },
    props: {
      buttonKind: {
        type: String,
        default: 'secondary'
      },
      buttonLabel: {
        type: String
      },
      menuItems: {
        type: Object
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-dropdown {
    position: relative;
    &__menu {
      position: absolute;
      top: 100%;
      left: 0;
      min-width: 200px;
      padding-top: 4px;
      z-index: 10;
      .ep-dropdown__content {
        background: var(--foreground);
        border: 1px solid var(--border-color);
        border-radius: 3px;
        box-shadow: 0 5px 8px hsla(0,0,0,0.1);
        height: 300px;
      }
    }
  }
</style>