<script setup>
  import { onClickOutside } from '@vueuse/core'
  import { computed, nextTick, ref, useId, useTemplateRef, watch } from 'vue'

  const props = defineProps({
    /**
     * If true, aligns the dropdown content to the right edge of the trigger.
     */
    alignRight: {
      type: Boolean,
      default: false
    },
    /**
     * If true, opens the dropdown on hover instead of click.
     */
    showOnHover: {
      type: Boolean,
      default: false
    },
    /**
     * If true, automatically focuses the first menu item when the dropdown opens.
     */
    autoFocus: {
      type: Boolean,
      default: true
    },
  })

  const emit = defineEmits(['click', 'close'])
  const uniqueId = useId()
  const triggerId = `ep-dropdown-trigger-${uniqueId}`
  const contentId = `ep-dropdown-panel-${uniqueId}`

  const triggerAttrs = computed(() => ({
    id: triggerId,
    'aria-haspopup': 'menu',
    'aria-expanded': String(dropdownVisible.value),
    'aria-controls': contentId,
    disabled: props.disabled || undefined
  }))

  const triggerListeners = computed(() => ({
    click: toggleDropdown,
    mouseover: onMouseover,
    keydown: onKeydown
  }))

  const dropdownVisible = ref(false)

  const openDropdown = () => {
    if (props.disabled || dropdownVisible.value) return

    dropdownVisible.value = true
  }

  const closeDropdown = () => {
    if (props.disabled || !dropdownVisible.value) return

    dropdownVisible.value = false
    emit('close')
  }

  // Focus management
  watch(dropdownVisible, async (isOpen) => {
    await nextTick()

    if (isOpen) {
      // Focus first menu item when opening
      if (props.autoFocus) {
        const firstMenuItem = dropdownRef.value?.querySelector('[role="menuitem"]')
        firstMenuItem?.focus()
      }
    } else {
      // Return focus to trigger when closing
      const trigger = dropdownRef.value?.querySelector(`#${triggerId}`)
      trigger?.focus()
    }
  })

  const toggleDropdown = () => {
    if (props.disabled || props.showOnHover) return

    dropdownVisible.value = !dropdownVisible.value
  }

  const onKeydown = event => {
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

  const onMouseover = () => {
    if (!props.disabled && props.showOnHover) {
      dropdownVisible.value = true
    }
  }

  const onMouseleave = () => {
    if (!props.disabled && props.showOnHover) {
      dropdownVisible.value = false
    }
  }

  const dropdownRef = useTemplateRef('dropdown')
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