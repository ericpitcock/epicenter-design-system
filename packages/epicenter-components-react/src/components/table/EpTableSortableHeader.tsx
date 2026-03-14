import React, { useMemo } from 'react'

import type { Column } from './EpTable'

export type SortOrder = 'asc' | 'desc'

export interface EpTableSortableHeaderProps {
  /** Array of width values for each column cell */
  cellWidths?: React.CSSProperties[]
  /** Column configuration */
  column: Column
  /** Column index */
  columnIndex?: number
  /** Callback when header is clicked for sorting */
  onSort: (columnKey: string) => void
  /** Currently sorted column key */
  sortColumn: string
  /** Current sort order */
  sortOrder: SortOrder
}

/**
 * EpTableSortableHeader - Sortable table header cell
 * 
 * Displays column header with sort indicators and handles sort toggle.
 */
export const EpTableSortableHeader: React.FC<EpTableSortableHeaderProps> = ({
  column,
  cellWidths = [],
  columnIndex = 0,
  sortColumn,
  sortOrder,
  onSort
}) => {
  const headerClass = useMemo(() => {
    const classes = ['ep-table-sortable-header']
    if (sortColumn === column.key) {
      classes.push('ep-table-sortable-header--active')
    }
    return classes.join(' ')
  }, [sortColumn, column.key])

  const isSorted = column.sortable && sortColumn === column.key

  return (
    <th
      style={cellWidths[columnIndex]}
      onClick={() => onSort(column.key)}
    >
      <div className={headerClass}>
        {column.label}
        {isSorted && sortOrder === 'asc' && (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 4l4 6H4z" />
          </svg>
        )}
        {isSorted && sortOrder === 'desc' && (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 12l-4-6h8z" />
          </svg>
        )}
      </div>
    </th>
  )
}
