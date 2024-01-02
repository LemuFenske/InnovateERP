import NavSales from "@/components/NavSales/NavSales"

export default function InitialCahrge() {
    return (
      <div className='relative h-screen'>
        <NavSales/>
        <div className='flex justify-center items-center h-full'>
          <h1 className='text-4xl'>Ventas - Carga Inicial</h1>
        </div>
      </div>
    )
  }
  