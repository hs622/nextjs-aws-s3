import { Metadata } from "next"; 

export const metadata: Metadata = {
  title: "Customers",
  description: "",
};

const UserLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-2">
      <div className="text-2xl font-medium text-gray-700 pb-3">
        Customers
      </div>
      <div>{children}</div>
    </div>
  )
}

export default UserLayout;