"use client";

import DataTableCell from "@/components/data-table/cell/data-table-cell";
import DataTableHeader from "@/components/data-table/data-table-header";
import DataTablePagination from "@/components/data-table/data-table-pagination";
import { DataTableSkeleton } from "@/components/data-table/data-table-skeleton";
import DataTableSearchResult from "@/components/data-table/filters/search-results";
import { DataTableShowRecords } from "@/components/data-table/filters/show-records";
import { Checkbox } from "@/components/ui/checkbox";
import { Table } from "@/components/ui/table";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-store";
import { fetchUsers } from "@/store/features/users/api";
import { useReactTable, ColumnDef, getCoreRowModel, getPaginationRowModel, PaginationState } from "@tanstack/react-table";
import { CircleCheck, CircleX } from "lucide-react";
import { useEffect, useState } from "react";

interface IUserTableData {
  name: string,
  email: string,
  status: boolean,
  purchaseCount: number
};

const columns: ColumnDef<IUserTableData>[] = [
  {
    accessorKey: "ID",
    // header: ({ header }) => {

    // },
    cell: ({ row, table }) => {
      return <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => {
          console.log(!!value);
          row.toggleSelected(!!value)
          console.log(table.getSelectedRowModel().rows.map(row => row.id))
        }}
        aria-label="select row"
      />
    }
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div className="capitalize">{row.getValue('name')}</div>,
    enableSorting: true
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div>{row.getValue("email")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      if (row.getValue("status")) return <CircleCheck className="h-4 w-4 text-green-300" />
      else return <CircleX className="h-4 w-4 text-red-300" />
    },
    enableSorting: true
  },
  {
    accessorKey: "purchaseCount",
    header: "Purchase Count",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("purchaseCount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(amount);

      return <div className="">{formatted}</div>
    }
  },
]

const UserDataTable = () => {

  const { data, status } = useAppSelector(state => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers({}))
  }, [dispatch]);

  const bools = Boolean(Math.random().toFixed())

  const refinedData = data?.users.map(user => {
    return {
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      status: bools,
      purchaseCount: 48555,
    };
  });

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 15
  });

  const table = useReactTable({
    data: refinedData || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination
    }
  })

  if (status == "loading" || data == null) {
    return <DataTableSkeleton
      columnCount={7}
      rowCount={10}
      filterCount={2}
      cellWidths={[
        "10rem",
        "30rem",
        "10rem",
        "10rem",
        "6rem",
        "6rem",
        "6rem",
      ]}
      shrinkZero={true}
    />
  }

  return (
    <div className="w-full">

      <div className="flex justify-between gap-2 my-2">
        <div>
          <DataTableSearchResult />
        </div>
        <DataTableShowRecords />
      </div>
      <div className={`border rounded-md`}>
        <Table>
          <DataTableHeader table={table} />
          <DataTableCell table={table} columns={columns.length} />
        </Table>
      </div>

      <div className="flex justify-between">
        <div></div>
        <DataTablePagination table={table} />
      </div>
    </div>
  )
}

export default UserDataTable;
