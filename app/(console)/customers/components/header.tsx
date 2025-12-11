"use client";

import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAppDispatch, useAppSelector } from "@/hooks/redux-store"
import { fetchUsers } from "@/store/features/users/api"
import { RefreshCcw } from "lucide-react"


const defaultValue: { limit: number, skip: number } = {
  limit: 17,
  skip: 0
}

const Header = () => {

  const { status } = useAppSelector(state => state.users)

  return (
    <div className="flex justify-between items-center gap-2 py-4">
      <div>
        <SearchInput />
      </div>
      <div className="flex gap-2">
        <ReloadBtn status={status} defaultValue={defaultValue} />
        <RecordDropdown limit={defaultValue.limit} />
      </div>
    </div>
  )
}

const ReloadBtn = ({ status, defaultValue }: { status: string, defaultValue: { limit: number, skip: number } }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      {status == "idle" ? (
        <Button
          variant={"outline"}
          onClick={() => {
            dispatch(fetchUsers(defaultValue));
          }}
        >
          <RefreshCcw />
        </Button>
      ) : (
        <Button variant={"outline"} disabled>
          <RefreshCcw className="animate-spin" />
        </Button>
      )}
    </>
  )
}


const RecordDropdown = (
  { limit }: { limit: number }
) => {
  // const dispatch = useAppDispatch();
  const batchRange: number[] = [
    17,
    20,
    30
  ]

  return (
    <Field>
      <Select defaultValue={limit.toLocaleString()}>
        <SelectTrigger>
          <SelectValue placeholder="Records" />
        </SelectTrigger>
        <SelectContent >
          {batchRange.map((range, index) => (
            <SelectItem key={index} value={range.toLocaleString()}>{range.toLocaleString()}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  )
}

const SearchInput = () => {
  return (
    <Input />
  )
}

export default Header;