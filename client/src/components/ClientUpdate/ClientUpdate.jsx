'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function ClientUpdate({id}) {

    const [selectedClient, setSelectedClient] = useState({});
    const [updatedClient, setUpdatedClient] = useState({});
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [actionType, setActionType] = useState('');


    useEffect(() => {
        axios.get(`http://localhost:3002/client/${id}`)
            .then((response) => {
                setSelectedClient(response.data);
                setUpdatedClient(response.data);
            })
            .catch((error) => {
                console.error('Error al obtener los detalles del cliente:', error);
            });
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedClient((prevClient) => ({
            ...prevClient,
            [name]: value,
        }));
    };

    const handleUpdate = () => {
        setShowConfirmationModal(true);
        setActionType('update');
      };
    
      const handleDelete = () => {
        setShowConfirmationModal(true);
        setActionType('delete');
      };

    // const handleUpdate = () => {
    //     // Realiza la petición al servidor para actualizar el cliente
    //     axios.put(`http://localhost:3002/client/${id}`, updatedClient)
    //         .then((response) => {
    //             console.log('Cliente actualizado exitosamente:', response.data);
    //             // Puedes realizar alguna acción adicional después de la actualización
    //         })
    //         .catch((error) => {
    //             console.error('Error al actualizar el cliente:', error);
    //         });
    // };

    // const handleDelete = () => {
    //     if (confirmDelete) {
    //         // Realiza la petición al servidor para eliminar el cliente
    //         axios.delete(`http://localhost:3002/client/${id}`)
    //             .then((response) => {
    //                 console.log('Cliente eliminado exitosamente:', response.data);
    //                 // Puedes realizar alguna acción adicional después de la eliminación
    //             })
    //             .catch((error) => {
    //                 console.error('Error al eliminar el cliente:', error);
    //             });
    //     } else {
    //         setConfirmDelete(true);
    //     }
    // };

//     const [selectedClient, setSelectedClient] = useState({});
//   const [updatedClient, setUpdatedClient] = useState({});
//   const [confirmDelete, setConfirmDelete] = useState(false);
//   const [showConfirmationModal, setShowConfirmationModal] = useState(false);
//   const [actionType, setActionType] = useState(''); // Puede ser 'delete' o 'update'

//   useEffect(() => {
//     // ... (código existente)
//   }, [id]);

//   const handleInputChange = (e) => {
//     // ... (código existente)
//   };

//   const handleUpdate = () => {
//     setShowConfirmationModal(true);
//     setActionType('update');
//   };

//   const handleDelete = () => {
//     setShowConfirmationModal(true);
//     setActionType('delete');
//   };

  const handleConfirmAction = () => {
    if (actionType === 'delete') {
      // Realiza la petición al servidor para eliminar el cliente
      axios.delete(`http://localhost:3002/client/${id}`)
        .then((response) => {
          console.log('Cliente eliminado exitosamente:', response.data);
          // Puedes realizar alguna acción adicional después de la eliminación
          setShowConfirmationModal(false);
          // Redirige al usuario a la página de actualización
          // o realiza alguna otra acción necesaria
        })
        .catch((error) => {
          console.error('Error al eliminar el cliente:', error);
        });
    } else if (actionType === 'update') {
      // Realiza la petición al servidor para actualizar el cliente
      axios.put(`http://localhost:3002/client/${id}`, updatedClient)
        .then((response) => {
          console.log('Cliente actualizado exitosamente:', response.data);
          // Puedes realizar alguna acción adicional después de la actualización
          setShowConfirmationModal(false);
          // Muestra un modal de éxito y redirige o realiza alguna acción necesaria
        })
        .catch((error) => {
          console.error('Error al actualizar el cliente:', error);
        });
    }
  };

  const handleCloseModal = () => {
    setShowConfirmationModal(false);
  };
    return (
        <div className='flex justify-center items-center h-full'>
        {selectedClient && (
            <div className="bg-gray-100 p-4 border border-gray-300 shadow-md rounded-md m-4 text-center">
                <h2 className="text-xl font-semibold mb-2">{selectedClient.name}</h2>
                <div className="w-full">
                    <div className='w-full'>
                        <p className="text-gray-600 mb-2">Código: {selectedClient.id}</p>
                        <div className="mb-4 flex flex-col justify-between">
                        <div className="flex justify-end items-center mb-2">
                            <label htmlFor="phone" className="text-gray-700 font-semibold mr-2">Teléfono:</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={updatedClient.phone || ''}
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
                            value={updatedClient.adress || ''}
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
                            value={updatedClient.city || ''}
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
                            value={updatedClient.identification || ''}
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
                            value={updatedClient.postalCode || ''}
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
                            value={updatedClient.businessName || ''}
                            onChange={handleInputChange}
                            className="w-2/3 p-2 border border-gray-300 rounded"
                        />
                        </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
            <button onClick={handleUpdate} className="bg-blue-500 text-white py-2 px-4 rounded">Guardar Cambios</button>
            <button onClick={handleDelete} className={`bg-red-500 text-white py-2 px-4 rounded ${confirmDelete ? 'bg-opacity-100' : 'bg-opacity-50'}`}>
              {confirmDelete ? 'Confirmar Eliminación' : 'Eliminar Cliente'}
            </button>
          </div>
        </div>
      )}

      {/* Modal de Confirmación */}
      {showConfirmationModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md">
            <p className="text-xl font-semibold mb-4">
              {actionType === 'delete' ? '¿Seguro de que desea eliminar el cliente?' : 'Cliente actualizado con éxito'}
            </p>
            <div className="flex justify-between">
              <button onClick={handleCloseModal} className="bg-gray-500 text-white py-2 px-4 rounded">
                Cancelar
              </button>
              <button onClick={handleConfirmAction} className={`bg-${actionType === 'delete' ? 'red' : 'blue'}-500 text-white py-2 px-4 rounded`}>
                {actionType === 'delete' ? 'Confirmar Eliminación' : 'Terminar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    )
  }
  