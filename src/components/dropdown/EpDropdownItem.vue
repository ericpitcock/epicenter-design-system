<template>
  <div class="ep-dropdown-item" @click="onClick">
    <ep-button
      v-if="!item.divider"
      kind="menu-item"
      :label="item.label"
      :icon="item.icon"
      v-bind="item.bind"
    />
    <ep-divider v-else :key="`divider-${index}`" />
  </div>
</template>

<script>
  import EpButton from '@/components/button/EpButton'
  import EpDivider from '@/components/dropdown/EpDivider'

  export default {
    name: 'EpDropdownItem',
    components: {
      EpButton,
      EpDivider
    },
    props: {
      item: {
        type: Object,
        required: true
      },
      index: {
        type: Number,
        required: true
      }
    },
    methods: {
      onClick(event) {
        this.$parent.closeDropdown()
        this.$emit('click')
      }
    }
  }
</script>
