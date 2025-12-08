"use client";

import { flexRender, type Table as TanstankTable } from "@tanstack/react-table"
import { TableHead, TableHeader, TableRow } from "../ui/table"
import React from "react";


// interface DataTableProps<TData> {
//   table: TanstankTable<TData>
// }

const DataTableHeader = <TData,>({ table }: { table: TanstankTable<TData> }) => {

  return (
    <TableHeader className="p-2">
      {table.getHeaderGroups().map(headerGroup => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map(header => (
            <TableHead className="capitalize" key={header.id}>
              {header.isPlaceholder
                ? null
                : flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
            </TableHead>
          ))}
        </TableRow>
      ))
      }
    </TableHeader>
  )
}


export default DataTableHeader;