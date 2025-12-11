"use client";

import { useAppSelector } from "@/hooks/redux-store"; 
import { ICustomer } from "@/types/customer";

const Description = () => {
  const { data } = useAppSelector(state => state.users)
  // console.log(data, status)

  return (
    <div className="flex flex-col border rounded-md">
      <CardThumbnail data={data && data.users[0]} />
      <CardUserDescription data={data && data.users[0]} />
      <CardUserPurchasesChart />
    </div>
  )
}


const CardThumbnail = ({ data }: { data: ICustomer | null }) => {
  return (
    <div className="flex justify-center items-center h-45 border-b">
      {data && `${data.firstName}'s no image`}
    </div>
  )
}

const CardUserDescription = ({ data }: { data: ICustomer | null }) => {
  return (
    <div className="py-2 px-4 text-sm">
      <div className="pt-1 font-medium">
        Person
      </div>
      <div className="text-balance">
        First Name: <span className="">{data && data.firstName}</span>
      </div>
      <div className="text-balance">
        Last Name: <span className="">{data && data.lastName}</span>
      </div>
      <div className="text-balance">
        Email: <span className="">{data && data.email}</span>
      </div>
      <div className="text-balance">
        Phone: <span className="">{data && data.phone}</span>
      </div>

      <div className="pt-1 font-medium">
        Address
      </div>
      <div className="text-balance">
        City: <span className="">{data && data.address.city}</span>
      </div>
    </div>
  )
}

const CardUserPurchasesChart = () => {
  return (
    <div className="border-t ">
      <div className="flex justify-center items-center h-45">
        Line Chart
      </div>
    </div>
  )
}

export default Description;