// Suppliers.js
'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllSuppliers } from "@/redux/features/suppliers"; // Asegúrate de tener la acción correcta importada
import SupplierCard from '../Supplier/Supplier';

const Suppliers = () => {
  const dispatch = useDispatch();
  const suppliers = useSelector((state) => state.suppliers.suppliers);

  useEffect(() => {
    dispatch(fetchAllSuppliers());
  }, [dispatch]);

  return (
    <div className='relative flex flex-col w-full h-full px-4'>
      {suppliers.map((supplier) => (
        <SupplierCard key={supplier.id} {...supplier} />
      ))}
    </div>
  );
};

export default Suppliers;
