import { createSlice } from "@reduxjs/toolkit";
import { saveCartItem } from "~/util/handleCartItem";

const initialState = {
  cartItems: [],
};

export const cartItemSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    getCart: (state, action) => {
      state.cartItems = [...action.payload];
    },
    addCartItem: (state, action) => {
      state.cartItems.push(action.payload);
      saveCartItem(state.cartItems);
    },
    addAmount: (state, action) => {
      if (action.payload.amount + 1 > 50) {
        state.cartItems[action.payload.index].amountItem =
          action.payload.amount;
      } else {
        state.cartItems[action.payload.index].amountItem =
          action.payload.amount + 1;
      }
      saveCartItem(state.cartItems);
    },
    subtractAmount: (state, action) => {
      if (action.payload.amount - 1 <= 0) {
        state.cartItems[action.payload.index].amountItem =
          action.payload.amount;
      } else {
        state.cartItems[action.payload.index].amountItem =
          action.payload.amount - 1;
      }
      saveCartItem(state.cartItems);
    },
    removeCartItem: (state, action) => {
      state.cartItems.splice(action.payload, 1);
      saveCartItem(state.cartItems);
    },
    removeAllItem: (state, action) => {
      state.cartItems = [];
      saveCartItem(state.cartItems);
    },
  },
});

// export const orderItem = createAsyncThunk("cartItem/order", async (data) => {

// });

export const {
  getCart,
  addCartItem,
  addAmount,
  subtractAmount,
  removeCartItem,
  removeAllItem,
} = cartItemSlice.actions;

export default cartItemSlice.reducer;
