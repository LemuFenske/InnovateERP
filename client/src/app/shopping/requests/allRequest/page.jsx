import NavShopping from "@/components/NavFolder/NavShopping/NavShopping"

export default function AllRequest() {
    return (
      <div className='relative h-screen'>
        <NavShopping/>
        <div className='flex justify-center items-center h-full'>
          <h1 className='text-4xl'>Compras - Todas Las Solicitudes</h1>
        </div>
      </div>
    )
  }