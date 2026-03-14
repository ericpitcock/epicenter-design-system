import React, { useMemo } from 'react'

import type { Column } from './EpTable'

export interface EpTableCellProps {
  /** Column configuration */
  column: Column
  /** Row data object */
  row: any
  /** Additional styles */
  styles?: React.CSSProperties[]
}

/**
 * EpTableCell - Table cell component with formatter support
 * 
 * Renders table cell content with optional value formatting via column.formatter.
 */
export const EpTableCell: React.FC<EpTableCellProps> = ({ row, column }) => {
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
