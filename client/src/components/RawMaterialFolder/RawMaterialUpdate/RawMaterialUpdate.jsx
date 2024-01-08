'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ModalDelete from './ModalDelete';
import ModalUpdate from './ModalUpdate';

export default function RawMaterialUpdate({ id }) {
  const [selectedRawMaterial, setSelectedRawMaterial] = useState({});
  const [updatedRawMaterial, setUpdatedRawMaterial] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3002/rawMaterial/${id}`)
      .then((response) => {
        setSelectedRawMaterial(response.data);
        setUpdatedRawMaterial(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los detalles de la materia prima:', error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRawMaterial((prevRawMaterial) => ({
      ...prevRawMaterial,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:3002/rawMaterial/${id}`, updatedRawMaterial)
      .then((response) => {
        console.log('Materia prima actualizada exitosamente:', response.data);
        setShowUpdateModal(true);
      })
      .catch((error) => {
        console.error('Error al actualizar la materia prima:', error);
      });
  };

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    axios.delete(`http://localhost:3002/rawMaterial/${id}`)
      .then((response) => {
        console.log('Materia prima eliminada exitosamente:', response.data);
        setShowDeleteModal(false);
      })
      .catch((error) => {
        console.error('Error al eliminar la materia prima:', error);
      });
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  return (
    <div className='flex justify-center items-center h-full'>
      {selectedRawMaterial && (
        <div className="bg-gray-100 p-4 border border-gray-300 shadow-md rounded-md m-4 text-center">
          <h2 className="text-xl font-semibold mb-2">{selectedRawMaterial.name}</h2>
          <div className="w-full">
            <div className='w-full'>
              <p className="text-gray-600 mb-2">Código: {selectedRawMaterial.id}</p>
              <div className="mb-4 flex flex-col justify-between">
                {/* Agrega campos específicos de materia prima */}
                <div className="flex justify-end items-center mb-2">
                  <label htmlFor="unitOfMeasurement" className="text-gray-700 font-semibold mr-2">U. de Medida:</label>
                  <input
                    type="text"
                    id="unitOfMeasurement"
                    name="unitOfMeasurement"
                    value={updatedRawMaterial.unitOfMeasurement || ''}
                    onChange={handleInputChange}
                    className="w-2/3 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex justify-end items-center mb-2">
                  <label htmlFor="stock" className="text-gray-700 font-semibold mr-2">Cantidad:</label>
                  <input
                    type="text"
                    id="stock"
                    name="stock"
                    value={updatedRawMaterial.stock || ''}
                    onChange={handleInputChange}
                    className="w-2/3 p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            {/* Botones para actualizar y eliminar */}
            <button onClick={handleUpdate} className="bg-green-500 text-white py-2 px-4 rounded">Guardar Cambios</button>
            <button onClick={handleDelete} className="bg-red-500 text-white py-2 px-4 rounded">Eliminar Materia Prima</button>
          </div>

          {/* Modales */}
          {showDeleteModal && (
            <ModalDelete
              handleConfirmDelete={handleConfirmDelete}
              handleCancelDelete={handleCancelDelete}
            />
          )}
          {showUpdateModal && (
            <ModalUpdate/>
          )}
        </div>
      )}
    </div>
  );
}
