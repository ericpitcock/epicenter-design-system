<template>
  <div class="ep-menu">
    <template
      v-for="(item, index) of menuItems"
      :key="item.label + index.toString()"
    >
      <ep-divider
        v-if="item.divider"
        :color="dividerColor"
        margin="1rem 0"
      />
      <div
        v-if="item.section"
        class="ep-menu__section font-size--tiny"
      >
        {{ item.label }}
      </div>
      <div class="ep-menu__item" :data-item="index" >
        <ep-button
          v-if="!item.divider && !item.section"
          kind="menu-item"
          :label="item.label"
          :icon-right="item.iconRight"
          :icon-left="item.iconLeft"
          :is-active-menu-item="menuType === 'nav' && item.label == activeItem"
          @mouseover="itemHover(item, index)"
          @mouseleave="itemLeave(item, index)"
          @click="itemClick(item)"
          v-bind="item.bind"
        />
        <div
          v-if="item.children"
          v-show="activeItemIndex === index"
          class="ep-menu__item__sub-menu"
        >
          <div v-for="child in item.children" class="child">
            <ep-button
              kind="menu-item"
              :label="child.label"
              :is-active-menu-item="menuType === 'nav' && child.label == activeItem"
              @click="itemClick(child)"
              v-bind="child.bind"
            />
          </div>
        </div>
      </div>
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
    data() {
      return {
        activeItemIndex: null
      }
    },
    props: {
      menuType: {
        type: String,
        default: 'default' // default, dropdown, nav
      },
      menuItems: {
        type: Array,
        default: () => []
      },
      activeItem: {
        type: String,
        default: ''
      },
      dividerColor: {
        type: String,
        default: 'var(--border-color)'
      },
    },
    methods: {
      itemHover(item, index) {
        // this.$emit('item-hover', item)
        // if (item.children) {
          // this.$emit('item-hover-children', item.children)
          // show sub-menu
          this.activeItemIndex = index
          console.log('itemHover', index)
        // }
      },
      itemLeave(item, index) {
          this.activeItemIndex = null
          console.log('itemLeave', index)
      },
      itemClick(item) {
        this.$emit('item-click', item)
        if (item.command) {
          item.command(item)
        }
        if (item.to) {
          this.$router.push(item.to)
        }
        if (this.menuType === 'dropdown') {
          this.$parent.closeDropdown()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-menu {
    &__section {
      color: var(--color--primary);
      padding: 0.8rem 0 0.8rem 2.2rem;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      user-select: none;
    }
    &__item {
      position: relative;
      &__sub-menu {
        position: absolute;
        top: 0;
        left: 100%;
        width: 100%;
      }
    }
  }
</style>
