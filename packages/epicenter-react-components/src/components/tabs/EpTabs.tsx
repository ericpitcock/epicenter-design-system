import React, { useRef, KeyboardEvent } from 'react'
import { Link } from 'react-router-dom'

export interface TabItem {
  label: string
  to?: string
  exact?: boolean
}

export interface EpTabsProps {
  /**
   * The index of the active tab.
   * @default 0
   */
  activeTabIndex?: number
  /**
   * The tabs to display.
   */
  items: (string | TabItem)[]
  /**
   * The variant of the tabs, default or classic.
   * @default 'default'
   */
  variant?: 'default' | 'classic'
  /**
   * Handler called when a tab is clicked
   */
  onTabClick?: (data: { item: TabItem; index: number }) => void
}

const EpTabs: React.FC<EpTabsProps> = ({
  activeTabIndex = 0,
  items,
  variant = 'default',
  onTabClick
}) => {
  const tabListRef = useRef<HTMLDivElement>(null)

  const tabs = items.map(item => 
    typeof item === 'object' ? item : { label: item }
  )

  const handleClick = (item: TabItem, index: number) => {
    if (!item.to) {
      onTabClick?.({ item, index })
    }
  }

  const focusTab = (index: number) => {
    const tabElements = tabListRef.current?.querySelectorAll('[role="tab"]') || []
    ;(tabElements[index] as HTMLElement)?.focus()
  }

  const handleKeyDown = (index: number, event: KeyboardEvent) => {
    const keyActions: Record<string, () => void> = {
      ArrowRight: () => focusTab((index + 1) % tabs.length),
      ArrowLeft: () => focusTab((index - 1 + tabs.length) % tabs.length),
      Home: () => focusTab(0),
      End: () => focusTab(tabs.length - 1),
      Enter: () => onTabClick?.({ item: tabs[index], index }),
      ' ': () => onTabClick?.({ item: tabs[index], index })
    }

    if (keyActions[event.key]) {
      event.preventDefault()
      keyActions[event.key]()
    }
  }

  return (
    <div
      ref={tabListRef}
      className={[
        'ep-tabs',
        variant === 'classic' && 'ep-tabs--classic'
      ].filter(Boolean).join(' ')}
      role="tablist"
    >
      {tabs.map((item, index) => {
        const isActive = !item.to && index === activeTabIndex
        const tabClasses = [
          'ep-tabs__tab-item',
          isActive && 'ep-tabs__tab-item--active'
        ].filter(Boolean).join(' ')

        const commonProps = {
          id: `tab-${index}`,
          'aria-controls': `tabpanel-${index}`,
          className: tabClasses,
          role: 'tab' as const,
          'aria-selected': index === activeTabIndex,
          tabIndex: index === activeTabIndex ? 0 : -1,
          onKeyDown: (e: KeyboardEvent) => handleKeyDown(index, e)
        }

        if (item.to) {
          return (
            <Link
              key={index}
              to={item.to}
              {...commonProps}
            >
              <span>{item.label}</span>
            </Link>
          )
        }

        return (
          <button
            key={index}
            type="button"
            {...commonProps}
            onClick={() => handleClick(item, index)}
          >
            <span>{item.label}</span>
          </button>
        )
      })}
    </div>
  )
}

export default EpTabs
