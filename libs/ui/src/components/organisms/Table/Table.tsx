import MuiTable, { TableProps } from '@mui/material/Table'
import MuiTableBody, { TableBodyProps } from '@mui/material/TableBody'
import MuiTableCell, { TableCellProps } from '@mui/material/TableCell'
import MuiTableContainer, {
  TableContainerProps,
} from '@mui/material/TableContainer'
import MuiTableHead, { TableHeadProps } from '@mui/material/TableHead'
import MuiTableRow, { TableRowProps } from '@mui/material/TableRow'

export const Table = (props: TableProps) => {
  return <MuiTable classes={{}} {...props} />
}
export const TableBody = (props: TableBodyProps) => {
  return <MuiTableBody classes={{}} {...props} />
}
export const TableCell = (props: TableCellProps) => {
  return <MuiTableCell classes={{ root: 'py-2 pr-2 pl-0' }} {...props} />
}
export const TableContainer = (props: TableContainerProps) => {
  return <MuiTableContainer classes={{}} {...props} />
}
export const TableHead = (props: TableHeadProps) => {
  return <MuiTableHead classes={{}} {...props} />
}
export const TableRow = (props: TableRowProps) => {
  return <MuiTableRow classes={{}} {...props} />
}
