import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  productList: [],
  cartItem : [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
          state.productList = [...action.payload]
    },
    addCartItem : (state,action) => {
                console.log(action)
                const total = action.payload.price
                state.cartItem = [...state.cartItem,{...action.payload,qty : 1,total : total}]
    },
    deteteCartItem : (state,action) => {

    }
  }
})

export const {setDataProduct,addCartItem,deteteCartItem} = productSlice.actions

export default productSlice.reducer;