<template>
  <div class="ep-menu">
    <template v-for="(item, index) of menuItems" :key="item.label + index.toString()">
      <ep-divider v-if="item.divider" margin="1rem 0" />
      <div v-if="item.section" class="ep-menu__section font-size--tiny">{{ item.label }}</div>
      <ep-button
        v-if="!item.divider && !item.section"
        kind="menu-item"
        :label="item.label"
        :icon-right="item.iconRight"
        :icon-left="item.iconLeft"
        @click="itemClick(item)"
        v-bind="item.bind"
        :class="{ 'active': item.label === activeItem }"
      />
    </template>
  </div>
</template>

<script>
  import EpDivider from '@/components/divider/EpDivider'
  import EpButton from '@/atoms/button/EpButton'

  export default {
    name: 'EpMenu',
    components: {
      EpDivider,
      EpButton
    },
    props: {
      activeItem: {
        type: String,
        default: ''
      },
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
          item.command(item)
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
  .ep-menu__section {
    color: var(--color--primary);
    padding: 0.8rem 0 0.8rem 2.2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    user-select: none;
  }
</style>
