import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/cart/productSlice";
import authSlice from "./features/auth/authSlice";
import cartSlice from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: { product: productReducer, auth: authSlice, cart: cartSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
