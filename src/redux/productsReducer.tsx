import { createSlice } from "@reduxjs/toolkit";
import { Product } from "components/Products/productsArray";
// import axios from 'axios'

const initialState:Product[] = []
// export const fetchProducts = createAsyncThunk<Product[],undefined>("products/fetchProducts",
// async () => {
//     const response = await axios.get("https://run.mocky.io/v3/ea7b7859-1a85-421a-b5df-cd143774ded6")
//     return response.data.products
// }
// )
export const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers:{}
})

export default productsSlice.reducer