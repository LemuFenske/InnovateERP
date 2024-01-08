// ModalConfirmDelete.js
import Link from 'next/link';
import React from 'react';

const ModalDelete = ({ handleConfirmDelete, handleCancelDelete }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md">
        <p className="text-xl font-semibold mb-4">¿Seguro que desea eliminar la Materia Prima?</p>
        <div className="flex  justify-between">
        <button onClick={handleCancelDelete} className="bg-green-500 text-white py-2 px-4 rounded">Cancelar</button>
        <Link href='/stock/raw-material/files/update'>
            <button onClick={handleConfirmDelete} className="bg-red-500 text-white py-2 px-4 rounded">Confirmar</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
