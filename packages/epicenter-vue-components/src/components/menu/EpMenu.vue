<script setup>
  import { onMounted, ref, useTemplateRef } from 'vue'

  const emit = defineEmits(['escape', 'tab'])

  const menuRef = useTemplateRef('menuRef')
  const currentFocusIndex = ref(0)

  // Get all focusable menu items (only direct children, not nested submenus)
  const getFocusableItems = () => {
    if (!menuRef.value) return []

    // Find all menu items that are direct children (not in submenus)
    const allItems = menuRef.value.querySelectorAll('[role="menuitem"]:not([disabled="true"])')
    return Array.from(allItems).filter(item => {
      // Only include items whose closest .ep-menu parent is this menu
      const closestMenu = item.closest('.ep-menu')
      return closestMenu === menuRef.value
    })
  }

  const focusItemAtIndex = (index) => {
    const items = getFocusableItems()
    if (items.length === 0) return

    // Wrap around
    if (index < 0) index = items.length - 1
    if (index >= items.length) index = 0

    // Update tabindex: only the focused item should be tabbable
    items.forEach((item, i) => {
      item.setAttribute('tabindex', i === index ? '0' : '-1')
    })

    currentFocusIndex.value = index
    items[index]?.focus()
  }

  const onKeydown = (event) => {
    const items = getFocusableItems()
    if (items.length === 0) return

    const key = event.key

    // Only handle navigation keys if the currently focused element is a direct child of THIS menu
    // Don't interfere with submenu navigation
    const activeElement = document.activeElement
    const isDirectChild = items.includes(activeElement)

    // For arrow keys, only handle if focused element is our direct child
    const isArrowKey = ['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(key)
    if (isArrowKey && !isDirectChild) {
      return // Let the submenu's EpMenu handle this
    }

    switch (key) {
      case 'ArrowDown':
        event.preventDefault()
        focusItemAtIndex(currentFocusIndex.value + 1)
        break
      case 'ArrowUp':
        event.preventDefault()
        focusItemAtIndex(currentFocusIndex.value - 1)
        break
      case 'Home':
        event.preventDefault()
        focusItemAtIndex(0)
        break
      case 'End':
        event.preventDefault()
        focusItemAtIndex(items.length - 1)
        break
      case 'Escape':
        event.preventDefault()
        emit('escape')
        break
      case 'Tab':
        // Tab should exit the menu immediately, not navigate within it
        // Emit event so parent can react, but don't prevent default
        // so Tab can naturally move focus to the next element
        emit('tab')
        break
    }
  }

  const resetFocus = () => {
    const items = getFocusableItems()
    items.forEach((item, i) => {
      item.setAttribute('tabindex', i === 0 ? '0' : '-1')
    })
    currentFocusIndex.value = 0
  }

  // Sync currentFocusIndex with actual focused item on mount and when items gain focus
  onMounted(() => {
    if (!menuRef.value) return

    // Initialize tabindex: only first item should be tabbable
    resetFocus()

    // Listen for focus events to keep index in sync
    menuRef.value.addEventListener('focusin', (event) => {
      const items = getFocusableItems()
      const target = event.target.closest('[role="menuitem"]')
      if (target) {
        const index = items.indexOf(target)
        if (index !== -1) {
          // Update tabindex when focus changes
          items.forEach((item, i) => {
            item.setAttribute('tabindex', i === index ? '0' : '-1')
          })
          currentFocusIndex.value = index
        }
      }
    })

    // Reset to first item when menu loses all focus
    menuRef.value.addEventListener('focusout', (event) => {
      // Check if focus is leaving the menu entirely
      const relatedTarget = event.relatedTarget
      if (!menuRef.value?.contains(relatedTarget)) {
        resetFocus()
      }
    })
  })

  defineExpose({ resetFocus })
</script>

<template>
  <div
    ref="menuRef"
    class="ep-menu"
    role="menu"
    @keydown="onKeydown"
  >
    <!-- @slot Default slot for menu items (EpMenuItem components). -->
    <slot />
  </div>
</template>
