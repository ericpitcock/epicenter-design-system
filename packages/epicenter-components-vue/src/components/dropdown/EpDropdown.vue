<script setup lang="ts">
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
    click: onTriggerClick,
    pointerdown: onTriggerPointerdown,
    mouseover: onMouseover,
    keydown: onKeydown
  }))

  const dropdownVisible = ref(false)

  const dropdownRef = useTemplateRef<HTMLDivElement>('dropdown')
  const panelRef = useTemplateRef<HTMLDivElement>('panel')

  // TS 5.9's lib.dom predates the `source` option on showPopover().
  type PopoverPanel = HTMLElement & {
    showPopover(options?: { source?: HTMLElement }): void
  }

  const showPanel = (): void => {
    const panel = panelRef.value
    if (!panel || panel.matches(':popover-open')) return

    // `source` makes the trigger the popover's invoker: exempt from light
    // dismiss, and focus returns to it natively when Escape closes the panel.
    const trigger = dropdownRef.value?.querySelector(`#${triggerId}`) as HTMLElement | null
    ;(panel as PopoverPanel).showPopover({ source: trigger ?? undefined })
  }

  const hidePanel = (): void => {
    const panel = panelRef.value
    if (!panel || !panel.matches(':popover-open')) return

    panel.hidePopover()
  }

  const focusFirstMenuItem = async (): Promise<void> => {
    await nextTick()

    // Skip disabled items: EpMenu excludes them from roving focus, so landing
    // on one would strand arrow-key navigation.
    const firstMenuItem = dropdownRef.value?.querySelector('[role="menuitem"]:not([aria-disabled="true"])') as HTMLElement | null
    firstMenuItem?.focus()
  }

  const focusTrigger = async (): Promise<void> => {
    await nextTick()

    const trigger = dropdownRef.value?.querySelector(`#${triggerId}`) as HTMLElement | null
    trigger?.focus()
  }

  const openDropdown = (): void => {
    if (disabled || dropdownVisible.value) return

    cancelHoverClose()
    dropdownVisible.value = true
    showPanel()
    if (autoFocus) void focusFirstMenuItem()
  }

  // Closing is always safe, so unlike open this is not gated on `disabled`.
  const closeDropdown = (): void => {
    if (!dropdownVisible.value) return

    // State goes false before hidePopover() so onBeforeToggle knows this
    // close was explicit and doesn't emit a second `close`.
    dropdownVisible.value = false
    hidePanel()
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

  // Light dismiss and native Escape close the popover without going through
  // closeDropdown — sync state here. No focus move: on light dismiss the user
  // just clicked somewhere else, and on Escape the browser restores focus to
  // the invoker itself.
  const onBeforeToggle = (event: ToggleEvent): void => {
    if (event.newState === 'closed' && dropdownVisible.value) {
      dropdownVisible.value = false
      emit('close')
    } else if (event.newState === 'open' && !dropdownVisible.value) {
      dropdownVisible.value = true
    }
  }

  // A custom trigger that doesn't spread `attrs` has no invoker relationship,
  // so pointerdown on it light-dismisses the popover before click fires —
  // without this guard the click would immediately reopen it.
  let wasOpenOnPointerDown = false

  const onTriggerPointerdown = (): void => {
    wasOpenOnPointerDown = dropdownVisible.value
  }

  const onTriggerClick = (): void => {
    const closedByLightDismiss = wasOpenOnPointerDown && !dropdownVisible.value
    wasOpenOnPointerDown = false

    if (closedByLightDismiss) return

    toggleDropdown()
  }

  const onKeydown = (event: KeyboardEvent): void => {
    if (disabled) return
    const key = event.key
    if (key === 'Enter' || key === ' ') {
      event.preventDefault()
      toggleDropdown()
    } else if (key === 'ArrowDown') {
      event.preventDefault()
      // Explicit keyboard navigation: move focus into the menu even when
      // autoFocus is off (which only governs focus-steal on open) or the
      // dropdown is already open.
      openDropdown()
      void focusFirstMenuItem()
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

  // The old padding-top hover bridge is gone (the gap is a margin now, and the
  // panel may flip above the trigger), so hover-close gets a grace period that
  // survives the pointer crossing the gap. Re-entering anywhere in the root —
  // including the panel, which still bubbles to it — cancels the close.
  const HOVER_CLOSE_DELAY = 150
  let hoverCloseTimer: ReturnType<typeof setTimeout> | undefined

  const cancelHoverClose = (): void => {
    if (hoverCloseTimer === undefined) return

    clearTimeout(hoverCloseTimer)
    hoverCloseTimer = undefined
  }

  const onMouseleave = (): void => {
    if (!disabled && showOnHover) {
      hoverCloseTimer = setTimeout(closeDropdown, HOVER_CLOSE_DELAY)
    }
  }

  defineExpose({ openDropdown, closeDropdown, toggleDropdown })
</script>

<template>
  <div
    ref="dropdown"
    class="ep-dropdown"
    @mouseleave="onMouseleave"
    @mouseover="cancelHoverClose"
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
      :id="contentId"
      ref="panel"
      popover="auto"
      :class="['ep-dropdown__container', { 'ep-dropdown__container--align-right': alignRight }]"
      role="region"
      :aria-labelledby="triggerId"
      @beforetoggle="onBeforeToggle"
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
