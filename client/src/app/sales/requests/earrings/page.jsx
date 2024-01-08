import NavSales from "@/components/NavFolder/NavSales/NavSales"

export default function Earrings() {
    return (
      <div className='relative h-screen'>
        <NavSales/>
        <div className='flex justify-center items-center h-full'>
          <h1 className='text-4xl'>Ventas - Pedidos - Pendientes</h1>
        </div>
      </div>
    )
  }