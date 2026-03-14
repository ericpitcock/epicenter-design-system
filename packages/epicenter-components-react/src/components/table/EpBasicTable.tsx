import React from 'react'

import type { Column } from './EpTable'

export interface EpBasicTableProps {
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
  /** Background colors for every other row */
  striped?: boolean
}

/**
 * EpBasicTable - Simple table component without advanced features
 * 
 * A lightweight table for basic data display with optional styling variants.
 */
export const EpBasicTable: React.FC<EpBasicTableProps> = ({
  columns,
  data,
  bordered = false,
  compact = false,
  striped = false,
  className = ''
}) => {
  const tableClasses = [
    'ep-table',
    bordered && 'ep-table--bordered',
    compact && 'ep-table--compact',
    striped && 'ep-table--striped',
    className
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="ep-table-container">
      <table className={tableClasses}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>
                <div>
                  <span>{column.label}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={row.id || rowIndex}>
              {columns.map((column) => (
                <td key={column.key}>{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
