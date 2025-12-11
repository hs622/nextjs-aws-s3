import { configureStore } from "@reduxjs/toolkit";
import userSlice from './features/users/usersSlice';
import productSlice from './features/product/productSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      users: userSlice,
      products: productSlice
    },
    middleware(getDefaultMiddleware) {
      return getDefaultMiddleware({
        serializableCheck: false
      })
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
