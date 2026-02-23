import React, { useRef } from 'react'

export interface Column {
  key: string
  label: string
  sortable?: boolean
  formatter?: (value: any, row: any) => any
  class?: string
}

export interface EpTableProps {
  /** The columns of the table */
  columns: Column[]
  /** The data of the table */
  data: any[]
  /** Columns to hide, but not filter from the data */
  hiddenColumns?: string[]
  /** Compact rows in a single line table scenario */
  compact?: boolean
  /** Gives borders to your table rows */
  bordered?: boolean
  /** Selectable rows */
  selectable?: boolean
  /** Background colors for every other row */
  striped?: boolean
  /** Sticky header or nah */
  stickyHeader?: boolean
  /** Whether to use a fixed header or not */
  fixedHeader?: boolean
  /** Enable actions menu */
  showActionsMenu?: boolean
  /** Custom header renderer */
  renderHeader?: (props: { visibleColumns: Column[]; showActionsMenu: boolean }) => React.ReactNode
  /** Custom fixed header renderer */
  renderFixedHeader?: (props: { visibleColumns: Column[]; showActionsMenu: boolean }) => React.ReactNode
  /** Custom cell renderer for specific column */
  renderCell?: (column: Column, row: any) => React.ReactNode
  /** Actions menu renderer for each row */
  renderActionsMenu?: (row: any) => React.ReactNode
  /** Callback when row is clicked */
  onRowClick?: (row: any) => void
  /** Callback when container scrolls */
  onContainerScroll?: (scrollLeft: number) => void
  /** Additional CSS classes */
  className?: string
}

/**
 * EpTable - Advanced table component with customizable columns, sorting, and actions
 * 
 * Supports hidden columns, selectable rows, striped/bordered styling, sticky headers,
 * and custom cell rendering with slot-like props.
 */
export const EpTable = React.forwardRef<HTMLDivElement, EpTableProps>(
  (
    {
      columns,
      data,
      hiddenColumns = [],
      compact = false,
      bordered = false,
      selectable = false,
      striped = false,
      stickyHeader = false,
      fixedHeader = false,
      showActionsMenu = false,
      renderHeader,
      renderFixedHeader,
      renderCell,
      renderActionsMenu,
      onRowClick,
      onContainerScroll,
      className = ''
    },
    ref
  ) => {
    const tableContainerRef = useRef<HTMLDivElement>(null)

    const visibleColumns = columns.filter(
      (column) => !hiddenColumns.includes(column.key)
    )

    const tableClasses = [
      'ep-table',
      bordered && 'ep-table--bordered',
      compact && 'ep-table--compact',
      selectable && 'ep-table--selectable',
      stickyHeader && 'ep-table--sticky',
      striped && 'ep-table--striped',
      className
    ]
      .filter(Boolean)
      .join(' ')

    const handleRowClick = (row: any) => {
      if (!selectable) return
      onRowClick?.(row)
    }

    const handleScroll = () => {
      if (!fixedHeader || !tableContainerRef.current) return
      onContainerScroll?.(tableContainerRef.current.scrollLeft)
    }

    const defaultCellRenderer = (column: Column, row: any) => {
      const value = row[column.key]
      const formatter = column.formatter

      if (formatter) {
        return formatter(value, row)
      }
      return value
    }

    return (
      <div
        ref={(node) => {
          tableContainerRef.current = node
          if (typeof ref === 'function') {
            ref(node)
          } else if (ref) {
            ref.current = node
          }
        }}
        className="ep-table-container"
        onScroll={handleScroll}
      >
        <table className={tableClasses}>
          {renderHeader ? (
            renderHeader({ visibleColumns, showActionsMenu })
          ) : (
            <thead>
              <tr>
                {visibleColumns.map((column) => (
                  <th key={column.key}>
                    <div>
                      <span className="label">{column.label}</span>
                    </div>
                  </th>
                ))}
                {showActionsMenu && (
                  <th className="ep-table__actions-menu">
                    <div>
                      <span className="label">&nbsp;</span>
                    </div>
                  </th>
                )}
              </tr>
            </thead>
          )}
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={row.id || rowIndex} onClick={() => handleRowClick(row)}>
                {visibleColumns.map((column) => (
                  <td key={`body-${column.key}`}>
                    {renderCell ? (
                      renderCell(column, row)
                    ) : (
                      <span className={column.class}>
                        {defaultCellRenderer(column, row)}
                      </span>
                    )}
                  </td>
                ))}
                {showActionsMenu && (
                  <td className="ep-table__actions-menu">
                    {renderActionsMenu?.(row)}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        {fixedHeader && (
          <table
            className="ep-table ep-table--fixed-header"
            style={{ display: fixedHeader ? undefined : 'none' }}
          >
            {renderFixedHeader?.({ visibleColumns, showActionsMenu })}
          </table>
        )}
      </div>
    )
  }
)

EpTable.displayName = 'EpTable'
