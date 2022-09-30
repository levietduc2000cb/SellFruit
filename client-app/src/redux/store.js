import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./reduxSlices/authSlice";
import CartItemSlice from "./reduxSlices/cartItemSlice";

const rootReducer = { auth: AuthSlice, cartItem: CartItemSlice };

export const store = configureStore({
  reducer: rootReducer,
});
