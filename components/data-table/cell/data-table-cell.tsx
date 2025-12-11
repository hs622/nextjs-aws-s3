import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { flexRender, type Table as TanstankTable } from "@tanstack/react-table"


const DataTableCell = <TData,>({ 
  table, 
  columns,
  onRowClick 
}: { 
  table: TanstankTable<TData>, 
  columns: number,
  onRowClick?: (row: TData) => void
}) => {

  return (
    <TableBody>
      {table.getPaginationRowModel()?.rows.length ? (
        table.getRowModel().rows.map(row => {
          const isSelected = row.getIsSelected?.() ?? false;
          return (
            <TableRow
              className={"h-8 cursor-pointer transition-colors " + (isSelected ? "bg-sky-700 text-white" : "hover:bg-sky-100")}
              key={row.id}
              onClick={() => {
                table.getRowModel().rows.forEach((r: any) => r.toggleSelected(r.id === row.id));
                onRowClick?.(row.original);
              }}
            >
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
          )
        })
      ) : (
        <TableRow className="h-8 text-center">
          <TableCell colSpan={columns} > Not found </TableCell>
        </TableRow>
      )}
    </TableBody>
  )
}


export default DataTableCell;