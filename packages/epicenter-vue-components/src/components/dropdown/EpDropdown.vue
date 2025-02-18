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
      <slot
        v-if="$slots.trigger"
        name="trigger"
      />
      <ep-button
        v-else
        v-bind="computedButtonProps"
      />
    </div>
    <div
      v-show="dropdownVisible"
      :class="classes"
    >
      <div class="ep-dropdown__content">
        <slot name="content" />
        <ep-menu
          v-if="!$slots.content"
          :class="props.menuClass"
          :menu-items="menuItems"
          menu-type="dropdown"
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
    containerProps: {
      type: Object,
      default: () => ({}),
      validator: (value) => {
        if (Object.keys(value).length !== 0) {
          console.warn('containerProps is not allowed. Use menuClass instead.', value)
        }
        return true
      }
    },
    menuClass: {
      type: String,
      default: ''
    },
    menuItems: {
      type: Array,
      default: () => []
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
    title: '',
    label: 'Default Dropdown',
    iconRight: { name: 'chevron-down' },
    iconLeft: undefined
  }

  const computedButtonProps = computed(() => ({
    ...(props.disabled && { disabled: true }),
    ...buttonDefaults,
    ...props.buttonProps,
  }))

  const classes = computed(() => [
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
