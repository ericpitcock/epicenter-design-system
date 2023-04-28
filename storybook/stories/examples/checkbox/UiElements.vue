<template>
  <div
    class="ui-elements"
    :style="{ fontFamily }"
  >
    <ep-button
      label="Button"
      style="font-family: inherit; !important"
      outlined
    />
    <ep-dropdown
      :button="{
        label: 'Dropdown',
        outlined: true
      }"
      :container-props="{
        contentPadding: '1rem 0',
        backgroundColor: 'var(--interface-overlay)',
        borderColor: 'var(--border-color--lighter)',
        borderRadius: 'var(--border-radius)',
      }"
      :menu-items="[
        { label: 'Item 1' },
        { label: 'Item 2' },
        { label: 'Item 3' }
      ]"
      style="font-family: inherit; !important"
    />
  </div>
</template>

<script>
  import EpButton from '@/components/button/EpButton.vue'
  import EpDropdown from '@/components/dropdown/EpDropdown.vue'

  export default {
    name: 'UiElements',
    components: {
      EpButton,
      EpDropdown
    },
    props: {
      fontFamily: {
        type: String,
        default: 'inherit'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ui-elements {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
</style>