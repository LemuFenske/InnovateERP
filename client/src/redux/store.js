import { configureStore } from "@reduxjs/toolkit";
import clientsSlice from '@/redux/features/clients'


export const store = configureStore({
  reducer: {
    clients: clientsSlice,
  },
});