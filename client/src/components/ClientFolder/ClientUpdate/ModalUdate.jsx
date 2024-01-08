import Link from 'next/link';
import React from 'react';

const ModalUpdate = ({ handleReturnToUpdate }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md">
        <p className="text-xl font-semibold mb-4">Cliente actualizado con éxito</p>
        <Link href='/sales/files/update'>
        <button onClick={handleReturnToUpdate} className="bg-blue-500 text-white py-2 px-4 rounded">Volver</button>
        </Link>
      </div>
    </div>
  );
};

export default ModalUpdate;


