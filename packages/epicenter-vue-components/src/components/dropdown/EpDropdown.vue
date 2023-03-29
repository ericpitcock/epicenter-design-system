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
      <ep-button v-bind="buttonProps" />
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
          :container-props="containerProps"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import clickOutside from '../../directives/clickOutside'
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
      button: {
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
          kind: 'secondary',
          size: 'default',
          title: '',
          label: 'Default Dropdown',
          iconRight: { name: 'chevron-down' },
          iconLeft: undefined
        }
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
      }
    },
    methods: {
      toggleDropdown() {
        if (this.showOnHover) {
          return
        }
        this.dropdownVisible = !this.dropdownVisible
      },
      closeDropdown() {
        this.dropdownVisible = false
      },
      selectItem(item) {
        this.$emit('select', item)
        this.closeDropdown()
      },
      onMouseover() {
        if (this.showOnHover) {
          this.dropdownVisible = true
        }
      },
      onMouseleave() {
        if (this.showOnHover) {
          this.dropdownVisible = false
        }
      }
    }
  }
</script>
