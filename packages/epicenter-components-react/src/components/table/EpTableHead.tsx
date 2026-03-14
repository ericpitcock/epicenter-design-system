import React from 'react'

import type { Column } from './EpTable'

export interface EpTableHeadProps {
  /** Array of width values for each column cell */
  cellWidths?: React.CSSProperties[]
  /** Array of column configuration objects defining table structure */
  columns: Column[]
  /** If true, enables fixed header behavior */
  fixedHeader?: boolean
  /** Custom header renderer for sortable columns */
  renderHeader?: (props: {
    column: Column
    cellWidths: React.CSSProperties[]
    columnIndex: number
  }) => React.ReactNode
  /** If true, shows an additional column for the actions menu */
  showActionsMenu?: boolean
}

/**
 * EpTableHead - Table header component with support for custom column rendering
 * 
 * Used within EpTable to render table headers with optional custom renderers
 * for sortable columns.
 */
export const EpTableHead: React.FC<EpTableHeadProps> = ({
  columns,
  cellWidths = [],
  showActionsMenu = false,
  renderHeader
}) => {
  return (
    <thead>
      <tr>
        {columns.map((column, columnIndex) => {
          if (renderHeader && column.sortable) {
            return (
              <React.Fragment key={`head-${column.key}`}>
                {renderHeader({ column, cellWidths, columnIndex })}
              </React.Fragment>
            )
          }

          return (
            <th key={`head-${column.key}`} style={cellWidths[columnIndex]}>
              <div>
                <span className="label">{column.label}</span>
              </div>
            </th>
          )
        })}
        {showActionsMenu && (
          <th className="ep-table__actions-menu">
            <div>
              <span className="label">&nbsp;</span>
            </div>
          </th>
        )}
      </tr>
    </thead>
  )
}
