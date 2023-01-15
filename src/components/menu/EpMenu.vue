<template>
  <ep-container v-bind="containerProps" @mouseleave="menuLeave()">
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
          @mouseleave="itemLeave(item, index)"
        >
          <ep-menu
            :container-props="containerProps"
            :menu-items="item.children"
          />
        </div>
      </div>
    </template>
  </div>
  </ep-container>
</template>

<script>
  import EpContainer from '@/components/container/EpContainer'
  import EpDivider from '@/components/divider/EpDivider'
  import EpButton from '@/components/button/EpButton'

  export default {
    name: 'EpMenu',
    components: {
      EpContainer,
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
      containerProps: {
        type: Object,
        default: () => {}
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
        this.activeItemIndex = index
        // console.log('itemHover', index)
      },
      itemLeave(item, index) {
        // if item has children, only close if you're not hovering those children
        if (item.children) {
          // check if the mouse is hovering the children
          const children = document.querySelector(`[data-item="${index}"] .ep-menu__item__sub-menu`)
          const rect = children.getBoundingClientRect()
          // get mouse position
          const event = window.event
          const x = event.clientX
          const y = event.clientY
          if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
            this.activeItemIndex = null
          }
        } else {
          this.activeItemIndex = null
        }
      },
      menuLeave() {
        this.activeItemIndex = null
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
        top: -1rem;
        left: calc(100% - 1rem);
        width: 100%;
      }
    }
  }
</style>
