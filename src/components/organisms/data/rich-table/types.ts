export interface RichTableProps {
  columns?: string
  class?: string
}

export interface RichTableHeaderProps {
  title?: string
  description?: string
  class?: string
}

export type RichTableSortDirection = "asc" | "desc"

export interface RichTableColumnProps {
  columnKey: string
  label: string
  sortable?: boolean
  sortDirection?: RichTableSortDirection
  class?: string
}

export interface RichTableRowProps {
  class?: string
}

export interface RichTableCellProps {
  class?: string
}

export interface RichTableActionsProps {
  class?: string
}
