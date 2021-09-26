import { createSlice } from '@reduxjs/toolkit';

export interface ICartState {
  cartItems: any | [];
}

const initialState: ICartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartItems.push(action.payload);
    },
    removeFromCart(state, action) {
      const idNeedToRemove = action.payload;
      state.cartItems = state.cartItems.filter((x: any) => x.id !== idNeedToRemove);
      // console.log(state);

      return state.cartItems;
    },
    setQuantity(state, action) {
      const { id, quantity } = action.payload;

      const index = state.cartItems.findIndex((x: any) => x.id === id);
      if (index >= 0) {
        state.cartItems[index].quantity = quantity;
      }
    },
  },
});

const { actions, reducer } = cartSlice;

export const { addToCart, removeFromCart,setQuantity } = actions;

export default reducer;
