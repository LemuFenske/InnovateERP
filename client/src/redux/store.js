import { configureStore } from "@reduxjs/toolkit";
import clientsSlice from '@/redux/features/clients'
import productsSlice from '@/redux/features/products'
import rawMaterialsSlice from '@/redux/features/rawMaterial'
import suppliersSlice from '@/redux/features/suppliers'


export const store = configureStore({
  reducer: {
    clients: clientsSlice,
    products: productsSlice,
    rawMaterials: rawMaterialsSlice,
    suppliers: suppliersSlice
  },
});