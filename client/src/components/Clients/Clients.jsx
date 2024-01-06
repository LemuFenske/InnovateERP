'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllClients } from "@/redux/features/clients";
import ClientCard from "../Client/Client"; // Asegúrate de proporcionar la ruta correcta

const Clients = () => {
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clients.clients);

  useEffect(() => {
    dispatch(fetchAllClients());
  }, [dispatch]);

  return (
    <div className='relative flex flex-col w-full h-full px-4'>
      {clients.map((client) => (
        <ClientCard key={client.id} {...client} />
      ))}
    </div>
  );
};

export default Clients;
