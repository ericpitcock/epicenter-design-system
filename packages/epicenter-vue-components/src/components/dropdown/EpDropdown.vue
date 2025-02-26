<template>
  <div
    ref="dropdown"
    class="ep-dropdown"
    @mouseleave="onMouseleave"
  >
    <div
      @click.stop="toggleDropdown"
      @mouseover="onMouseover"
    >
      <slot name="trigger" />
      <ep-button
        v-if="!$slots.trigger"
        v-bind="computedButtonProps"
      />
    </div>
    <div
      v-show="dropdownVisible"
      :class="containerClasses"
    >
      <div class="ep-dropdown__content">
        <slot name="content" />
        <ep-menu
          v-if="!$slots.content"
          v-bind="computedMenuProps"
          @click="onClick"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onClickOutside } from '@vueuse/core'
  import { computed, ref, useTemplateRef } from 'vue'

  import EpButton from '../button/EpButton.vue'
  import EpMenu from '../menu/EpMenu.vue'

  defineOptions({
    name: 'EpDropdown',
  })

  const props = defineProps({
    disabled: {
      type: Boolean,
      default: false
    },
    buttonProps: {
      type: Object,
      default: () => ({})
    },
    menuClass: {
      type: String,
      default: '',
      validator: (value) => {
        if (Object.keys(value).length !== 0) {
          console.warn('menuClass is deprecated. Include in menuProps instead.', value)
        }
        return true
      }
    },
    menuItems: {
      type: Array,
      default: () => [],
      validator: (value) => {
        if (Object.keys(value).length !== 0) {
          console.warn('menuItems is deprecated. Include in menuProps instead.', value)
        }
        return true
      }
    },
    menuProps: {
      type: Object,
      default: () => ({})
    },
    alignRight: {
      type: Boolean,
      default: false
    },
    showOnHover: {
      type: Boolean,
      default: false
    }
  })

  const emit = defineEmits(['click', 'close'])

  const dropdownVisible = ref(false)

  const buttonDefaults = {
    size: 'default',
    label: 'Default Dropdown',
    iconRight: { name: 'chevron-down' },
    iconLeft: undefined
  }

  const computedButtonProps = computed(() => ({
    ...(props.disabled && { disabled: true }),
    ...buttonDefaults,
    ...props.buttonProps,
  }))

  const menuDefaults = {
    menuType: 'dropdown',
  }

  const computedMenuProps = computed(() => ({
    // deprecated props
    ...(props.menuClass && { menuClass: props.menuClass }),
    ...(props.menuItems && { menuItems: props.menuItems }),
    // override with menuProps
    ...menuDefaults,
    ...props.menuProps,
  }))

  const containerClasses = computed(() => [
    'ep-dropdown__container',
    { 'ep-dropdown__container--align-right': props.alignRight }
  ])

  const toggleDropdown = () => {
    if (props.disabled || props.showOnHover) return

    dropdownVisible.value = !dropdownVisible.value
  }

  const closeDropdown = () => {
    if (props.disabled) return

    if (dropdownVisible.value) {
      dropdownVisible.value = false
      emit('close')
    }
  }

  defineExpose({ closeDropdown })

  const dropdownRef = useTemplateRef('dropdown')

  onClickOutside(dropdownRef, closeDropdown)

  const onClick = (payload) => {
    emit('click', payload)
    if (dropdownVisible.value) closeDropdown()
  }

  const onMouseover = () => {
    if (props.disabled) return

    if (props.showOnHover) dropdownVisible.value = true
  }

  const onMouseleave = () => {
    if (props.disabled) return

    if (props.showOnHover) dropdownVisible.value = false
  }
</script>
