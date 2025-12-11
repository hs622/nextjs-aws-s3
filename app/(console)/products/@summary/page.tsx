"use client"

import { useAppSelector } from "@/hooks/redux-store";

const SummaryPage = () => {
  const selectedProduct = useAppSelector(state => state.products.selectedProduct);

  if (!selectedProduct) {
    return (
      <div className="p-4 text-center text-gray-500">
        Select a product to view details
      </div>
    );
  }

  return (
    <div className="p-6 space-y-4">
      <div>
        <h2 className="text-2xl font-bold mb-2">{selectedProduct.title}</h2>
        <p className="text-sm text-gray-500">SKU: {selectedProduct.sku}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Description</h3>
        <p className="text-gray-700">{selectedProduct.description}</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Brand</p>
          <p className="font-medium">{selectedProduct.brand}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Stock</p>
          <p className="font-medium">{selectedProduct.stock}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Status</p>
          <p className="font-medium">{selectedProduct.availabilityStatus}</p>
        </div>
      </div>
    </div>
  );
}


export default SummaryPage;