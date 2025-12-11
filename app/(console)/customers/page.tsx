import UserDataTable from "./user-table";

// server-component
const Page = async () => {

  // const data = await GetUsersData({
  //   limit: 50,
  //   skip: 0
  // })

  return (
    <div className="flex gap-2 ">
      <div className="grid grid-cols-6 gap-2 w-full">
        <div className="col-span-5">
          <UserDataTable />
        </div>
        <div className="col-span-1">
          <div className="border rounded-md p-4">
            Customer
          </div>
        </div>
      </div>

      {/* <div className="border rounded-md px-4 py-2">
          <pre>
            {JSON.stringify(data, null, 2)}
          </pre>
        </div> */}
    </div>

  );
};


// {/* <div className="p-2">
//   Description
// </div> */}

// {/* <div className="grid grid-cols-4">
//   <div className="col-span-3">
//     <Header />
//   </div>
// </div> */}
// {/* <div className="grid grid-cols-4 gap-2">
//   <div className="col-span-3">
//     <CustomTable />
//   </div>
//   <Description />
// </div> */}

export default Page;

