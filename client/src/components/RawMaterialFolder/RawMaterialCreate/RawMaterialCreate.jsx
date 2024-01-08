'use client'

import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

// Componente para crear una materia prima
const RawMaterialCreate = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    unitOfMeasurement: '',
    stock: '',
  });

  // Estado para mostrar notificaciones y redireccionar
  const [showNotification, setShowNotification] = useState(false);

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realiza una petición POST para crear una materia prima
      const response = await axios.post('http://localhost:3002/rawMaterial', formData);

      console.log(response.data);

      // Muestra notificación si la petición es exitosa
      if (response.status === 200) {
        console.log('Materia prima creada exitosamente');
        setShowNotification(true);
      } else {
        console.error('Error al crear la materia prima');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };

  // Función para crear otra materia prima
  const handleCreateAnother = () => {
    setShowNotification(false);
    setFormData({
      name: '',
      unitOfMeasurement: '',
      quantity: '',
    });
  };

  // Renderiza el formulario y la notificación
  return (
    <div className="bg-gray-100 p-4 border border-gray-300 shadow-md rounded-md m-4 text-center">
      <h2 className="text-xl font-semibold mb-2">Crear Materia Prima</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4">
        {/* Input para el nombre de la materia prima */}
        <div className="flex justify-end items-center mb-2">
          <label htmlFor="name" className="block text-gray-700 font-semibold mr-2">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-2/3 p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Input para la unidad de medida */}
        <div className="flex justify-end items-center mb-2">
          <label htmlFor="unitOfMeasurement" className="block text-gray-700 font-semibold mr-2">U. de Medida:</label>
          <input
            type="text"
            id="unitOfMeasurement"
            name="unitOfMeasurement"
            value={formData.unitOfMeasurement}
            onChange={handleChange}
            className="w-2/3 p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Input para la cantidad de la materia prima */}
        <div className="flex justify-end items-center mb-2">
          <label htmlFor="stock" className="block text-gray-700 font-semibold mr-2">Cantidad:</label>
          <input
            type="text"
            id="stock"
            name="stock"
            value={formData.quantity}
            onChange={handleChange}
            className="w-2/3 p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Botón para enviar el formulario */}
        <div className="mt-4">
          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">Crear Materia Prima</button>
        </div>
      </form>

      {/* Notificación para mostrar después de crear la materia prima */}
      {showNotification && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md">
            <p className="text-xl font-semibold mb-4">Materia Prima creada con éxito</p>
            <div className="flex justify-between">
              {/* Enlace para terminar la creación */}
              <Link href='/stock/raw-material/files/update'>
                <button className="bg-blue-500 text-white py-2 px-4 rounded">
                  Terminar
                </button>
              </Link>
              {/* Botón para crear otra materia prima */}
              <button onClick={handleCreateAnother} className="bg-green-500 text-white py-2 px-4 rounded">
                Crear Otra
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Exporta el componente
export default RawMaterialCreate;