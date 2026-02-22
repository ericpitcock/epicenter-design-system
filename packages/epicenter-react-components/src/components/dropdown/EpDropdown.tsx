import React, { createContext, useContext, ReactNode, useEffect, useId, useRef, useState, KeyboardEvent } from 'react'

import { useClickOutside } from '../../hooks/useClickOutside'

// Context for compound components
interface DropdownContextValue {
  close: () => void
  contentId: string
  disabled: boolean
  isOpen: boolean
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
}

export function EpDropdown({ children, disabled = false, onOpenChange }: EpDropdownProps) {
  const uniqueId = useId()
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useClickOutside<HTMLDivElement>(() => {
    if (isOpen) {
      setIsOpen(false)
      onOpenChange?.(false)
    }
  })

  const close = () => {
    setIsOpen(false)
    onOpenChange?.(false)
  }

  const toggle = () => {
    if (disabled) return
    const newState = !isOpen
    setIsOpen(newState)
    onOpenChange?.(newState)
  }

  return (
    <DropdownContext.Provider
      value={{
        triggerId: `dropdown-trigger-${uniqueId}`,
        contentId: `dropdown-content-${uniqueId}`,
        isOpen,
        disabled,
        toggle,
        close
      }}
    >
      <div ref={containerRef} className="ep-dropdown">
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
  const { triggerId, contentId, isOpen, disabled, toggle } = useDropdown()

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    toggle()
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle()
    }
  }

  return (
    <div
      id={triggerId}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-haspopup="true"
      aria-expanded={isOpen}
      aria-controls={contentId}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      style={{ cursor: disabled ? 'not-allowed' : 'pointer', display: 'inline-block' }}
    >
      {children}
    </div>
  )
}

// Content Component
export interface EpDropdownContentProps {
  align?: 'start' | 'end'
  children: ReactNode | ((props: { close: () => void }) => ReactNode)
}

export function EpDropdownContent({ children, align = 'start' }: EpDropdownContentProps) {
  const { contentId, triggerId, isOpen, close } = useDropdown()
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && contentRef.current) {
      const firstFocusable = contentRef.current.querySelector('[role="menuitem"]') as HTMLElement
      firstFocusable?.focus()
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      id={contentId}
      ref={contentRef}
      role="menu"
      aria-labelledby={triggerId}
      className={`ep-dropdown__content ${align === 'end' ? 'ep-dropdown__content--align-end' : ''}`}
    >
      {typeof children === 'function' ? children({ close }) : children}
    </div>
  )
}

EpDropdown.displayName = 'EpDropdown'
EpDropdownTrigger.displayName = 'EpDropdownTrigger'
EpDropdownContent.displayName = 'EpDropdownContent'