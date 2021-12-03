<template>
  <div class="ep-menu">
    <template v-for="(item, index) of menuItems" :key="item.label + index.toString()">
      <ep-divider v-if="item.divider" />
      <ep-button
        v-else
        kind="menu-item"
        :label="item.label"
        :iconRight="item.iconRight"
        :iconLeft="item.iconLeft"
        @click="itemClick(item)"
        v-bind="item.bind"
      />
    </template>
  </div>
</template>

<script>
  import EpDivider from '@/components/divider/EpDivider'
  import EpButton from '@/components/button/EpButton'

  export default {
    name: 'EpMenu',
    components: {
      EpDivider,
      EpButton
    },
    props: {
      isDropdown: {
        type: Boolean,
        default: false
      },
      menuItems: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      itemClick(item) {
        // if (item.disabled) {
        //   return
        // }
        if (item.command) {
          item.command()
        }
        if (item.to) {
          this.$router.push(item.to)
        }
        if (this.isDropdown) {
          this.$parent.closeDropdown()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-menu {
  }
</style>
