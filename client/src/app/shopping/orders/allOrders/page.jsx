import NavShopping from "@/components/NavFolder/NavShopping/NavShopping"

export default function AllOrders() {
    return (
      <div className='relative h-screen'>
        <NavShopping/>
        <div className='flex justify-center items-center h-full'>
          <h1 className='text-4xl'>Compras - Todas Las Ordenes</h1>
        </div>
      </div>
    )
  }