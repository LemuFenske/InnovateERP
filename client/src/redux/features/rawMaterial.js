import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllRawMaterials = createAsyncThunk('rawMaterials/fetchAll', async () => {
  const response = await axios.get('http://localhost:3002/rawMaterial');
  return response.data;
});

export const fetchRawMaterialById = createAsyncThunk('rawMaterials/fetchById', async (rawMaterialId) => {
  const response = await axios.get(`http://localhost:3002/rawMaterial/${rawMaterialId}`);
  return response.data;
});

export const fetchRawMaterialsByName = createAsyncThunk('rawMaterials/fetchByName', async (name) => {
  const response = await axios.get(`http://localhost:3002/rawMaterial/name?name=${name}`);
  return response.data;
});

const rawMaterialsSlice = createSlice({
  name: "rawMaterials",
  initialState: {
    rawMaterials: [],
    selectedRawMaterial: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllRawMaterials.fulfilled, (state, action) => {
        state.rawMaterials = action.payload;
      })
      .addCase(fetchRawMaterialById.fulfilled, (state, action) => {
        state.selectedRawMaterial = action.payload;
      })
      .addCase(fetchRawMaterialsByName.fulfilled, (state, action) => {
        state.rawMaterials = action.payload;
      })
  },
});

export default rawMaterialsSlice.reducer;
