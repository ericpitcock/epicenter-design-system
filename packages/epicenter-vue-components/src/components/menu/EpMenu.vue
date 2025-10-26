<template>
  <div :class="['ep-menu', `ep-menu--${menuType}`]">
    <template
      v-for="(item, index) of menuItems"
      :key="item.id"
    >
      <ep-divider v-if="item.divider" />
      <div
        v-else-if="item.section"
        class="ep-menu__section text-style--section"
      >
        {{ item.label }}
      </div>
      <div
        v-else
        class="ep-menu__item"
        :data-item="index"
        @mouseover="onMouseover(item, index)"
        @mouseleave="onMouseleave(item)"
      >
        <ep-button
          :class="buttonClasses(item)"
          v-bind="buttonProps(item)"
          @click.stop="onClick(item)"
        >
          <template
            v-if="item.iconLeft"
            #icon-left
          >
            icon left
          </template>
          {{ item.label }}
          <template #icon-right>
            chevron right icon
          </template>
        </ep-button>
        <div
          v-if="item.children"
          v-show="activeItemIndex === index"
          class="ep-menu__item__sub-menu"
        >
          <ep-menu
            :size="size"
            :class="$attrs.class"
            :menu-items="item.children"
            @click="onClick($event)"
            @mouseover="onChildMouseover($event)"
            @mouseleave="onChildMouseleave($event)"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  import EpButton from '../button/EpButton.vue'
  import EpDivider from '../divider/EpDivider.vue'

  defineOptions({
    name: 'EpMenu'
  })

  const props = defineProps({
    menuType: {
      type: String,
      default: 'default' // default, dropdown, nav
    },
    menuItems: {
      type: Array,
      default: () => [],
      validator: (value) => {
        value.forEach((item) => {
          if (!item.section && !item.divider && !item.id) {
            console.warn('EpMenu: Each menu item that is not a section or divider must have an id')
          }
        })
        return true
      }
    },
    size: {
      type: String,
      default: 'default'
    },
    activeItem: {
      type: String,
      default: ''
    },
  })

  const emit = defineEmits(['click', 'mouseover', 'mouseleave'])

  const activeItemIndex = ref(null)

  const buttonProps = (item) => {
    // eslint-disable-next-line no-unused-vars
    const { children, ...rest } = item
    rest.size = props.size
    return rest
  }

  const buttonClasses = (item) => {
    return [
      'ep-button--menu-item',
      { 'ep-button--menu-item--selected': props.menuType === 'nav' && item.label === props.activeItem }
    ]
  }

  const onMouseover = (item, index) => {
    if (!item.id || activeItemIndex.value === index) return

    if (item.children) {
      activeItemIndex.value = index
    }
    emit('mouseover', item)
  }

  const onChildMouseover = (item) => {
    emit('mouseover', item)
  }

  const onMouseleave = (item) => {
    if (item.children) {
      activeItemIndex.value = null
    }
    emit('mouseleave', null)
  }

  const onChildMouseleave = (item) => {
    emit('mouseleave', item)
  }

  const onClick = (item) => {
    emit('click', item)
  }
</script>
