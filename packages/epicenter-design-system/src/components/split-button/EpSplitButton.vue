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
