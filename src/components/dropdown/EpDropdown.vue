<template>
  <div class="ep-dropdown" v-click-outside="closeDropdown">
    <div @click="toggleDropdown">
      <slot v-if="hasTrigger" name="trigger" />
      <ep-button v-bind="buttonProps" />
    </div>
    <div
      v-show="dropdownVisible"
      :class="classes"
    >
      <div class="ep-dropdown__content">
        <slot v-if="hasContent" name="content" />
        <ep-menu v-else :menuItems="menuItems" menuType="dropdown" />
      </div>
    </div>
  </div>
</template>

<script>
  import clickOutside from '@/directives/clickOutside'
  import EpButton from '@/components/button/EpButton'
  import EpMenu from '@/components/menu/EpMenu'

  export default {
    name: 'EpDropdown',
    components: {
      EpButton,
      EpMenu
    },
    directives: {
      clickOutside
    },
    data() {
      return {
        dropdownVisible: false,
        buttonDefaults: {
          kind: 'secondary',
          size: 'default',
          title: 'Default Dropdown',
          label: 'Default Dropdown',
          iconRight: { name: 'chevron-down' },
          iconLeft: undefined
        }
      }
    },
    props: {
      button: {
        type: Object,
        default: () => ({})
      },
      menuItems: {
        type: Array,
        default: () => []
      },
      alignRight: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      buttonProps() {
        return {
          ...this.buttonDefaults,
          ...this.button
        }
      },
      classes() {
        return [
          'ep-dropdown__container',
          { 'ep-dropdown__container--align-right': this.alignRight }
        ]
      },
      hasTrigger() {
        return !!this.$slots.trigger
      },
      hasContent() {
        return !!this.$slots.content
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
    width: fit-content;
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
      background: var(--background-4);
      padding: 1rem 0;
      border: 1px solid var(--border-color--lighter);
      border-radius: 3px;
      box-shadow: var(--drop-shadow);
      z-index: 20;
    }
  }
</style>
