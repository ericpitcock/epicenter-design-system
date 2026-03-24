<script setup lang="ts">
  import { onClickOutside } from '@vueuse/core'
  import { computed, nextTick, ref, useId, useTemplateRef } from 'vue'

  interface Props {
    alignRight?: boolean
    autoFocus?: boolean
    disabled?: boolean
    showOnHover?: boolean
  }

  const {
    alignRight = false,
    autoFocus = true,
    disabled = false,
    showOnHover = false,
  } = defineProps<Props>()

  const emit = defineEmits<{
    click: []
    close: []
  }>()

  defineOptions({ name: 'EpDropdown' })

  const uniqueId = useId()
  const triggerId = `ep-dropdown-trigger-${uniqueId}`
  const contentId = `ep-dropdown-panel-${uniqueId}`

  const triggerAttrs = computed(() => ({
    id: triggerId,
    'aria-haspopup': 'menu' as const,
    'aria-expanded': dropdownVisible.value,
    'aria-controls': contentId,
    disabled: disabled || undefined
  }))

  const triggerListeners = computed(() => ({
    click: toggleDropdown,
    mouseover: onMouseover,
    keydown: onKeydown
  }))

  const dropdownVisible = ref(false)

  const focusFirstMenuItem = async (): Promise<void> => {
    await nextTick()

    if (!autoFocus) return

    const firstMenuItem = dropdownRef.value?.querySelector('[role="menuitem"]') as HTMLElement | null
    firstMenuItem?.focus()
  }

  const focusTrigger = async (): Promise<void> => {
    await nextTick()

    const trigger = dropdownRef.value?.querySelector(`#${triggerId}`) as HTMLElement | null
    trigger?.focus()
  }

  const openDropdown = (): void => {
    if (disabled || dropdownVisible.value) return

    dropdownVisible.value = true
    void focusFirstMenuItem()
  }

  const closeDropdown = (): void => {
    if (disabled || !dropdownVisible.value) return

    dropdownVisible.value = false
    emit('close')
    void focusTrigger()
  }

  const toggleDropdown = (): void => {
    if (disabled || showOnHover) return

    if (dropdownVisible.value) {
      closeDropdown()
    } else {
      openDropdown()
    }
  }

  const onKeydown = (event: KeyboardEvent): void => {
    if (disabled) return
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
    if (!disabled && showOnHover) {
      openDropdown()
    }
  }

  const onMouseleave = (): void => {
    if (!disabled && showOnHover) {
      closeDropdown()
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