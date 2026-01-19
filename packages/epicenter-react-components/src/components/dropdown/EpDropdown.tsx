import React, { ReactNode, useEffect, useId, useRef, useState, KeyboardEvent } from 'react'

import { useClickOutside } from '../../hooks/useClickOutside'

export interface EpDropdownTriggerProps {
  attrs: {
    id: string
    'aria-haspopup': string
    'aria-expanded': string
    'aria-controls': string
    disabled?: boolean
  }
  close: () => void
  isOpen: boolean
  onClick: () => void
  onKeyDown: (e: KeyboardEvent) => void
  onMouseOver: () => void
  open: () => void
  toggle: () => void
}

export interface EpDropdownProps {
  /**
   * If true, aligns the dropdown content to the right edge of the trigger.
   * @default false
   */
  alignRight?: boolean
  /**
   * Content displayed inside the dropdown panel when open
   */
  children?: ReactNode | ((props: { close: () => void }) => ReactNode)
  /**
   * If true, disables the dropdown
   * @default false
   */
  disabled?: boolean
  /**
   * Handler called when dropdown is clicked
   */
  onClick?: () => void
  /**
   * Handler called when dropdown is closed
   */
  onClose?: () => void
  /**
   * If true, opens the dropdown on hover instead of click.
   * @default false
   */
  showOnHover?: boolean
  /**
   * Trigger element that opens/closes the dropdown
   */
  trigger?: ReactNode | ((props: EpDropdownTriggerProps) => ReactNode)
}

export const EpDropdown = React.forwardRef<{ openDropdown: () => void; closeDropdown: () => void; toggleDropdown: () => void }, EpDropdownProps>(({
  alignRight = false,
  showOnHover = false,
  disabled = false,
  trigger,
  children,
  onClick,
  onClose
}, ref) => {
  const uniqueId = useId()
  const triggerId = `ep-dropdown-trigger-${uniqueId}`
  const contentId = `ep-dropdown-panel-${uniqueId}`
  
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const openDropdown = () => {
    if (disabled || dropdownVisible) return
    setDropdownVisible(true)
  }

  const closeDropdown = () => {
    if (disabled || !dropdownVisible) return
    setDropdownVisible(false)
    onClose?.()
  }

  const dropdownRef = useClickOutside<HTMLDivElement>(closeDropdown)

  const toggleDropdown = () => {
    if (disabled || showOnHover) return
    setDropdownVisible(!dropdownVisible)
    onClick?.()
  }

  // Focus management
  useEffect(() => {
    if (dropdownVisible) {
      // Focus first menu item when opening
      const firstMenuItem = contentRef.current?.querySelector('[role="menuitem"]') as HTMLElement
      firstMenuItem?.focus()
    } else {
      // Return focus to trigger when closing
      const trigger = dropdownRef.current?.querySelector(`#${CSS.escape(triggerId)}`) as HTMLElement
      trigger?.focus()
    }
  }, [dropdownVisible, triggerId])

  const handleKeyDown = (e: KeyboardEvent) => {
    if (disabled) return
    
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleDropdown()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      openDropdown()
    } else if (e.key === 'Escape') {
      e.preventDefault()
      closeDropdown()
    }
  }

  const handleMouseOver = () => {
    if (!disabled && showOnHover) {
      setDropdownVisible(true)
    }
  }

  const handleMouseLeave = () => {
    if (!disabled && showOnHover) {
      setDropdownVisible(false)
    }
  }

  // Expose methods via ref
  React.useImperativeHandle(ref, () => ({
    openDropdown,
    closeDropdown,
    toggleDropdown
  }))

  const triggerAttrs = {
    id: triggerId,
    'aria-haspopup': 'menu' as const,
    'aria-expanded': String(dropdownVisible),
    'aria-controls': contentId,
    disabled: disabled || undefined
  }

  const triggerProps: EpDropdownTriggerProps = {
    isOpen: dropdownVisible,
    open: openDropdown,
    close: closeDropdown,
    toggle: toggleDropdown,
    attrs: triggerAttrs,
    onClick: toggleDropdown,
    onMouseOver: handleMouseOver,
    onKeyDown: handleKeyDown
  }

  return (
    <div
      ref={dropdownRef}
      className="ep-dropdown"
      onMouseLeave={handleMouseLeave}
    >
      {typeof trigger === 'function' ? (
        trigger(triggerProps)
      ) : trigger ? (
        <div
          id={triggerAttrs.id}
          aria-haspopup={triggerAttrs['aria-haspopup']}
          aria-expanded={dropdownVisible}
          aria-controls={triggerAttrs['aria-controls']}
          onClick={toggleDropdown}
          onMouseOver={handleMouseOver}
          onKeyDown={handleKeyDown}
        >
          {trigger}
        </div>
      ) : (
        <button
          type="button"
          {...triggerAttrs}
          aria-expanded={dropdownVisible}
          onClick={toggleDropdown}
          onMouseOver={handleMouseOver}
          onKeyDown={handleKeyDown}
        >
          Default dropdown
        </button>
      )}
      {dropdownVisible && (
        <div
          id={contentId}
          className={[
            'ep-dropdown__container',
            alignRight && 'ep-dropdown__container--align-right'
          ].filter(Boolean).join(' ')}
          role="region"
          aria-labelledby={triggerId}
        >
          <div
            ref={contentRef}
            className="ep-dropdown__content"
            tabIndex={-1}
          >
            {typeof children === 'function' ? children({ close: closeDropdown }) : children}
          </div>
        </div>
      )}
    </div>
  )
})

EpDropdown.displayName = 'EpDropdown'
