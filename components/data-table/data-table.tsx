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
  numberOfRecords?: number
}

const DataTableBody = <TData,>({
  data,
  columns,
  numberOfRecords
}: props<TData>) => {

  const [pagination, setPagniation] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: numberOfRecords || 20
  })

  const table = useReactTable({
    
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagniation,
    state: {
      pagination
    },
  })


  return (
    <>
      <div className="border rounded-md">
        <Table>
          <DataTableHeader table={table} />
          <DataTableCell table={table} columns={columns.length} />
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
