<template>
  <div class="ep-menu">
    <template
      v-for="(item, index) of menuItems"
      :key="item.id || index"
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
        @mouseover="toggleSubmenu(item, index)"
        @mouseleave="toggleSubmenu(item)"
      >
        <ep-button
          :class="buttonClasses(item)"
          v-bind="buttonProps(item)"
          @click.stop="onClick(item)"
        />
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
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
  import EpDivider from '../divider/EpDivider.vue'
  import EpButton from '../button/EpButton.vue'
  import { ref } from 'vue'

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
      default: () => []
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

  const emit = defineEmits(['click'])

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
      { 'ep-button--menu-item--active': props.menuType === 'nav' && item.label === props.activeItem }
    ]
  }

  const toggleSubmenu = (item, index = null) => {
    if (!item.children) return
    activeItemIndex.value = index
  }

  const onClick = (item) => {
    emit('click', item)
  }
</script>
