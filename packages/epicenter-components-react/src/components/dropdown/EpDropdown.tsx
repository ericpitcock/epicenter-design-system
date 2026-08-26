import React, { createContext, useCallback, useContext, ReactNode, useEffect, useId, useRef, useState, KeyboardEvent } from 'react'

// TS 5.9's lib.dom predates the `source` option on showPopover().
type PopoverPanel = HTMLElement & {
  showPopover(options?: { source?: HTMLElement }): void
}

// Context for compound components
interface DropdownContextValue {
  autoFocus: boolean
  close: () => void
  contentId: string
  disabled: boolean
  focusFirstMenuItem: () => void
  isOpen: boolean
  // Synchronous mirror of isOpen. Event handlers must read this instead of
  // isOpen: a light dismiss can flip the state between pointerdown and click,
  // and the closure's isOpen may still hold the pre-dismiss value.
  isOpenRef: React.RefObject<boolean>
  open: () => void
  // Set by the trigger before open() when focus must move into the menu on
  // this open even though autoFocus is off (explicit ArrowDown navigation).
  pendingMenuFocus: React.MutableRefObject<boolean>
  showOnHover: boolean
  syncFromPopover: (open: boolean) => void
  toggle: () => void
  triggerId: string
  triggerRef: React.RefObject<HTMLDivElement>
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
  autoFocus?: boolean
  children: ReactNode
  disabled?: boolean
  onOpenChange?: (open: boolean) => void
  showOnHover?: boolean
}

// The old padding-top hover bridge is gone (the gap is a margin now, and the
// panel may flip above the trigger), so hover-close gets a grace period that
// survives the pointer crossing the gap.
const HOVER_CLOSE_DELAY = 150

export function EpDropdown({ children, autoFocus = true, disabled = false, showOnHover = false, onOpenChange }: EpDropdownProps) {
  const uniqueId = useId()
  const [isOpen, setIsOpen] = useState(false)
  const isOpenRef = useRef(false)
  const triggerRef = useRef<HTMLDivElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const pendingMenuFocus = useRef(false)
  const hoverCloseTimer = useRef<ReturnType<typeof setTimeout>>()
  const onOpenChangeRef = useRef(onOpenChange)
  onOpenChangeRef.current = onOpenChange

  const setOpenState = (next: boolean) => {
    isOpenRef.current = next
    setIsOpen(next)
    onOpenChangeRef.current?.(next)
  }

  const cancelHoverClose = () => {
    if (hoverCloseTimer.current === undefined) return
    clearTimeout(hoverCloseTimer.current)
    hoverCloseTimer.current = undefined
  }

  const open = () => {
    if (disabled || isOpenRef.current) return
    cancelHoverClose()
    setOpenState(true)
  }

  // Closing is always safe, so unlike open this is not gated on `disabled`.
  const close = () => {
    if (!isOpenRef.current) return
    setOpenState(false)
    triggerRef.current?.focus()
  }

  const toggle = () => {
    if (disabled || showOnHover) return
    if (isOpenRef.current) {
      close()
    } else {
      open()
    }
  }

  // Light dismiss and native Escape close the popover without going through
  // close() — sync state here. No focus move: on light dismiss the user just
  // clicked somewhere else, and on Escape the browser restores focus to the
  // invoker itself. Guarded on the ref, not closure state, so the explicit
  // close path (which hides the popover after already updating state) never
  // double-fires onOpenChange.
  const syncFromPopover = useCallback((next: boolean) => {
    if (next === isOpenRef.current) return
    isOpenRef.current = next
    setIsOpen(next)
    onOpenChangeRef.current?.(next)
  }, [])

  const handleMouseLeave = () => {
    if (!disabled && showOnHover) {
      hoverCloseTimer.current = setTimeout(close, HOVER_CLOSE_DELAY)
    }
  }

  // Skip disabled items: EpMenu excludes them from roving focus, so landing
  // on one would strand arrow-key navigation. Stable identity: it is an
  // effect dependency in EpDropdownContent.
  const focusFirstMenuItem = useCallback(() => {
    const firstMenuItem = rootRef.current?.querySelector('[role="menuitem"]:not([aria-disabled="true"])') as HTMLElement | null
    firstMenuItem?.focus()
  }, [])

  return (
    <DropdownContext.Provider
      value={{
        triggerId: `ep-dropdown-trigger-${uniqueId}`,
        contentId: `ep-dropdown-panel-${uniqueId}`,
        autoFocus,
        focusFirstMenuItem,
        isOpen,
        isOpenRef,
        disabled,
        pendingMenuFocus,
        showOnHover,
        open,
        syncFromPopover,
        toggle,
        close,
        triggerRef
      }}
    >
      <div ref={rootRef} className="ep-dropdown" onMouseLeave={handleMouseLeave} onMouseOver={cancelHoverClose}>
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
  const { triggerId, contentId, focusFirstMenuItem, isOpen, isOpenRef, disabled, pendingMenuFocus, showOnHover, close, open, toggle, triggerRef } = useDropdown()

  // If pointerdown on the trigger light-dismisses the popover, the click that
  // follows must not reopen (or re-close) it — without this guard the click
  // would immediately reopen. Read isOpenRef, not isOpen: the dismissal
  // happens between pointerdown and click, and the click closure's isOpen may
  // still hold the pre-dismiss value.
  const wasOpenOnPointerDown = useRef(false)

  const handlePointerDown = () => {
    wasOpenOnPointerDown.current = isOpenRef.current === true
  }

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    const closedByLightDismiss = wasOpenOnPointerDown.current && isOpenRef.current === false
    wasOpenOnPointerDown.current = false
    if (closedByLightDismiss) return
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
      // Explicit keyboard navigation: move focus into the menu even when
      // autoFocus is off (which only governs focus-steal on open) or the
      // dropdown is already open.
      if (isOpenRef.current) {
        focusFirstMenuItem()
      } else {
        pendingMenuFocus.current = true
        open()
      }
    } else if (e.key === 'Escape') {
      e.preventDefault()
      close()
    }
  }

  return (
    <div
      id={triggerId}
      ref={triggerRef}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-haspopup="menu"
      aria-expanded={isOpen}
      aria-controls={contentId}
      onClick={handleClick}
      onPointerDown={handlePointerDown}
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
  const { contentId, triggerId, autoFocus, focusFirstMenuItem, isOpen, close, pendingMenuFocus, syncFromPopover, triggerRef } = useDropdown()
  const panelRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Registered before the show/hide effect so its closure is fresh when
  // showPopover()/hidePopover() below fire beforetoggle synchronously.
  useEffect(() => {
    const panel = panelRef.current
    if (!panel) return
    const handleBeforeToggle = (event: Event) => {
      syncFromPopover((event as ToggleEvent).newState === 'open')
    }
    panel.addEventListener('beforetoggle', handleBeforeToggle)
    return () => panel.removeEventListener('beforetoggle', handleBeforeToggle)
  }, [syncFromPopover])

  useEffect(() => {
    const panel = panelRef.current
    if (!panel) return
    if (isOpen) {
      if (!panel.matches(':popover-open')) {
        // `source` makes the trigger the popover's invoker: exempt from light
        // dismiss, and focus returns to it natively when Escape closes the
        // panel.
        ;(panel as PopoverPanel).showPopover({ source: triggerRef.current ?? undefined })
      }
      if (autoFocus || pendingMenuFocus.current) {
        focusFirstMenuItem()
      }
    }
    pendingMenuFocus.current = false
    if (!isOpen && panel.matches(':popover-open')) {
      panel.hidePopover()
    }
  }, [isOpen, autoFocus, focusFirstMenuItem, pendingMenuFocus, triggerRef])

  return (
    <div
      id={contentId}
      ref={panelRef}
      // @types/react 18 has no `popover` attribute yet; the cast keeps the
      // plain attribute in the initial markup so the UA sheet hides the panel
      // before the first effect runs.
      {...({ popover: 'auto' } as React.HTMLAttributes<HTMLDivElement>)}
      className={`ep-dropdown__container${alignRight ? ' ep-dropdown__container--align-right' : ''}`}
      role="region"
      aria-labelledby={triggerId}
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
