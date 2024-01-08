'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ModalDelete from './ModalDelete';
import ModalUpdate from './ModalUpdate';

export default function ProductUpdate({ id }) {
  const [selectedProduct, setSelectedProduct] = useState({});
  const [updatedProduct, setUpdatedProduct] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3002/production/${id}`)
      .then((response) => {
        setSelectedProduct(response.data);
        setUpdatedProduct(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los detalles del producto:', error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:3002/production/${id}`, updatedProduct)
      .then((response) => {
        console.log('Producto actualizado exitosamente:', response.data);
        setShowUpdateModal(true);
      })
      .catch((error) => {
        console.error('Error al actualizar el producto:', error);
      });
  };

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    axios.delete(`http://localhost:3002/production/${id}`)
      .then((response) => {
        console.log('Producto eliminado exitosamente:', response.data);
        setShowDeleteModal(false);
      })
      .catch((error) => {
        console.error('Error al eliminar el producto:', error);
      });
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  return (
    <div className='flex justify-center items-center h-full'>
      {selectedProduct && (
        <div className="bg-gray-100 p-4 border border-gray-300 shadow-md rounded-md m-4 text-center">
          <h2 className="text-xl font-semibold mb-2">{selectedProduct.name}</h2>
          <div className="w-full">
            <div className='w-full'>
              <p className="text-gray-600 mb-2">Código: {selectedProduct.id}</p>
              <div className="mb-4 flex flex-col justify-between">
                {/* Agrega campos específicos de productos */}
                <div className="flex justify-end items-center mb-2">
                  <label htmlFor="unitOfMeasurement" className="text-gray-700 font-semibold mr-2">U. de Medida:</label>
                  <input
                    type="text"
                    id="unitOfMeasurement"
                    name="unitOfMeasurement"
                    value={updatedProduct.unitOfMeasurement || ''}
                    onChange={handleInputChange}
                    className="w-2/3 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex justify-end items-center mb-2">
                  <label htmlFor="stock" className="text-gray-700 font-semibold mr-2">Stock:</label>
                  <input
                    type="text"
                    id="stock"
                    name="stock"
                    value={updatedProduct.stock || ''}
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
            <button onClick={handleDelete} className="bg-red-500 text-white py-2 px-4 rounded">Eliminar Producto</button>
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
