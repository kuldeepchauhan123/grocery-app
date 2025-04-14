import { createSlice } from "@reduxjs/toolkit";

export const Cartslice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addCart: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.items[index].cartQuantity += 1;
      } else {
        state.items.push({ ...action.payload, cartQuantity: 1 });
      }
    
      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },

    removeCart: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index >= 0) {
        const removedItem = state.items[index];
        state.totalQuantity -= removedItem.cartQuantity;
        state.totalPrice -= removedItem.price * removedItem.cartQuantity;
        state.items.splice(index, 1);
      }
    },

    increaseCart: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index >= 0) {
        state.items[index].cartQuantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += state.items[index].price;
      }
    },

    decreaseCart: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index >= 0) {
        const item = state.items[index];
        if (item.cartQuantity > 1) {
          item.cartQuantity -= 1;
          state.totalQuantity -= 1;
          state.totalPrice -= item.price;
        } else {
          // If only 1 left, remove the item
          state.totalQuantity -= 1;
          state.totalPrice -= item.price;
        }
      }
    },
  },
});

export const { addCart, removeCart, increaseCart, decreaseCart } = Cartslice.actions;

export default Cartslice.reducer;
