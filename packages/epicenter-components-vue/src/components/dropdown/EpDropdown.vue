<script setup lang="ts">
  import { onClickOutside } from '@vueuse/core'
  import { computed, nextTick, ref, useId, useTemplateRef, watch } from 'vue'

  interface EpDropdownProps {
    alignRight?: boolean
    autoFocus?: boolean
    disabled?: boolean
    showOnHover?: boolean
  }

  const props = withDefaults(defineProps<EpDropdownProps>(), {
    alignRight: false,
    autoFocus: true,
    disabled: false,
    showOnHover: false,
  })

  const emit = defineEmits<{
    click: []
    close: []
  }>()

  const uniqueId = useId()
  const triggerId = `ep-dropdown-trigger-${uniqueId}`
  const contentId = `ep-dropdown-panel-${uniqueId}`

  const triggerAttrs = computed(() => ({
    id: triggerId,
    'aria-haspopup': 'menu' as const,
    'aria-expanded': dropdownVisible.value,
    'aria-controls': contentId,
    disabled: props.disabled || undefined
  }))

  const triggerListeners = computed(() => ({
    click: toggleDropdown,
    mouseover: onMouseover,
    keydown: onKeydown
  }))

  const dropdownVisible = ref(false)

  const openDropdown = (): void => {
    if (props.disabled || dropdownVisible.value) return

    dropdownVisible.value = true
  }

  const closeDropdown = (): void => {
    if (props.disabled || !dropdownVisible.value) return

    dropdownVisible.value = false
    emit('close')
  }

  // Focus management
  watch(dropdownVisible, async (isOpen: boolean) => {
    await nextTick()

    if (isOpen) {
      if (props.autoFocus) {
        const firstMenuItem = dropdownRef.value?.querySelector('[role="menuitem"]') as HTMLElement | null
        firstMenuItem?.focus()
      }
    } else {
      const trigger = dropdownRef.value?.querySelector(`#${triggerId}`) as HTMLElement | null
      trigger?.focus()
    }
  })

  const toggleDropdown = (): void => {
    if (props.disabled || props.showOnHover) return

    dropdownVisible.value = !dropdownVisible.value
  }

  const onKeydown = (event: KeyboardEvent): void => {
    if (props.disabled) return
    const key = event.key
    if (key === 'Enter' || key === ' ') {
      event.preventDefault()
      toggleDropdown()
    } else if (key === 'ArrowDown') {
      event.preventDefault()
      openDropdown()
    } else if (key === 'Escape') {
      event.preventDefault()
      closeDropdown()
    }
  }

  const onMouseover = (): void => {
    if (!props.disabled && props.showOnHover) {
      dropdownVisible.value = true
    }
  }

  const onMouseleave = (): void => {
    if (!props.disabled && props.showOnHover) {
      dropdownVisible.value = false
    }
  }

  const dropdownRef = useTemplateRef<HTMLDivElement>('dropdown')
  onClickOutside(dropdownRef, closeDropdown)

  defineExpose({ openDropdown, closeDropdown, toggleDropdown })
</script>

<template>
  <div
    ref="dropdown"
    class="ep-dropdown"
    @mouseleave="onMouseleave"
  >
    <!-- @slot Trigger element that opens/closes the dropdown. Provides scoped props for custom triggers. -->
    <slot
      name="trigger"
      :is-open="dropdownVisible"
      :open="openDropdown"
      :close="closeDropdown"
      :toggle="toggleDropdown"
      :attrs="triggerAttrs"
      :on="triggerListeners"
    >
      <button
        type="button"
        v-bind="triggerAttrs"
        v-on="triggerListeners"
      >
        Default dropdown
      </button>
    </slot>
    <div
      v-show="dropdownVisible"
      :id="contentId"
      :class="['ep-dropdown__container', { 'ep-dropdown__container--align-right': alignRight }]"
      role="region"
      :aria-labelledby="triggerId"
    >
      <div
        class="ep-dropdown__content"
        tabindex="-1"
      >
        <!-- @slot Content displayed inside the dropdown panel when open -->
        <slot
          name="content"
          :close="closeDropdown"
        />
      </div>
    </div>
  </div>
</template>