<template>
  <div class="ep-split-button">
    <ep-button v-bind="computedButtonProps" />
    <ep-dropdown v-bind="computedDropdownProps" />
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

<style lang="scss" scoped>
  // gotta use :deep() to override the dropdown's scoped styles
  // need to figure out how this works in normal CSS
  .ep-dropdown :deep(.ep-button) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
</style>
