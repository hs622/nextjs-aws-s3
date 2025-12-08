import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { flexRender, type Table as TanstankTable } from "@tanstack/react-table"


const DataTableCell = <TData,>({ table, columns }: { table: TanstankTable<TData>, columns: number }) => {

  return (
    <TableBody>
      {table.getPaginationRowModel()?.rows.length ? (
        table.getRowModel().rows.map(row => (
          <TableRow className="h-8" key={row.id}>
            {row.getVisibleCells().map(cell => (
              <TableCell key={cell.id}>
                {flexRender(
                  cell.column.columnDef.cell,
                  cell.getContext()
                )}
              </TableCell>
            )
            )}
          </TableRow>
        ))
      ) : (
        <TableRow className="h-8 text-center">
          <TableCell colSpan={columns} > Not found </TableCell>
        </TableRow>
      )}
    </TableBody>
  )
}


export default DataTableCell;