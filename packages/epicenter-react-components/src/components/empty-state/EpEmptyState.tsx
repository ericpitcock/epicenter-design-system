import React, { ReactNode } from 'react'

export interface EpEmptyStateProps {
  /**
   * Layout direction of the empty state content.
   * @default 'column'
   */
  direction?: 'column' | 'row'
  /**
   * Horizontal alignment of the content.
   * @default 'center'
   */
  justify?: 'left' | 'center' | 'right'
  /**
   * Image or icon to display in the empty state
   */
  img?: ReactNode
  /**
   * Main content/message of the empty state
   */
  children?: ReactNode
  /**
   * Additional descriptive text or instructions
   */
  subtext?: ReactNode
  /**
   * Call-to-action button or link
   */
  cta?: ReactNode
}

export const EpEmptyState: React.FC<EpEmptyStateProps> = ({
  direction = 'column',
  justify = 'center',
  img,
  children,
  subtext,
  cta
}) => {
  const classes = [
    'ep-empty-state',
    direction === 'column' && 'ep-empty-state--column',
    direction === 'row' && 'ep-empty-state--row',
    justify === 'left' && 'ep-empty-state--justify-left',
    justify === 'right' && 'ep-empty-state--justify-right'
  ].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      {img && (
        <div className="ep-empty-state__img">
          {img}
        </div>
      )}
      <div className="ep-empty-state__body">
        {children}
        {subtext && (
          <div className="text--subtle font-size--small">
            {subtext}
          </div>
        )}
        {cta && (
          <div className="ep-empty-state__body__cta">
            {cta}
          </div>
        )}
      </div>
    </div>
  )
}
