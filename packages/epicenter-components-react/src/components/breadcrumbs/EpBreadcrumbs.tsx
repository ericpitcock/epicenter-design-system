import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export interface BreadcrumbItem {
  customClass?: string
  label: string
  to?: string
}

export interface EpBreadcrumbsProps {
  /**
   * An array of breadcrumb items with label, to, and optional customClass properties.
   */
  items?: BreadcrumbItem[]
  /**
   * Custom render function for breadcrumb items
   */
  renderItem?: (crumb: BreadcrumbItem, index: number, isLast: boolean) => ReactNode
  /**
   * Custom separator between breadcrumb items
   */
  separator?: ReactNode
}

export const EpBreadcrumbs: React.FC<EpBreadcrumbsProps> = ({
  items = [],
  separator,
  renderItem
}) => {
  const defaultSeparator = separator || (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  return (
    <nav aria-label="Breadcrumb">
      <ol className="ep-breadcrumbs">
        {items.map((crumb, index) => {
          const isLast = index === items.length - 1

          return (
            <li
              key={index}
              className={['ep-breadcrumbs__item', crumb.customClass].filter(Boolean).join(' ')}
            >
              {renderItem ? (
                renderItem(crumb, index, isLast)
              ) : (
                <>
                  {!isLast && crumb.to ? (
                    <Link to={crumb.to}>
                      {crumb.label}
                    </Link>
                  ) : (
                    <span
                      aria-current={isLast ? 'page' : undefined}
                      className={isLast ? 'ep-breadcrumbs__item--current' : undefined}
                    >
                      {crumb.label}
                    </span>
                  )}
                  {!isLast && (
                    <span className="ep-breadcrumbs__separator" aria-hidden="true">
                      {defaultSeparator}
                    </span>
                  )}
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
