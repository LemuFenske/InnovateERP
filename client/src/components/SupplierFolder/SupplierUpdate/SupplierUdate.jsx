'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ModalDelete from './ModalDelete';  // Asegúrate de tener el modal implementado
import ModalUpdate from './ModalUpdate';  // Asegúrate de tener el modal implementado

export default function SupplierUpdate({ id }) {
  const [selectedSupplier, setSelectedSupplier] = useState({});
  const [updatedSupplier, setUpdatedSupplier] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3002/supplier/${id}`)
      .then((response) => {
        setSelectedSupplier(response.data);
        setUpdatedSupplier(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los detalles del proveedor:', error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedSupplier((prevSupplier) => ({
      ...prevSupplier,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:3002/supplier/${id}`, updatedSupplier)
      .then((response) => {
        console.log('Proveedor actualizado exitosamente:', response.data);
        setShowUpdateModal(true);
      })
      .catch((error) => {
        console.error('Error al actualizar el proveedor:', error);
      });
  };

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    axios.delete(`http://localhost:3002/supplier/${id}`)
      .then((response) => {
        console.log('Proveedor eliminado exitosamente:', response.data);
        setShowDeleteModal(false);
      })
      .catch((error) => {
        console.error('Error al eliminar el proveedor:', error);
      });
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  return (
    <div className='flex justify-center items-center h-full'>
      {selectedSupplier && (
        <div className="bg-gray-100 p-4 border border-gray-300 shadow-md rounded-md m-4 text-center">
          <h2 className="text-xl font-semibold mb-2">{selectedSupplier.name}</h2>
          <div className="w-full">
            <div className='w-full'>
              <p className="text-gray-600 mb-2">Código: {selectedSupplier.id}</p>
              <div className="mb-4 flex flex-col justify-between">
                <div className="flex justify-end items-center mb-2">
                  <label htmlFor="phone" className="text-gray-700 font-semibold mr-2">Teléfono:</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={updatedSupplier.phone || ''}
                    onChange={handleInputChange}
                    className="w-2/3 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex justify-end items-center mb-2">
                  <label htmlFor="adress" className="block text-gray-700 font-semibold mr-2">Dirección:</label>
                  <input
                    type="text"
                    id="adress"
                    name="adress"
                    value={updatedSupplier.adress || ''}
                    onChange={handleInputChange}
                    className="w-2/3 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex justify-end items-center mb-2">
                  <label htmlFor="city" className="block text-gray-700 font-semibold mr-2">Ciudad:</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={updatedSupplier.city || ''}
                    onChange={handleInputChange}
                    className="w-2/3 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex justify-end items-center mb-2">
                  <label htmlFor="identification" className="block text-gray-700 font-semibold mr-2">Identificación:</label>
                  <input
                    type="text"
                    id="identification"
                    name="identification"
                    value={updatedSupplier.identification || ''}
                    onChange={handleInputChange}
                    className="w-2/3 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex justify-end items-center mb-2">
                  <label htmlFor="postalCode" className="block text-gray-700 font-semibold mr-2">CP:</label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={updatedSupplier.postalCode || ''}
                    onChange={handleInputChange}
                    className="w-2/3 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex justify-end items-center mb-2">
                  <label htmlFor="businessName" className="block text-gray-700 font-semibold mr-2">Empresa:</label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={updatedSupplier.businessName || ''}
                    onChange={handleInputChange}
                    className="w-2/3 p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <button onClick={handleUpdate} className="bg-green-500 text-white py-2 px-4 rounded">Guardar Cambios</button>
            <button onClick={handleDelete} className="bg-red-500 text-white py-2 px-4 rounded">Eliminar Proveedor</button>
          </div>

          {/* Modales */}
          {showDeleteModal && (
            <ModalDelete
              handleConfirmDelete={handleConfirmDelete}
              handleCancelDelete={handleCancelDelete}
            />
          )}
          {showUpdateModal && (
            <ModalUpdate />
          )}
        </div>
      )}
    </div>
  );
}
