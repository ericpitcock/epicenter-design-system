<script setup lang="ts">
  import { onMounted, ref, useTemplateRef } from 'vue'

  const emit = defineEmits<{
    escape: []
    tab: []
  }>()

  const menuRef = useTemplateRef<HTMLDivElement>('menuRef')
  const currentFocusIndex = ref(0)

  const getFocusableItems = (): Element[] => {
    if (!menuRef.value) return []

    const allItems = menuRef.value.querySelectorAll('[role="menuitem"]:not([disabled="true"])')
    return Array.from(allItems).filter(item => {
      const closestMenu = item.closest('.ep-menu')
      return closestMenu === menuRef.value
    })
  }

  const focusItemAtIndex = (index: number): void => {
    const items = getFocusableItems()
    if (items.length === 0) return

    if (index < 0) index = items.length - 1
    if (index >= items.length) index = 0

    items.forEach((item, i) => {
      item.setAttribute('tabindex', i === index ? '0' : '-1')
    })

    currentFocusIndex.value = index
      ; (items[index] as HTMLElement)?.focus()
  }

  const onKeydown = (event: KeyboardEvent): void => {
    const items = getFocusableItems()
    if (items.length === 0) return

    const key = event.key

    const activeElement = document.activeElement
    const isDirectChild = items.includes(activeElement as Element)

    const isArrowKey = ['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(key)
    if (isArrowKey && !isDirectChild) {
      return
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
        emit('tab')
        break
    }
  }

  const resetFocus = (): void => {
    const items = getFocusableItems()
    items.forEach((item, i) => {
      item.setAttribute('tabindex', i === 0 ? '0' : '-1')
    })
    currentFocusIndex.value = 0
  }

  onMounted(() => {
    if (!menuRef.value) return

    resetFocus()

    menuRef.value.addEventListener('focusin', (event: FocusEvent) => {
      const items = getFocusableItems()
      const target = (event.target as HTMLElement).closest('[role="menuitem"]')
      if (target) {
        const index = items.indexOf(target)
        if (index !== -1) {
          items.forEach((item, i) => {
            item.setAttribute('tabindex', i === index ? '0' : '-1')
          })
          currentFocusIndex.value = index
        }
      }
    })

    menuRef.value.addEventListener('focusout', (event: FocusEvent) => {
      const relatedTarget = event.relatedTarget as Node | null
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
