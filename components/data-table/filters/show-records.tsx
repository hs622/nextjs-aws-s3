"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"


export const DataTableShowRecords = () => {

  const options: number[] = [10, 20, 30];
  // const [option, setOption] = useState<PaginationState>();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} size={"sm"}>
          {options[0]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {options.map(option => (
          <DropdownMenuItem key={option}>
            {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}