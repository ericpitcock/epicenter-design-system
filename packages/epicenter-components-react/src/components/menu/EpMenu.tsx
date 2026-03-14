import React, { useRef, useEffect, useCallback, KeyboardEvent } from 'react'

export interface EpMenuProps {
  /** Menu content (EpMenuItem components) */
  children: React.ReactNode
  /** Additional CSS classes */
  className?: string
  /** Callback when Escape key is pressed */
  onEscape?: () => void
  /** Callback when Tab key is pressed */
  onTab?: () => void
}

/**
 * EpMenu - Accessible menu container with keyboard navigation
 * 
 * Implements WAI-ARIA menu pattern with arrow key navigation, Home/End support,
 * and proper focus management for nested submenus.
 */
export const EpMenu = React.forwardRef<HTMLDivElement, EpMenuProps>(
  ({ children, onEscape, onTab, className = '' }, ref) => {
    const menuRef = useRef<HTMLDivElement>(null)
    const currentFocusIndex = useRef(0)

    // Get all focusable menu items (only direct children, not nested submenus)
    const getFocusableItems = useCallback((): HTMLElement[] => {
      if (!menuRef.current) return []

      // Find all menu items that are direct children (not in submenus)
      const allItems = menuRef.current.querySelectorAll<HTMLElement>(
        '[role="menuitem"]:not([aria-disabled="true"])'
      )
      return Array.from(allItems).filter((item) => {
        // Only include items whose closest .ep-menu parent is this menu
        const closestMenu = item.closest('.ep-menu')
        return closestMenu === menuRef.current
      })
    }, [])

    const focusItemAtIndex = useCallback(
      (index: number) => {
        const items = getFocusableItems()
        if (items.length === 0) return

        // Wrap around
        let newIndex = index
        if (newIndex < 0) newIndex = items.length - 1
        if (newIndex >= items.length) newIndex = 0

        // Update tabindex: only the focused item should be tabbable
        items.forEach((item, i) => {
          item.setAttribute('tabindex', i === newIndex ? '0' : '-1')
        })

        currentFocusIndex.current = newIndex
        items[newIndex]?.focus()
      },
      [getFocusableItems]
    )

    const resetFocus = useCallback(() => {
      const items = getFocusableItems()
      items.forEach((item, i) => {
        item.setAttribute('tabindex', i === 0 ? '0' : '-1')
      })
      currentFocusIndex.current = 0
    }, [getFocusableItems])

    const handleKeydown = useCallback(
      (event: KeyboardEvent<HTMLDivElement>) => {
        const items = getFocusableItems()
        if (items.length === 0) return

        const key = event.key

        // Only handle navigation keys if the currently focused element is a direct child of THIS menu
        // Don't interfere with submenu navigation
        const activeElement = document.activeElement
        const isDirectChild = items.includes(activeElement as HTMLElement)

        // For arrow keys, only handle if focused element is our direct child
        const isArrowKey = ['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(key)
        if (isArrowKey && !isDirectChild) {
          return // Let the submenu's EpMenu handle this
        }

        switch (key) {
          case 'ArrowDown':
            event.preventDefault()
            focusItemAtIndex(currentFocusIndex.current + 1)
            break
          case 'ArrowUp':
            event.preventDefault()
            focusItemAtIndex(currentFocusIndex.current - 1)
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
            onEscape?.()
            break
          case 'Tab':
            // Tab should exit the menu immediately, not navigate within it
            // Emit event so parent can react, but don't prevent default
            // so Tab can naturally move focus to the next element
            onTab?.()
            break
        }
      },
      [getFocusableItems, focusItemAtIndex, onEscape, onTab]
    )

    useEffect(() => {
      if (!menuRef.current) return

      // Initialize tabindex: only first item should be tabbable
      resetFocus()

      const menuElement = menuRef.current

      // Listen for focus events to keep index in sync
      const handleFocusIn = (event: FocusEvent) => {
        const items = getFocusableItems()
        const target = (event.target as HTMLElement).closest('[role="menuitem"]')
        if (target) {
          const index = items.indexOf(target as HTMLElement)
          if (index !== -1) {
            // Update tabindex when focus changes
            items.forEach((item, i) => {
              item.setAttribute('tabindex', i === index ? '0' : '-1')
            })
            currentFocusIndex.current = index
          }
        }
      }

      // Reset to first item when menu loses all focus
      const handleFocusOut = (event: FocusEvent) => {
        // Check if focus is leaving the menu entirely
        const relatedTarget = event.relatedTarget as Node | null
        if (!menuElement.contains(relatedTarget)) {
          resetFocus()
        }
      }

      menuElement.addEventListener('focusin', handleFocusIn)
      menuElement.addEventListener('focusout', handleFocusOut)

      return () => {
        menuElement.removeEventListener('focusin', handleFocusIn)
        menuElement.removeEventListener('focusout', handleFocusOut)
      }
    }, [getFocusableItems, resetFocus])

    // Expose resetFocus via ref
    React.useImperativeHandle(ref, () => ({
      ...menuRef.current!,
      resetFocus
    }))

    return (
      <div
        ref={menuRef}
        className={`ep-menu${className ? ` ${className}` : ''}`}
        role="menu"
        onKeyDown={handleKeydown}
      >
        {children}
      </div>
    )
  }
)

EpMenu.displayName = 'EpMenu'
