"use client";

import DataTableBody from "@/components/data-table/data-table";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-store";
import { fetchProducts } from "@/store/features/product/api";
import { setSelectedProduct } from "@/store/features/product/productSlice";
import { ColumnDef } from "@tanstack/react-table";
import { useEffect } from "react";


interface IProductTableData {
  id: number,
  title: string,
  brand: string,
  availabilityStatus: string,
  stock: number,
  sku: string
}

const ProductTablePage = () => {

  const { data, status } = useAppSelector(state => state.products)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts({
      limit: 55,
      properties: [
          "id","description","brand","availabilityStatus","title","sku","stock"
      ]
    }))
  }, [dispatch])

  const handleRowClick = (product: IProductTableData) => {
    // Find the full product data from the store
    const fullProduct = data?.products.find(p => p.id === product.id);
    if (fullProduct) {
      dispatch(setSelectedProduct(fullProduct));
    }
  };

  const columns: ColumnDef<IProductTableData>[] = [
    {
      id: "ID",
      accessorKey: "id",
      cell: ({ row }) => {
        return (
          <input
            type="radio"
            name="product-select"
            checked={row.getIsSelected()}
            onChange={() => {
              ((row as any).table.getRowModel().rows as any[]).forEach((r: any) => r.toggleSelected(r.id === row.id));
              const fullProduct = data?.products.find(p => p.id === row.id as unknown as number);
              if (fullProduct) dispatch(setSelectedProduct(fullProduct));
            }}
            onClick={(e) => e.stopPropagation()}
            aria-label="select row"
          />
        );
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


  let tableData: IProductTableData[] = [];
  if (data?.products.length) {
    tableData = data.products;
  }

  if (status == "loading" || data == null) return <div>loading...</div>
  return (
    <DataTableBody<IProductTableData> 
      data={tableData} 
      columns={columns} 
      onRowClick={handleRowClick}
    />
  )
}

export default ProductTablePage;