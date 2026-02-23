import React, { createContext, useContext, ReactNode, useEffect, useId, useRef, useState, KeyboardEvent } from 'react'

import { useClickOutside } from '../../hooks/useClickOutside'

// Context for compound components
interface DropdownContextValue {
  close: () => void
  contentId: string
  disabled: boolean
  isOpen: boolean
  open: () => void
  showOnHover: boolean
  toggle: () => void
  triggerId: string
}

const DropdownContext = createContext<DropdownContextValue | null>(null)

function useDropdown() {
  const context = useContext(DropdownContext)
  if (!context) {
    throw new Error('Dropdown components must be used within EpDropdown')
  }
  return context
}

// Main Dropdown Component
export interface EpDropdownProps {
  children: ReactNode
  disabled?: boolean
  onOpenChange?: (open: boolean) => void
  showOnHover?: boolean
}

export function EpDropdown({ children, disabled = false, showOnHover = false, onOpenChange }: EpDropdownProps) {
  const uniqueId = useId()
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useClickOutside<HTMLDivElement>(() => {
    if (isOpen) {
      setIsOpen(false)
      onOpenChange?.(false)
    }
  })

  const open = () => {
    if (disabled || isOpen) return
    setIsOpen(true)
    onOpenChange?.(true)
  }

  const close = () => {
    if (disabled || !isOpen) return
    setIsOpen(false)
    onOpenChange?.(false)
  }

  const toggle = () => {
    if (disabled || showOnHover) return
    const newState = !isOpen
    setIsOpen(newState)
    onOpenChange?.(newState)
  }

  const handleMouseLeave = () => {
    if (!disabled && showOnHover) {
      setIsOpen(false)
      onOpenChange?.(false)
    }
  }

  return (
    <DropdownContext.Provider
      value={{
        triggerId: `ep-dropdown-trigger-${uniqueId}`,
        contentId: `ep-dropdown-panel-${uniqueId}`,
        isOpen,
        disabled,
        showOnHover,
        open,
        toggle,
        close
      }}
    >
      <div ref={containerRef} className="ep-dropdown" onMouseLeave={handleMouseLeave}>
        {children}
      </div>
    </DropdownContext.Provider>
  )
}

// Trigger Component
export interface EpDropdownTriggerProps {
  children: ReactNode
}

export function EpDropdownTrigger({ children }: EpDropdownTriggerProps) {
  const { triggerId, contentId, isOpen, disabled, showOnHover, open, toggle } = useDropdown()

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    toggle()
  }

  const handleMouseOver = () => {
    if (!disabled && showOnHover) {
      open()
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (disabled) return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      open()
    }
  }

  return (
    <div
      id={triggerId}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-haspopup="menu"
      aria-expanded={isOpen}
      aria-controls={contentId}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onKeyDown={handleKeyDown}
      style={{ cursor: disabled ? 'not-allowed' : 'pointer', display: 'inline-block' }}
    >
      {children}
    </div>
  )
}

// Content Component
export interface EpDropdownContentProps {
  alignRight?: boolean
  children: ReactNode | ((props: { close: () => void }) => ReactNode)
}

export function EpDropdownContent({ children, alignRight = false }: EpDropdownContentProps) {
  const { contentId, triggerId, isOpen, close } = useDropdown()
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && contentRef.current) {
      const firstFocusable = contentRef.current.querySelector('[role="menuitem"]') as HTMLElement
      firstFocusable?.focus()
    }
  }, [isOpen])

  return (
    <div
      id={contentId}
      className={`ep-dropdown__container${alignRight ? ' ep-dropdown__container--align-right' : ''}`}
      role="region"
      aria-labelledby={triggerId}
      style={{ display: isOpen ? undefined : 'none' }}
    >
      <div
        ref={contentRef}
        className="ep-dropdown__content"
        tabIndex={-1}
      >
        {typeof children === 'function' ? children({ close }) : children}
      </div>
    </div>
  )
}

EpDropdown.displayName = 'EpDropdown'
EpDropdownTrigger.displayName = 'EpDropdownTrigger'
EpDropdownContent.displayName = 'EpDropdownContent'