import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts } from "@/store/features/product/api";
import { IProduct } from "@/types/product";

export interface IProductData {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

interface InitialState {
  limit: number;
  lastCalled: Date | null;
  data: IProductData | null;
  status: "idle" | "loading" | "failed";
  error: string | null;
  selectedItem: [] | null;
  selectedProduct: IProduct | null;
}

const initialState: InitialState = {
  limit: 0,
  lastCalled: null,
  data: null,
  status: "idle",
  error: null,
  selectedItem: null,
  selectedProduct: null
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setItem: (state, action: PayloadAction<[]>) => {
      state.selectedItem = action.payload
    },
    clearItem: (state) => {
      state.selectedItem = null
    },
    setSelectedProduct: (state, action: PayloadAction<IProduct>) => {
      state.selectedProduct = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setItem, clearItem, setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
