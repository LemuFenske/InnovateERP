import React from 'react';
import NavRawMaterial from '@/components/NavFolder/NavRawMaterial/NavRawMaterial';
import RawMaterialUpdate from '@/components/RawMaterialFolder/RawMaterialUpdate/RawMaterialUpdate';


export default function Detail({ params }) {
    const { id } = params;
    

    return (
        <div className='relative h-screen'>
            <NavRawMaterial />
            <RawMaterialUpdate id={id}/>
        </div>
    );
}




















// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchClientById } from "@/redux/features/clients"; 
// import NavSales from "@/components/NavSales/NavSales"

// export default function Detail({params}) {
//     const {id} = params
//     const dispatch = useDispatch();
//     const selectedClient = useSelector((state) => state.clients.selectedClient);
    

//     useEffect(() => {
//         dispatch(fetchClientById(id));
//     }, [dispatch]);

//     return (
//         <div className='relative h-screen'>
//             <NavSales />
//             <div className='flex justify-center items-center h-full'>
//                 {selectedClient && (
//                     <div className="bg-white p-4 shadow-md rounded-md m-4">
//                         <h2 className="text-xl font-semibold mb-2">{selectedClient.name}</h2>
//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <p className="text-gray-600">Código: {selectedClient.id}</p>
//                                 <p className="text-gray-600">Teléfono: {selectedClient.phone}</p>
//                                 <p className="text-gray-600">Dirección: {selectedClient.adress}</p>
//                                 <p className="text-gray-600">Ciudad: {selectedClient.city}</p>
//                             </div>
//                             <div>
//                                 <p className="text-gray-600">Identification: {selectedClient.identification}</p>
//                                 <p className="text-gray-600">Código Postal: {selectedClient.postalCode}</p>
//                                 <p className="text-gray-600">Business Name: {selectedClient.businessName}</p>
//                                 {/* Puedes incluir otros campos aquí */}
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }