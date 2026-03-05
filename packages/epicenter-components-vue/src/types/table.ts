/** Column configuration for EpTable and related table components */
export interface TableColumn {
  /** CSS class applied to cells in this column */
  class?: string
  /** Whether the column appears in filter UI */
  filterable?: boolean
  /** Custom formatter to display cell content */
  formatter?: (value: unknown, row: TableRow) => string
  /** Unique key used to access row data */
  key: string
  /** Display label for the column header */
  label: string
  /** Whether the column is sortable */
  sortable?: boolean
  /** Custom sort comparator for this column */
  sorter?: (a: TableRow, b: TableRow) => number
}

/** A single row of table data, keyed by column key */
export type TableRow = Record<string, unknown>

/** Parsed search query with AND/OR logic */
export interface SearchTerms {
  and: string[]
  or: string[]
}

/** A checkbox filter item for column or data filtering */
export interface CheckboxFilter {
  checked: boolean
  disabled: boolean
  filterable?: boolean
  id: string
  label: string
  name: string
  value: string
}

/** Payload emitted when a data filter checkbox is toggled */
export interface FilterUpdatePayload {
  category: string
  checked: boolean
  label: string
}

/** Maps column keys to range-category predicates for data filtering */
export type ColumnRangeCategories = Record<string, Record<string, RangePredicate>>

/** Predicate function that tests whether a cell value falls within a range category */
export type RangePredicate = (value: unknown) => boolean

/** Maps column keys to custom sort orderings (array of value strings in desired order) */
export type CustomSortOrder = Record<string, string[]>

/** Map of column keys to their checkbox filter arrays */
export interface Filters {
  [columnKey: string]: CheckboxFilter[]
}
