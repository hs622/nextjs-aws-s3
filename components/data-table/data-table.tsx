"use client";

import { ColumnDef, getCoreRowModel, getPaginationRowModel, PaginationState, useReactTable } from "@tanstack/react-table";
import { Table } from "../ui/table";
import DataTableHeader from "./data-table-header";
import DataTableCell from "./cell/data-table-cell";
import { useState } from "react";
import DataTablePagination from "./data-table-pagination";

interface props<TData> {
  data: TData[],
  columns: ColumnDef<TData>[],
  filters?: [],
  numberOfRecords?: number,
  onRowClick?: (row: TData) => void
}

const DataTableBody = <TData,>({
  data,
  columns,
  numberOfRecords,
  onRowClick
}: props<TData>) => {

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: numberOfRecords || 20
  })

  const table = useReactTable({
    
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination
    },
  })


  return (
    <>
      <div className="border rounded-md">
        <Table>
          <DataTableHeader table={table} />
          <DataTableCell table={table} columns={columns.length} onRowClick={onRowClick} />
        </Table>
      </div>
      {!(table.getState().pagination.pageSize >= data.length) && (
        <div className="flex justify-end py-2">
          <DataTablePagination table={table} />
        </div>
      )}
    </>
  )
}


export default DataTableBody;
