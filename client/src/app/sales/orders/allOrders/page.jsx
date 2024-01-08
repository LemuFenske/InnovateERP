import NavSales from "@/components/NavFolder/NavSales/NavSales"

export default function AllOrders() {
    return (
      <div className='relative h-screen'>
        <NavSales/>
        <div className='flex justify-center items-center h-full'>
          <h1 className='text-4xl'>Ventas - Todas Las Ordenes</h1>
        </div>
      </div>
    )
  }