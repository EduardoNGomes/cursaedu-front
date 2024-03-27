import { ProductPropsWithQuantity } from '@/@types/productPropsWithQuantity'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface CartState {
  products: ProductPropsWithQuantity[]
}

const initialState: CartState = {
  products: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseItem: (state, action: PayloadAction<ProductPropsWithQuantity>) => {
      const productExist = state.products.findIndex(
        (product) => product.id === action.payload.id,
      )
      if (productExist > -1) {
        const newProduct = state.products.splice(0, productExist)
        state.products = [...newProduct, { ...action.payload }]
      } else {
        state.products = [...state.products, { ...action.payload }]
      }
    },

    decreaseItem: (state, action: PayloadAction<ProductPropsWithQuantity>) => {
      const filteredProducts = state.products.filter(
        (product) => product.id !== String(action.payload.id),
      )
      state.products = filteredProducts
    },
    changeItemQuantity: (
      state,
      action: PayloadAction<ProductPropsWithQuantity>,
    ) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.id
          ? { ...product, quantity: action.payload.quantity }
          : product,
      )
    },
    cleanItems: (state) => {
      state.products = []
    },
  },
})

export const { increaseItem, decreaseItem, changeItemQuantity, cleanItems } =
  cartSlice.actions

export default cartSlice.reducer
