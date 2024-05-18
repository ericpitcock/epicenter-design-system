<template>
  <ep-container v-bind="containerProps">
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
          class="ep-menu__section text-style--section"
        >
          {{ item.label }}
        </div>
        <div
          class="ep-menu__item"
          :data-item="index"
          @mouseover="showSubmenu(item, index)"
          @mouseleave="hideSubmenu(item)"
        >
          <ep-button
            v-if="!item.divider && !item.section"
            v-bind="buttonProps(item)"
            @click="onClick(item)"
          />
          <div
            v-if="item.children"
            v-show="activeItemIndex === index"
            class="ep-menu__item__sub-menu"
          >
            <ep-menu
              :size="size"
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
  import EpContainer from '../container/EpContainer.vue'
  import EpDivider from '../divider/EpDivider.vue'
  import EpButton from '../button/EpButton.vue'

  export default {
    name: 'EpMenu',
    components: {
      EpContainer,
      EpDivider,
      EpButton
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
      size: {
        type: String,
        default: 'default'
      },
      containerProps: {
        type: Object,
        default: () => ({})
      },
      activeItem: {
        type: String,
        default: ''
      },
      dividerColor: {
        type: String,
        default: 'var(--border-color)'
      }
    },
    emits: ['click'],
    data() {
      return {
        activeItemIndex: null
      }
    },
    methods: {
      buttonProps(item) {
        return {
          disabled: item.disabled,
          variant: 'menu-item',
          size: this.size,
          label: item.label,
          iconRight: item.iconRight,
          iconLeft: item.iconLeft,
          isMenuItem: true,
          isActiveMenuItem: this.menuType === 'nav' && item.label == this.activeItem,
          ...item.bind
        }
      },
      showSubmenu(item, index) {
        if (item.children) {
          this.activeItemIndex = index
        }
      },
      hideSubmenu(item) {
        if (item.children) {
          this.activeItemIndex = null
        }
      },
      onClick(item) {
        console.log('item', item)
        // if (item.section || item.divider) {
        //   return
        // }
        this.$emit('click', item)
        // retire this
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
