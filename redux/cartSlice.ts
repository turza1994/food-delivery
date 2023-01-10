import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: any = {
  cartItems: {},
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: any) => {
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

    decreaseQuantityFromCart: (state, action: any) => {
      const item2 = action.payload
      item2.qty =
        state.cartItems[action.payload.id].qty > 0 &&
        state.cartItems[item2.id].qty - 1
      item2.totalPrice = item2.price * item2.qty

      return {
        ...state,
        cartItems: {
          ...state.cartItems,
          [item2.id]: {
            ...item2,
          },
        },
      }
    },

    removeFromCart: (state, action: any) => {
      const item3 = action.payload
      delete state.cartItems[item3.id]
    },
  },
})

export const { addToCart, decreaseQuantityFromCart, removeFromCart } =
  cartSlice.actions
export default cartSlice.reducer
