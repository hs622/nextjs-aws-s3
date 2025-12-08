"use client";

import DataTableBody from "@/components/data-table/data-table";
import { Checkbox } from "@/components/ui/checkbox";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-store";
import { fetchProducts } from "@/store/features/product/api";
import { ColumnDef } from "@tanstack/react-table";
import { useEffect } from "react";


interface IProductTableData {
  title: string,
  brand: string,
  availabilityStatus: string,
  stock: number,
  sku: string
}

const columns: ColumnDef<IProductTableData>[] = [
  {
    id: "ID",
    accessorKey: "id",
    cell: ({ row }) => {
      return <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="select row"
      />
    },
  },
  {
    accessorKey: "title",
    cell: ({ row }) => <div>{row.getValue("title")}</div>,
  },
  {
    accessorKey: "brand",
    cell: ({ row }) => <div>{row.getValue("brand")}</div>,
  },
  {
    accessorKey: "availabilityStatus",
    header: "status",
    cell: ({ row }) => <div>{row.getValue("availabilityStatus")}</div>,
  },
  {
    accessorKey: "sku",
    cell: ({ row }) => <div>{row.getValue("sku")}</div>,
  },
  {
    accessorKey: "stock",
    cell: ({ row }) => <div>{row.getValue("stock")}</div>,
  }
]

const ProductTablePage = () => {

  const { data, status } = useAppSelector(state => state.products)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts({
      limit: 55
    }))
  }, [dispatch])

  let tableData: IProductTableData[] = [];
  if (data?.products.length) {
    tableData = data.products;
  }

  if (status == "loading" || data == null) return <div>loading...</div>
  return (
    <DataTableBody<IProductTableData> data={tableData} columns={columns} />
  )
}

export default ProductTablePage;