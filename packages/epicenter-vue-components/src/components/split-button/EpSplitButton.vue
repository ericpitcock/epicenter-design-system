<template>
  <div class="ep-split-button">
    <ep-button
      v-bind="computedButtonProps"
      @click="$emit('button-click')"
    />
    <ep-dropdown
      v-bind="computedDropdownProps"
      @select="$emit('dropdown-select', $event)"
    />
  </div>
</template>

<script>
  import EpButton from '../button/EpButton.vue'
  import EpDropdown from '../dropdown/EpDropdown.vue'

  export default {
    name: 'EpSplitButton',
    components: {
      EpButton,
      EpDropdown
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
      dropdownProps: {
        type: Object,
        default: () => ({})
      }
    },
    emits: ['button-click', 'dropdown-select'],
    computed: {
      computedButtonProps() {
        return {
          ...this.buttonProps,
          ...this.disabled && { disabled: true }
        }
      },
      computedDropdownProps() {
        return {
          ...this.dropdownProps,
          ...this.disabled && { disabled: true }
        }
      }
    }
  }
</script>
