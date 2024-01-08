'use client'
import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const SupplierCreate = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    adress: '',
    city: '',
    identification: '',
    postalCode: '',
    businessName: '',
  });

  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3002/supplier', formData);

      console.log(response.data);

      if (response.status === 200) {
        console.log('Proveedor creado exitosamente');
        setShowNotification(true);
      } else {
        console.error('Error al crear el proveedor');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };

  const handleCreateAnother = () => {
    setShowNotification(false);
    setFormData({
      name: '',
      phone: '',
      adress: '',
      city: '',
      identification: '',
      postalCode: '',
      businessName: '',
    });
  };

  return (
    <div className="bg-gray-100 p-4 border border-gray-300 shadow-md rounded-md m-4 text-center">
      <h2 className="text-xl font-semibold mb-2">Crear Proveedor</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4">
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

        <div className="flex justify-end items-center mb-2">
          <label htmlFor="phone" className="block text-gray-700 font-semibold mr-2">Teléfono:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-2/3 p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="flex justify-end items-center mb-2">
          <label htmlFor="adress" className="block text-gray-700 font-semibold mr-2">Dirección:</label>
          <input
            type="text"
            id="adress"
            name="adress"
            value={formData.adress}
            onChange={handleChange}
            className="w-2/3 p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="flex justify-end items-center mb-2">
          <label htmlFor="city" className="block text-gray-700 font-semibold mr-2">Ciudad:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-2/3 p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="flex justify-end items-center mb-2">
          <label htmlFor="identification" className="block text-gray-700 font-semibold mr-2">Identificación:</label>
          <input
            type="text"
            id="identification"
            name="identification"
            value={formData.identification}
            onChange={handleChange}
            className="w-2/3 p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="flex justify-end items-center mb-2">
          <label htmlFor="postalCode" className="block text-gray-700 font-semibold mr-2">CP:</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="w-2/3 p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="flex justify-end items-center mb-2">
          <label htmlFor="businessName" className="block text-gray-700 font-semibold mr-2">Empresa:</label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            className="w-2/3 p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mt-4">
          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">Crear Proveedor</button>
        </div>
      </form>

      {showNotification && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md">
            <p className="text-xl font-semibold mb-4">Proveedor creado con éxito</p>
            <div className="flex justify-between">
              <Link href='/shopping/files/update'>
                <button className="bg-blue-500 text-white py-2 px-4 rounded">
                  Terminar
                </button>
              </Link>
              <button onClick={handleCreateAnother} className="bg-green-500 text-white py-2 px-4 rounded">
                Crear Otro
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupplierCreate;
