"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getRandomValues } from "@/lib/fn"; 
import { ICustomer } from "@/types/customer";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"


export type Customers = {
  customerId: number
  email: string
  status: boolean
  purchasedCount: string
}

const columns: ColumnDef<Customers>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "email",
    header: "email",
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "purchasedCount",
    header: "Purchases",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("purchasedCount"))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
]

const CustomTable = ({ data }: { data: ICustomer[] | undefined }) => {

  const processedData = data?.map<Customers>(user => ({
    "customerId": user.id,
    "email": user.email,
    "status": Boolean(Math.abs(Math.random()).toFixed()),
    "purchasedCount": getRandomValues(111, 999).toFixed(2),
  }));

  console.log(processedData);
  
  const table = useReactTable({
    data: processedData || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    // <div className="w-full">
    //   <div className="overflow-hidden rounded-md border">
    //     <Table>
    //       <TableHeader>
    //         <TableRow>
    //           <TableHead></TableHead>
    //           <TableHead>CustomerId</TableHead>
    //           <TableHead>Email</TableHead>
    //           <TableHead>Phone</TableHead>
    //           <TableHead>States</TableHead>
    //           <TableHead></TableHead>
    //         </TableRow>
    //       </TableHeader>
    //       <TableBody>
    //         {data &&
    //           data.users.map((item, index) => (
    //             <TableRow key={index}>
    //               <TableCell className="py-0.5"></TableCell>
    //               <TableCell className="py-0.5">CI-15899-1{item.id}</TableCell>
    //               <TableCell className="py-0.5">{item.email.toLocaleLowerCase()}</TableCell>
    //               <TableCell className="py-0.5">{item.phone}</TableCell>
    //               <TableCell className="py-0.5">{item.address.city}</TableCell>
    //               <TableCell className="py-0.5">
    //                 <Button variant={"link"} className="cursor-pointer">
    //                   <Link href={`/customers/${item.id}`}>view</Link>
    //                 </Button>
    //               </TableCell>
    //             </TableRow>
    //           ))
    //         }
    //         {!data && (
    //           <TableRow>
    //             <TableCell colSpan={6} className="text-center">
    //               Not Data found
    //             </TableCell>
    //           </TableRow>
    //         )}
    //       </TableBody>
    //     </Table>
    //   </div>
    // </div>

    <div className="">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* <ul>
        {data && data?.users.map(user => (<li key={user.id}>{user.firstName.toLowerCase()}</li>))}
      </ul> */}
    </div>
  );
};

export default CustomTable;

