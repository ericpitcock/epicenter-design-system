import React, { useMemo } from 'react'
import type { Column } from './EpTable'

export interface EpTableCellProps {
  /** Row data object */
  row: any
  /** Column configuration */
  column: Column
  /** Additional styles */
  styles?: React.CSSProperties[]
}

/**
 * EpTableCell - Table cell component with formatter support
 * 
 * Renders table cell content with optional value formatting via column.formatter.
 */
const EpTableCell: React.FC<EpTableCellProps> = ({ row, column, styles = [] }) => {
  const cellContent = useMemo(() => {
    const value = row[column.key]
    const formatter = column.formatter

    if (formatter) {
      return formatter(value, row)
    }
    return value
  }, [row, column])

  return <span className={column.class}>{cellContent}</span>
}

export default EpTableCell
