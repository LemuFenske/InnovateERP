import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts = createAsyncThunk('products/fetchAll', async () => {
  const response = await axios.get('http://localhost:3002/production');
  return response.data;
});

export const fetchProductById = createAsyncThunk('products/fetchById', async (productId) => {
  const response = await axios.get(`http://localhost:3002/production/${productId}`);
  return response.data;
});

export const fetchProductsByName = createAsyncThunk('products/fetchByName', async (name) => {
  const response = await axios.get(`http://localhost:3002/production/name?name=${name}`);
  return response.data;
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    selectedProduct: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductsByName.fulfilled, (state, action) => {
        state.products = action.payload;
      })
  },
});

export default productsSlice.reducer;
