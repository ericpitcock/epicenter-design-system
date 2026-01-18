import React, { useRef, useState, useEffect, useCallback, createContext, useContext, KeyboardEvent } from 'react'

export type MenuItemType = 'item' | 'divider' | 'section'

export interface EpMenuItemProps {
  /** Whether the menu item is disabled */
  isDisabled?: boolean
  /** The type of menu item to render */
  type?: MenuItemType
  /** Menu item content */
  children?: React.ReactNode
  /** Submenu content that appears on hover/focus */
  submenu?: React.ReactNode
  /** Callback when menu item is selected */
  onSelect?: (event: React.MouseEvent | KeyboardEvent) => void
  /** Additional CSS classes */
  className?: string
}

// Context to provide closeParentSubmenu function
const SubmenuContext = createContext<(() => void) | null>(null)

/**
 * EpMenuItem - Menu item component with support for submenus
 * 
 * Can render as interactive item, divider, or section header.
 * Supports nested submenus with keyboard navigation (Arrow keys, Enter, Space).
 */
const EpMenuItem = React.forwardRef<HTMLDivElement, EpMenuItemProps>(
  (
    {
      isDisabled = false,
      type = 'item',
      children,
      submenu,
      onSelect,
      className = ''
    },
    ref
  ) => {
    const [showSubmenu, setShowSubmenu] = useState(false)
    const menuItemRef = useRef<HTMLDivElement>(null)
    const hasSubmenu = Boolean(submenu)

    // Inject parent's close function (if this item is in a submenu)
    const closeParentSubmenu = useContext(SubmenuContext)

    // Provide close function for child submenu items
    const closeThisSubmenu = useCallback(() => {
      setShowSubmenu(false)
    }, [])

    // Ensure interactive elements inside menu items are not separately focusable
    // This follows the WAI-ARIA menu pattern where only the menu item wrapper should be focusable
    useEffect(() => {
      if (type === 'item' && menuItemRef.current) {
        // Only process direct child buttons/links, not those in submenus
        const directButtons = Array.from(
          menuItemRef.current.querySelectorAll<HTMLElement>('button, a')
        ).filter((el) => {
          // Check if this element's parent chain includes a submenu BEFORE reaching this menu item
          let current = el.parentElement
          while (current && current !== menuItemRef.current) {
            if (current.classList.contains('ep-menu__item__sub-menu')) {
              return false // This element is inside a submenu, skip it
            }
            current = current.parentElement
          }
          return true // This is a direct child button/link
        })

        directButtons.forEach((el) => {
          if (el.getAttribute('tabindex') !== '-1') {
            el.setAttribute('tabindex', '-1')
          }
        })
      }
    }, [type, children])

    const handleMousedown = (event: React.MouseEvent) => {
      if (isDisabled) {
        // Prevent focus when clicking a disabled menu item
        // This prevents submenus from sticking open when clicking disabled items
        event.preventDefault()
        event.stopPropagation()
      }
    }

    const handleClick = (event: React.MouseEvent) => {
      if (isDisabled) {
        event.preventDefault()
        event.stopPropagation()
        return
      }

      if (type === 'item') {
        // If this item has a submenu, don't emit select - let keyboard handle it
        if (!hasSubmenu) {
          onSelect?.(event)
          // Close parent submenu if this item is inside one
          closeParentSubmenu?.()
        }
      }
    }

    const handleFocusIn = (event: React.FocusEvent) => {
      // Don't interfere with focus if it's going to a submenu item
      const isSubmenuElement = (event.target as HTMLElement).closest(
        '.ep-menu__item__sub-menu'
      )
      if (isSubmenuElement) {
        return // Let submenu items receive focus normally
      }

      // If focus goes to a child element (like a button), redirect it to the menu item wrapper
      if (event.target !== menuItemRef.current && menuItemRef.current) {
        event.preventDefault()
        event.stopPropagation()
        menuItemRef.current.focus()
      }
    }

    const handleFocusOut = (event: React.FocusEvent) => {
      // Close submenu if focus is leaving this menu item entirely
      if (showSubmenu && menuItemRef.current) {
        // Check if the new focus target is outside this menu item
        const newFocusTarget = event.relatedTarget as Node | null
        if (!menuItemRef.current.contains(newFocusTarget)) {
          setShowSubmenu(false)
        }
      }
    }

    const openSubmenuAndFocusFirst = useCallback(async () => {
      if (!hasSubmenu) return

      setShowSubmenu(true)

      // Wait for DOM update before focusing
      await new Promise((resolve) => setTimeout(resolve, 0))

      const submenuElement = menuItemRef.current?.querySelector('.ep-menu__item__sub-menu')
      const firstItem = submenuElement?.querySelector<HTMLElement>('[role="menuitem"]')

      if (firstItem) {
        // Ensure the first item is focusable
        if (firstItem.getAttribute('tabindex') !== '0') {
          firstItem.setAttribute('tabindex', '0')
        }
        firstItem.focus()
      }
    }, [hasSubmenu])

    const handleKeydown = (event: KeyboardEvent<HTMLDivElement>) => {
      if (type !== 'item') return

      const key = event.key

      // Handle Arrow Left from within submenu - close it and return to parent
      if (key === 'ArrowLeft') {
        if (closeParentSubmenu) {
          // We're inside a submenu, close it and focus parent
          event.preventDefault()
          event.stopPropagation()
          closeParentSubmenu()
          // Focus the parent menu item
          menuItemRef.current
            ?.closest('.ep-menu__item__sub-menu')
            ?.closest<HTMLElement>('.ep-menu__item')
            ?.focus()
          return
        }
        // If we have a submenu and it's open, close it
        if (showSubmenu) {
          event.preventDefault()
          event.stopPropagation()
          setShowSubmenu(false)
          menuItemRef.current?.focus()
        }
      }
      // Handle Enter and Space
      else if (key === 'Enter' || key === ' ') {
        event.preventDefault()
        event.stopPropagation()

        // If has submenu, open it and focus first item
        if (hasSubmenu) {
          openSubmenuAndFocusFirst()
        } else {
          // No submenu - activate the menu item
          onSelect?.(event)
          closeParentSubmenu?.()
        }
      }
      // Arrow right to open submenu if present
      else if (key === 'ArrowRight' && hasSubmenu) {
        event.preventDefault()
        event.stopPropagation()
        openSubmenuAndFocusFirst()
      }
      // Escape to close submenu
      else if (key === 'Escape' && showSubmenu) {
        event.preventDefault()
        event.stopPropagation()
        setShowSubmenu(false)
        menuItemRef.current?.focus()
      }
    }

    const handleMouseover = () => {
      if (hasSubmenu) {
        setShowSubmenu(true)
      }
    }

    const handleMouseleave = () => {
      // Only hide submenu on mouse leave if no element within this menu item has focus
      // This prevents submenu from hiding when using keyboard navigation
      if (!menuItemRef.current?.contains(document.activeElement)) {
        setShowSubmenu(false)
      }
    }

    // Render divider
    if (type === 'divider') {
      return <div className="ep-divider ep-divider--horizontal" role="separator" />
    }

    // Render section header
    if (type === 'section') {
      return (
        <div className="ep-menu__section text-style--section" role="presentation">
          {children}
        </div>
      )
    }

    // Render interactive menu item
    return (
      <SubmenuContext.Provider value={closeThisSubmenu}>
        <div
          ref={(node) => {
            menuItemRef.current = node
            if (typeof ref === 'function') {
              ref(node)
            } else if (ref) {
              ref.current = node
            }
          }}
          className={`ep-menu__item${className ? ` ${className}` : ''}`}
          role="menuitem"
          aria-haspopup={hasSubmenu ? 'menu' : undefined}
          aria-expanded={hasSubmenu ? String(showSubmenu) : undefined}
          tabIndex={-1}
          onMouseDown={handleMousedown}
          onClick={handleClick}
          onKeyDown={handleKeydown}
          onMouseOver={handleMouseover}
          onMouseLeave={handleMouseleave}
          onFocusCapture={handleFocusIn}
          onBlur={handleFocusOut}
        >
          {children}
          {submenu && (
            <div
              className="ep-menu__item__sub-menu"
              role="menu"
              style={{ display: showSubmenu ? undefined : 'none' }}
            >
              {submenu}
            </div>
          )}
        </div>
      </SubmenuContext.Provider>
    )
  }
)

EpMenuItem.displayName = 'EpMenuItem'

export default EpMenuItem
