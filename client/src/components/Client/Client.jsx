// ClientCard.jsx
import React from 'react';
import Link from 'next/link';

const ClientCard = ({ id, name, phone, adress, city, identification, postalCode, businessName, createdAt, updatedAt }) => {
  return (
    <Link href={`/sales/files/update/${id}`}>
      <div className="bg-gray-200 flex flex-wrap justify-between p-4 border border-gray-300 shadow-md rounded-md mt-4 w-full">
        <div>
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        </div>
        <div className="flex flex-wrap justify-between w-3/4">
          <div className="w-1/3">
            <p className="text-gray-600">Código: {id}</p>
            <p className="text-gray-600">Teléfono: {phone}</p>
            <p className="text-gray-600">Ciudad: {city}</p>
          </div>
          <div className="w-1/3">
            <p className="text-gray-600">Dirección: {adress}</p>
            <p className="text-gray-600">Código Postal: {postalCode}</p>
            <p className="text-gray-600">Identification: {identification}</p>
          </div>
          <div className="w-1/3">
            <p className="text-gray-600">Empresa: {businessName}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ClientCard;


