<script setup lang="ts">
  import { computed, inject, nextTick, provide, ref, useSlots, useTemplateRef } from 'vue'

  type MenuItemType = 'item' | 'divider' | 'section'

  interface EpMenuItemProps {
    /** Whether the menu item is disabled. */
    disabled?: boolean
    /** The type of menu item to render. */
    type?: MenuItemType
  }

  const { disabled = false, type = 'item' } = defineProps<EpMenuItemProps>()

  const emit = defineEmits<{
    select: [event: Event]
  }>()

  const slots = useSlots()

  const showSubmenu = ref(false)
  const menuItemRef = useTemplateRef<HTMLDivElement>('menuItemRef')
  const hasSubmenu = computed(() => !!slots.submenu)

  provide('closeParentSubmenu', () => {
    showSubmenu.value = false
  })

  const closeParentSubmenu = inject<(() => void) | null>('closeParentSubmenu', null)

  const onMousedown = (event: MouseEvent): void => {
    if (disabled) {
      event.preventDefault()
      event.stopPropagation()
    }
  }

  const onClick = (event: MouseEvent): void => {
    if (disabled) {
      event.preventDefault()
      event.stopPropagation()
      return
    }

    if (type === 'item') {
      if (!hasSubmenu.value) {
        emit('select', event)
        closeParentSubmenu?.()
      }
    }
  }

  const onFocusIn = (event: FocusEvent): void => {
    const isSubmenuElement = (event.target as HTMLElement).closest('.ep-menu__item__sub-menu')
    if (isSubmenuElement) {
      return
    }

    if (event.target !== menuItemRef.value && menuItemRef.value) {
      event.preventDefault()
      event.stopPropagation()
      menuItemRef.value.focus()
    }
  }

  const onFocusOut = (event: FocusEvent): void => {
    if (showSubmenu.value && menuItemRef.value) {
      const newFocusTarget = event.relatedTarget as Node | null
      if (!menuItemRef.value.contains(newFocusTarget)) {
        showSubmenu.value = false
      }
    }
  }

  const openSubmenuAndFocusFirst = async (): Promise<void> => {
    if (!hasSubmenu.value) return

    showSubmenu.value = true

    await nextTick()

    const submenu = menuItemRef.value?.querySelector('.ep-menu__item__sub-menu')
    const firstItem = submenu?.querySelector('[role="menuitem"]') as HTMLElement | null

    if (firstItem) {
      if (firstItem.getAttribute('tabindex') !== '0') {
        console.warn('Submenu item had wrong tabindex, fixing it')
        firstItem.setAttribute('tabindex', '0')
      }
      firstItem.focus()
    }
  }

  const onKeydown = (event: KeyboardEvent): void => {
    if (type !== 'item') return

    const key = event.key

    if (key === 'ArrowLeft') {
      if (closeParentSubmenu) {
        event.preventDefault()
        event.stopPropagation()
        closeParentSubmenu()
          ; (menuItemRef.value?.closest('.ep-menu__item__sub-menu')?.closest('.ep-menu__item') as HTMLElement)?.focus()
        return
      }
      if (showSubmenu.value) {
        event.preventDefault()
        event.stopPropagation()
        showSubmenu.value = false
        menuItemRef.value?.focus()
      }
    }
    else if (key === 'Enter' || key === ' ') {
      event.preventDefault()
      event.stopPropagation()

      if (hasSubmenu.value) {
        openSubmenuAndFocusFirst()
      } else {
        emit('select', event)
        closeParentSubmenu?.()
      }
    }
    else if (key === 'ArrowRight' && hasSubmenu.value) {
      event.preventDefault()
      event.stopPropagation()
      openSubmenuAndFocusFirst()
    }
    else if (key === 'Escape' && showSubmenu.value) {
      event.preventDefault()
      event.stopPropagation()
      showSubmenu.value = false
      menuItemRef.value?.focus()
    }
  }

  const onMouseover = (): void => {
    if (hasSubmenu.value) {
      showSubmenu.value = true
    }
  }

  const onMouseleave = (): void => {
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
    :aria-disabled="disabled || undefined"
    :aria-haspopup="hasSubmenu ? 'menu' : undefined"
    :aria-expanded="hasSubmenu ? showSubmenu : undefined"
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