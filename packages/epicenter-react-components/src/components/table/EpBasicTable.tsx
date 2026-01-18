import React from 'react'
import type { Column } from './EpTable'

export interface EpBasicTableProps {
  /** The columns of the table */
  columns: Column[]
  /** The data of the table */
  data: any[]
  /** Gives borders to your table rows */
  bordered?: boolean
  /** Compact rows in a single line table scenario */
  compact?: boolean
  /** Background colors for every other row */
  striped?: boolean
  /** Additional CSS classes */
  className?: string
}

/**
 * EpBasicTable - Simple table component without advanced features
 * 
 * A lightweight table for basic data display with optional styling variants.
 */
const EpBasicTable: React.FC<EpBasicTableProps> = ({
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

export default EpBasicTable
