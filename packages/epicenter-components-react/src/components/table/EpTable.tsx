import React, { useRef } from 'react'

export interface Column {
  class?: string
  formatter?: (value: any, row: any) => any
  key: string
  label: string
  sortable?: boolean
}

export interface EpTableProps {
  /** Gives borders to your table rows */
  bordered?: boolean
  /** Additional CSS classes */
  className?: string
  /** The columns of the table */
  columns: Column[]
  /** Compact rows in a single line table scenario */
  compact?: boolean
  /** The data of the table */
  data: any[]
  /** Whether to use a fixed header or not */
  fixedHeader?: boolean
  /** Columns to hide, but not filter from the data */
  hiddenColumns?: string[]
  /** Callback when container scrolls */
  onContainerScroll?: (scrollLeft: number) => void
  /** Callback when row is clicked */
  onRowClick?: (row: any) => void
  /** Actions menu renderer for each row */
  renderActionsMenu?: (row: any) => React.ReactNode
  /** Custom cell renderer for specific column */
  renderCell?: (column: Column, row: any) => React.ReactNode
  /** Custom fixed header renderer */
  renderFixedHeader?: (props: { visibleColumns: Column[]; showActionsMenu: boolean }) => React.ReactNode
  /** Custom header renderer */
  renderHeader?: (props: { visibleColumns: Column[]; showActionsMenu: boolean }) => React.ReactNode
  /** Selectable rows */
  selectable?: boolean
  /** Enable actions menu */
  showActionsMenu?: boolean
  /** Sticky header or nah */
  stickyHeader?: boolean
  /** Background colors for every other row */
  striped?: boolean
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
    const tableContainerRef = useRef<HTMLDivElement | null>(null)
    const tableElementRef = useRef<HTMLTableElement | null>(null)
    const tableFixedViewportRef = useRef<HTMLDivElement | null>(null)
    const tableFixedRef = useRef<HTMLTableElement | null>(null)
    const tablePinSentinelRef = useRef<HTMLDivElement | null>(null)

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
        {/*
          Marks the top edge of the header for a consumer's pin detection. A
          zero-height marker rather than the header itself: an observer can only
          report the header leaving the viewport, which happens a full
          header-height after its top reaches the line.
        */}
        <div
          ref={tablePinSentinelRef}
          className="ep-table__pin-sentinel"
          aria-hidden="true"
        />
        <table
          ref={tableElementRef}
          className={tableClasses}
        >
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
          /*
           * The pinned header is `position: fixed`, so the container's
           * `overflow` does not clip it — scrolled right it would hang off the
           * container's leading edge. This wrapper is the fixed, clipping box;
           * the table inside is what translates, driven by the container's
           * scroll timeline in CSS.
           *
           * There is no React equivalent of Vue's `useFixedHeader` yet, so a
           * consumer still owns the measuring: size this wrapper over the
           * container's scrollport, copy the header cell widths, and set
           * `--ep-table-fixed-offset` on the table to
           * `-(scrollWidth - clientWidth)px`. None of that belongs on a scroll
           * handler — the CSS animation reads the scroll position itself.
           */
          <div
            ref={tableFixedViewportRef}
            className="ep-table-fixed-viewport"
            aria-hidden="true"
            inert
          >
            <table
              ref={tableFixedRef}
              className="ep-table ep-table--fixed-header"
            >
              {renderFixedHeader?.({ visibleColumns, showActionsMenu })}
            </table>
          </div>
        )}
      </div>
    )
  }
)

EpTable.displayName = 'EpTable'
