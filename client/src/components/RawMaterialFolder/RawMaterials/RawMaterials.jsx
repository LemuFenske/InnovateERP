'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllRawMaterials } from '@/redux/features/rawMaterial';
import RawMaterialCard from '../RawMaterial/RawMaterial';

// Componente para mostrar todas las materias primas
const RawMaterials = () => {
  // Obtiene el dispatch y las materias primas desde el estado
  const dispatch = useDispatch();
  const rawMaterials = useSelector((state) => state.rawMaterials.rawMaterials);

  // Carga las materias primas al montar el componente
  useEffect(() => {
    dispatch(fetchAllRawMaterials());
  }, [dispatch]);

  return (
    <div className='relative flex flex-col w-full h-full px-4'>
      {/* Mapea y renderiza cada materia prima utilizando el componente RawMaterialCard */}
      {rawMaterials.map((rawMaterial) => (
        <RawMaterialCard key={rawMaterial.id} {...rawMaterial} />
      ))}
    </div>
  );
};

// Exporta el componente RawMaterials
export default RawMaterials;
