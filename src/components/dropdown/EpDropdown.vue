<template>
  <div class="ep-dropdown" v-click-outside="closeDropdown">
    <div @click="toggleDropdown">
      <slot v-if="hasTrigger" name="trigger" />
      <ep-button v-bind="buttonProps" />
    </div>
    <div
      v-show="dropdownVisible"
      :class="[
        'ep-dropdown__container',
        { 'ep-dropdown__container--align-right': alignRight }
      ]"
    >
      <div class="ep-dropdown__content">
        <slot v-if="hasContent" name="content" />
        <ep-menu v-else :model="model" isDropdown />
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
        dropdownVisible: false
      }
    },
    props: {
      button: {
        type: Object,
        default: () => ({
          kind: 'secondary',
          size: 'default',
          title: 'Default Dropdown',
          // label: 'Default Dropdown',
          iconRight: 'chevron-down',
          iconLeft: undefined
        })
      },
      label: {
        type: String,
        default: 'Dropdown'
      },
      model: {
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
          ...this.button,
          label: this.label
        }
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
        console.log('selectItem')
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
      background: var(--background-4);
      padding: 1rem 0;
      border: 1px solid var(--border-color--lighter);
      border-radius: 3px;
      box-shadow: var(--drop-shadow);
    }
  }
</style>
