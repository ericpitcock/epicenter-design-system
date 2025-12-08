<template>
  <div class="ep-split-button">
    <ep-button
      v-bind="computedButtonProps"
      @click="$emit('button-click')"
    >
      {{ computedButtonProps.label }}
    </ep-button>
    <ep-dropdown
      v-bind="computedDropdownProps"
      @click="$emit('dropdown-select', $event)"
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
      /**
       * If true, both the button and dropdown are disabled.
       */
      disabled: {
        type: Boolean,
        default: false
      },
      /**
       * Props to pass to the internal EpButton component.
       */
      buttonProps: {
        type: Object,
        default: () => ({})
      },
      /**
       * Props to pass to the internal EpDropdown component.
       */
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
