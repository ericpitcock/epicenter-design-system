<template>
  <div class="ep-dropdown-item" @click="selectItem">
    <ep-button
      v-if="!item.divider"
      kind="menu-item"
      :label="item.label"
      :icon-left="item.icon"
      v-bind="item.bind"
    />
    <ep-divider v-else :key="`divider-${index}`" />
  </div>
</template>

<script>
  import EpButton from '@/components/button/EpButton'
  import EpDivider from '@/components/divider/EpDivider'

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
      selectItem() {
        this.$parent.selectItem()
        this.$emit('click')
      }
    }
  }
</script>
