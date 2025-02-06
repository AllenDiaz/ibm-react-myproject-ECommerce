import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
  };
  
const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemTOCart(state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    state.cartItems.push({ ...action.payload, quantity: 1})
                }
        },
        removeItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },

        clearCart(state) {
            state.cartItems = [];
        },
    }
});


  export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = CartSlice.actions;
  export default CartSlice.reducer;

