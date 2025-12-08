import ProductTablePage from "./@product-table/page";
import SummaryPage from "./@summary/page";

const Page = () => {
  return (
    <div className="flex">
      <div className="grid grid-cols-6 gap-2 w-full">
        <div className="col-span-4">
          <div>
            filters...
          </div>
          <ProductTablePage />
        </div>
        <div className="grid-col-2">
          <SummaryPage />
        </div>
      </div>
    </div>
  );
};

export default Page;
