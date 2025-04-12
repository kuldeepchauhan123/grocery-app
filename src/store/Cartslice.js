import { createSlice } from "@reduxjs/toolkit";

export const Cartslice = createSlice({
  name: "cart",
  initialState : [],  
  reducers: {
    addCart(state, action){
      state.push(action.payload)
    },
    removeCart(state, action){
      return state.filter((item)=> item.id !== action.payload)
    },
    clearCart(state, action){
      return state = []
    }
  },
})


export const { addCart, removeCart, clearCart } = Cartslice.actions;

export default Cartslice.reducer;
