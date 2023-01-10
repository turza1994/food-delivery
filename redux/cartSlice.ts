import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: any = {
  cartItems: {},
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload

      if (!state.cartItems[action.payload.id]) {
        item.qty = 1
        item.totalPrice = item.price

        return {
          ...state,
          cartItems: {
            ...state.cartItems,
            [item.id]: {
              ...item,
            },
          },
        }
      } else {
        item.qty =
          state.cartItems[action.payload.id].quantity_available >
          state.cartItems[action.payload.id].qty
            ? state.cartItems[action.payload.id].qty + 1
            : state.cartItems[action.payload.id].qty

        item.totalPrice = item.price * item.qty

        return {
          ...state,
          cartItems: {
            ...state.cartItems,
            [item.id]: {
              ...item,
            },
          },
        }
      }
    },
  },
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
