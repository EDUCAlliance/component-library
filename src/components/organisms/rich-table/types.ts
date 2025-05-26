export interface RichTableProps {
  columns?: string
  class?: string
}

export interface RichTableHeaderProps {
  title?: string
  description?: string
  class?: string
}

export interface RichTableColumnProps {
  key: string
  label: string
  sortable?: boolean
  width?: string
  class?: string
}

export interface RichTableRowProps {
  class?: string
}

export interface RichTableCellProps {
  width?: string | "fit-content"
  class?: string
}

export interface RichTableActionsProps {
  class?: string
}

export interface RichTableData {
  [key: string]: string | number | boolean | null | undefined
}
