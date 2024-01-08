import NavSales from "@/components/NavFolder/NavSales/NavSales"

export default function Delivered() {
    return (
      <div className='relative h-screen'>
        <NavSales/>
        <div className='flex justify-center items-center h-full'>
          <h1 className='text-4xl'>Ventas - Pedidos - Entregados</h1>
        </div>
      </div>
    )
  }