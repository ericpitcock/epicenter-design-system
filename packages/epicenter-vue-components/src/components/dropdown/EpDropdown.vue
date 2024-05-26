<template>
  <div
    v-click-outside="closeDropdown"
    class="ep-dropdown"
    @mouseleave="onMouseleave"
  >
    <div
      @click="toggleDropdown"
      @mouseover="onMouseover"
    >
      <slot
        v-if="$slots.trigger"
        name="trigger"
      />
      <ep-button v-bind="computedButtonProps" />
    </div>
    <div
      v-show="dropdownVisible"
      :class="classes"
    >
      <div class="ep-dropdown__content">
        <slot
          v-if="$slots.content"
          name="content"
        />
        <ep-menu
          v-else
          :menu-items="menuItems"
          menu-type="dropdown"
          divider-color="var(--border-color--lighter)"
          :container-props="computedContainerProps"
          @click="onClick"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import clickOutside from '../../directives/clickOutside.js'
  import EpButton from '../button/EpButton.vue'
  import EpMenu from '../menu/EpMenu.vue'

  export default {
    name: 'EpDropdown',
    components: {
      EpButton,
      EpMenu
    },
    directives: {
      clickOutside
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      buttonProps: {
        type: Object,
        default: () => ({})
      },
      containerProps: {
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
      },
      showOnHover: {
        type: Boolean,
        default: false
      }
    },
    emits: ['select'],
    data() {
      return {
        dropdownVisible: false,
        buttonDefaults: {
          variant: 'secondary',
          size: 'default',
          title: '',
          label: 'Default Dropdown',
          iconRight: { name: 'chevron-down' },
          iconLeft: undefined
        }
      }
    },
    computed: {
      computedButtonProps() {
        return {
          ...this.disabled && { disabled: true },
          ...this.buttonDefaults,
          ...this.buttonProps,
        }
      },
      computedContainerProps() {
        return {
          styles: {
            '--ep-container-min-width': '15rem',
            '--ep-container-bg-color': 'var(--interface-overlay)',
            ...this.containerProps,
          },
        }
      },
      classes() {
        return [
          'ep-dropdown__container',
          { 'ep-dropdown__container--align-right': this.alignRight }
        ]
      }
    },
    methods: {
      toggleDropdown() {
        if (this.disabled || this.showOnHover) {
          return
        }
        this.dropdownVisible = !this.dropdownVisible
      },
      closeDropdown() {
        if (this.disabled) {
          return
        }
        this.dropdownVisible = false
      },
      // selectItem(item) {
      //   this.$emit('select', item)
      //   this.closeDropdown()
      // },
      onClick(item) {
        this.$emit('select', item)
        this.closeDropdown()
      },
      onMouseover() {
        if (this.disabled) {
          return
        }
        if (this.showOnHover) {
          this.dropdownVisible = true
        }
      },
      onMouseleave() {
        if (this.disabled) {
          return
        }
        if (this.showOnHover) {
          this.dropdownVisible = false
        }
      }
    }
  }
</script>
