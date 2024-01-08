import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllSuppliers = createAsyncThunk('suppliers/fetchAll', async () => {
  const response = await axios.get('http://localhost:3002/supplier');
  return response.data;
});

export const fetchSupplierById = createAsyncThunk('suppliers/fetchById', async (supplierId) => {
  const response = await axios.get(`http://localhost:3002/supplier/${supplierId}`);
  return response.data;
});

export const fetchSuppliersByName = createAsyncThunk('suppliers/fetchByName', async (name) => {
  const response = await axios.get(`http://localhost:3002/supplier/name?name=${name}`);
  return response.data;
});

const suppliersSlice = createSlice({
  name: "suppliers",
  initialState: {
    suppliers: [],
    selectedSupplier: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllSuppliers.fulfilled, (state, action) => {
        state.suppliers = action.payload;
      })
      .addCase(fetchSupplierById.fulfilled, (state, action) => {
        state.selectedSupplier = action.payload;
      })
      .addCase(fetchSuppliersByName.fulfilled, (state, action) => {
        state.suppliers = action.payload;
      })
  },
});

export default suppliersSlice.reducer;
