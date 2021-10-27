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
      <ep-menu :menuItems="menuItems" />
    </div>
  </div>
</template>

<script>
  import clickOutside from '@/directives/clickOutside'
  import EpButton from '@/components/button/EpButton'
  import EpMenu from '@/components/menu/EpMenu'

  export default {
    name: 'EpDropdown',
    directives: {
      clickOutside
    },
    components: {
      EpButton,
      EpMenu
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
        type: Array
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
    }
  }
</style>