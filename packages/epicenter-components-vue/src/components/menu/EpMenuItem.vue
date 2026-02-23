<script setup>
  import { inject, nextTick, onMounted, provide, ref } from 'vue'

  const props = defineProps({
    /**
     * Whether the menu item is disabled.
     */
    isDisabled: {
      type: Boolean,
      default: false
    },
    /**
     * The type of menu item to render.
     * @values item, divider, section
     */
    type: {
      type: String,
      default: 'item',
      validator: (value) => ['item', 'divider', 'section'].includes(value)
    }
  })

  const emit = defineEmits(['select'])

  const showSubmenu = ref(false)
  const menuItemRef = ref(null)
  const hasSubmenu = ref(false)

  // Provide close function for child submenu items
  provide('closeParentSubmenu', () => {
    showSubmenu.value = false
  })

  // Inject parent's close function (if this item is in a submenu)
  const closeParentSubmenu = inject('closeParentSubmenu', null)

  // Ensure interactive elements inside menu items are not separately focusable
  // This follows the WAI-ARIA menu pattern where only the menu item wrapper should be focusable
  onMounted(() => {
    if (props.type === 'item' && menuItemRef.value) {
      // Only process direct child buttons/links, not those in submenus
      // Use :scope > to select only immediate children of this menu item's content
      const directButtons = Array.from(menuItemRef.value.querySelectorAll('button, a')).filter(el => {
        // Check if this element's parent chain includes a submenu BEFORE reaching this menu item
        let current = el.parentElement
        while (current && current !== menuItemRef.value) {
          if (current.classList.contains('ep-menu__item__sub-menu')) {
            return false // This element is inside a submenu, skip it
          }
          current = current.parentElement
        }
        return true // This is a direct child button/link
      })

      directButtons.forEach(el => {
        if (el.getAttribute('tabindex') !== '-1') {
          el.setAttribute('tabindex', '-1')
        }
      })

      // Check if this menu item has a submenu slot
      const submenuElement = menuItemRef.value.querySelector('.ep-menu__item__sub-menu')
      hasSubmenu.value = !!submenuElement
    }
  })

  const onMousedown = (event) => {
    if (props.isDisabled) {
      // Prevent focus when clicking a disabled menu item
      // This prevents submenus from sticking open when clicking disabled items
      event.preventDefault()
      event.stopPropagation()
    }
  }

  const onClick = (event) => {
    if (props.isDisabled) {
      event.preventDefault()
      event.stopPropagation()
      return
    }

    if (props.type === 'item') {
      // If this item has a submenu, don't emit select - let keyboard handle it
      if (!hasSubmenu.value) {
        emit('select', event)
        // Close parent submenu if this item is inside one
        closeParentSubmenu?.()
      }
    }
  }

  const onFocusIn = (event) => {
    // Don't interfere with focus if it's going to a submenu item
    const isSubmenuElement = event.target.closest('.ep-menu__item__sub-menu')
    if (isSubmenuElement) {
      return // Let submenu items receive focus normally
    }

    // If focus goes to a child element (like a button), redirect it to the menu item wrapper
    if (event.target !== menuItemRef.value && menuItemRef.value) {
      event.preventDefault()
      event.stopPropagation()
      menuItemRef.value.focus()
    }
  }

  const onFocusOut = (event) => {
    // Close submenu if focus is leaving this menu item entirely
    if (showSubmenu.value && menuItemRef.value) {
      // Check if the new focus target is outside this menu item
      const newFocusTarget = event.relatedTarget
      if (!menuItemRef.value.contains(newFocusTarget)) {
        showSubmenu.value = false
      }
    }
  }

  const openSubmenuAndFocusFirst = async () => {
    if (!hasSubmenu.value) return

    showSubmenu.value = true

    // Wait for DOM update before focusing
    await nextTick()

    const submenu = menuItemRef.value?.querySelector('.ep-menu__item__sub-menu')
    const firstItem = submenu?.querySelector('[role="menuitem"]')

    if (firstItem) {
      // Ensure the first item is focusable
      if (firstItem.getAttribute('tabindex') !== '0') {
        console.warn('Submenu item had wrong tabindex, fixing it')
        firstItem.setAttribute('tabindex', '0')
      }
      firstItem.focus()
    }
  }

  const onKeydown = (event) => {
    if (props.type !== 'item') return

    const key = event.key

    // Handle Arrow Left from within submenu - close it and return to parent
    if (key === 'ArrowLeft') {
      if (closeParentSubmenu) {
        // We're inside a submenu, close it and focus parent
        event.preventDefault()
        event.stopPropagation()
        closeParentSubmenu()
        // Focus the parent menu item
        menuItemRef.value?.closest('.ep-menu__item__sub-menu')?.closest('.ep-menu__item')?.focus()
        return
      }
      // If we have a submenu and it's open, close it
      if (showSubmenu.value) {
        event.preventDefault()
        event.stopPropagation()
        showSubmenu.value = false
        menuItemRef.value?.focus()
      }
    }
    // Handle Enter and Space
    else if (key === 'Enter' || key === ' ') {
      event.preventDefault()
      event.stopPropagation()

      // If has submenu, open it and focus first item
      if (hasSubmenu.value) {
        openSubmenuAndFocusFirst()
      } else {
        // No submenu - activate the menu item
        emit('select', event)
        closeParentSubmenu?.()
      }
    }
    // Arrow right to open submenu if present
    else if (key === 'ArrowRight' && hasSubmenu.value) {
      event.preventDefault()
      event.stopPropagation()
      openSubmenuAndFocusFirst()
    }
    // Escape to close submenu
    else if (key === 'Escape' && showSubmenu.value) {
      event.preventDefault()
      event.stopPropagation()
      showSubmenu.value = false
      menuItemRef.value?.focus()
    }
  }

  const onMouseover = () => {
    if (hasSubmenu.value) {
      showSubmenu.value = true
    }
  }

  const onMouseleave = () => {
    // Only hide submenu on mouse leave if no element within this menu item has focus
    // This prevents submenu from hiding when using keyboard navigation
    if (!menuItemRef.value?.contains(document.activeElement)) {
      showSubmenu.value = false
    }
  }
</script>

<template>
  <div
    v-if="type === 'divider'"
    class="ep-divider ep-divider--horizontal"
    role="separator"
  />
  <div
    v-else-if="type === 'section'"
    class="ep-menu__section text-style--section"
    role="presentation"
  >
    <!-- @slot Default slot for section label text. -->
    <slot />
  </div>
  <div
    v-else
    ref="menuItemRef"
    class="ep-menu__item"
    role="menuitem"
    :aria-haspopup="$slots.submenu ? 'menu' : undefined"
    :aria-expanded="$slots.submenu ? String(showSubmenu) : undefined"
    @mousedown="onMousedown"
    @click="onClick"
    @keydown="onKeydown"
    @mouseover="onMouseover"
    @mouseleave="onMouseleave"
    @focusin="onFocusIn"
    @focusout="onFocusOut"
  >
    <!-- @slot Default slot for menu item content. -->
    <slot />
    <div
      v-if="$slots.submenu"
      v-show="showSubmenu"
      class="ep-menu__item__sub-menu"
      role="menu"
    >
      <!-- @slot submenu - Content for a submenu that appears on hover. -->
      <slot name="submenu" />
    </div>
  </div>
</template>