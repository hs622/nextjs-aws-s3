import { type Table as TanstackTable } from "@tanstack/react-table"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination";

const DataTablePagination = <TData,>({ table }: { table: TanstackTable<TData> }) => {

  return (
    <div className="pt-2">
      <Pagination className="text-xs">
        <PaginationContent >
          <PaginationItem aria-disabled >
            <PaginationPrevious size={"sm"} onClick={() => table.previousPage()} isActive={table.getCanPreviousPage()} />
          </PaginationItem>

          {table.getPageOptions().map(page => (
            <PaginationItem key={page} >
              <PaginationLink size={"sm"} isActive={table.getState().pagination.pageIndex == page}>
                {page + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem >
            <PaginationNext size={"sm"} onClick={() => table.nextPage()} isActive={table.getCanNextPage()} />
          </PaginationItem>


          {/* {table.getCanNextPage()}
        {table.getPageCount()}
        {table.getPageOptions()} */}
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default DataTablePagination;