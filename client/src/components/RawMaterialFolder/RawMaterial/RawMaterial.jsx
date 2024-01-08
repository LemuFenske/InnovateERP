// Importa las bibliotecas necesarias
import React from 'react';
import Link from 'next/link';

// Componente para mostrar una tarjeta de materia prima
const RawMaterialCard = ({ id, name, unitOfMeasurement, stock }) => {
  return (
    // Enlaza a la página de actualización de la materia prima
    <Link href={`/stock/raw-material/files/update/${id}`}>
      <div className="bg-gray-200 flex flex-wrap justify-between p-4 border border-gray-300 shadow-md rounded-md mt-4 w-full">
        <div>
          {/* Muestra el nombre de la materia prima como título */}
          <h2 className="text-xl font-semibold mb-2">{name}</h2>
        </div>
        <div className="flex flex-wrap justify-between w-3/4">
          <div className="w-1/3">
            {/* Muestra información detallada de la materia prima */}
            <p className="text-gray-600">Código: {id}</p>
            <p className="text-gray-600">Unidad de Medida: {unitOfMeasurement}</p>
            <p className="text-gray-600">Cantidad: {stock}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Exporta el componente RawMaterialCard
export default RawMaterialCard;
