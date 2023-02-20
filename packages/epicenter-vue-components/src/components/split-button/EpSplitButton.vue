<template>
  <div class="ep-split-button">
    <ep-button v-bind="buttonProps" />
    <ep-dropdown v-bind="dropdownProps" />
  </div>
</template>

<script>
  import EpButton from '../button/EpButton'
  import EpDropdown from '../dropdown/EpDropdown'

  export default {
    name: 'EpSplitButton',
    components: {
      EpButton,
      EpDropdown
    },
    props: {
      buttonProps: {
        type: Object,
        default: () => ({})
      },
      dropdownProps: {
        type: Object,
        default: () => ({})
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
