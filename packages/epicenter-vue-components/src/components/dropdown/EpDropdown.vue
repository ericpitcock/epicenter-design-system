<template>
  <div
    class="ep-dropdown"
    v-click-outside="closeDropdown"
  >
    <div @click="toggleDropdown">
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
          :menuItems="menuItems"
          menuType="dropdown"
          dividerColor="var(--border-color--lighter)"
          :containerProps="containerProps"
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
