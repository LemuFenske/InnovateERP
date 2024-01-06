// clientsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllClients = createAsyncThunk('clients/fetchAll', async () => {
  const response = await axios.get('http://localhost:3002/client');
  return response.data;
});

export const fetchClientById = createAsyncThunk('clients/fetchById', async (clientId) => {
  const response = await axios.get(`http://localhost:3002/client/${clientId}`);
  return response.data;
});

export const fetchClientsByName = createAsyncThunk('clients/fetchByName', async (name) => {
  const response = await axios.get(`http://localhost:3002/client/name?name=${name}`);
  return response.data;
});


const clientsSlice = createSlice({
  name: "clients",
  initialState: {
    clients: [],
    selectedClient: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllClients.fulfilled, (state, action) => {
        state.clients = action.payload;
      })
      .addCase(fetchClientById.fulfilled, (state, action) => {
        state.selectedClient = action.payload;
      })
      .addCase(fetchClientsByName.fulfilled, (state, action) => {
        state.clients = action.payload;
      })
  },
});

export default clientsSlice.reducer;

