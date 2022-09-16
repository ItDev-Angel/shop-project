import {createSlice} from '@reduxjs/toolkit'
import {omit} from 'lodash'
type State = {
  [id:number]:number
}
const initialState:State = {
  1:5,
  2:5,
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    addProductToCart:(state,action)=>({
      ...state,
      [action.payload.id]:(state[action.payload.id] || 0) + action.payload.count
    }),
    removeProductFromCart:(state,action) => omit(state,action.payload),
    changeProductQuantity:(state,action) => ({
      ...state,
      [action.payload.id]:action.payload.count
    })
  }
})
export const {addProductToCart,removeProductFromCart,changeProductQuantity}= cartSlice.actions
export default cartSlice.reducer