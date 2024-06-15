<template>
  <ep-container v-bind="containerProps">
    <div class="ep-menu">
      <template
        v-for="(item, index) of menuItems"
        :key="`${item.label}${index}`"
      >
        <ep-divider
          v-if="item.divider"
          :styles="{
            '--ep-divider-border-color': dividerColor,
            '--ep-divider-margin': '1rem 0'
          }"
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
            @click.stop="onClick(item, index)"
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

<script setup>
  import EpContainer from '../container/EpContainer.vue'
  import EpDivider from '../divider/EpDivider.vue'
  import EpButton from '../button/EpButton.vue'
  import { inject, ref } from 'vue'

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
  })

  const emit = defineEmits(['click'])

  const activeItemIndex = ref(null)

  const buttonProps = (item) => {
    return {
      disabled: item.disabled,
      size: props.size,
      label: item.label,
      iconRight: item.iconRight,
      iconLeft: item.iconLeft,
      isMenuItem: true,
      isActiveMenuItem: props.menuType === 'nav' && item.label === props.activeItem,
      ...item.bind
    }
  }

  const showSubmenu = (item, index) => {
    if (item.children) {
      activeItemIndex.value = index
    }
  }

  const hideSubmenu = (item) => {
    if (item.children) {
      activeItemIndex.value = null
    }
  }

  // inject contextData when a menu is used in a table cell
  const contextData = inject('contextData', null)

  const onClick = (item, index) => {
    const payload = contextData ? { item, menuItemIndex: index, contextData } : { item, menuItemIndex: index }
    emit('click', payload)
    if (item.onClick) item.onClick(payload)
  }
</script>
