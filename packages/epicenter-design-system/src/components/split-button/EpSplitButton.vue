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
  .ep-split-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.1rem;
    > .ep-button {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    // gotta use :deep() to override the dropdown's scoped styles
    .ep-dropdown :deep(.ep-button) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
</style>
