import React, { ReactNode } from 'react'

export interface EpTabContentProps {
  /**
   * The index of the currently active tab.
   * @default 0
   */
  activeTabIndex?: number
  /**
   * An array of tab items (used to determine tab count).
   */
  items: unknown[]
  /**
   * Array of content for each tab panel
   */
  children?: ReactNode[]
}

const EpTabContent: React.FC<EpTabContentProps> = ({
  activeTabIndex = 0,
  items,
  children
}) => {
  const childArray = React.Children.toArray(children)

  return (
    <div className="ep-tab-content">
      {items.map((_, index) => (
        <div
          key={index}
          id={`tabpanel-${index}`}
          className={[
            'ep-tab-content__tab-item',
            index === activeTabIndex && 'ep-tab-content__tab-item--active'
          ].filter(Boolean).join(' ')}
          role="tabpanel"
          aria-labelledby={`tab-${index}`}
          aria-hidden={index !== activeTabIndex}
        >
          {childArray[index]}
        </div>
      ))}
    </div>
  )
}

export default EpTabContent
