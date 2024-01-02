import NavAccounting from "@/components/NavAccounting/NavAccounting"

export default function AllMovements() {
    return (
      <div className='relative h-screen'>
        <NavAccounting/>
        <div className='flex justify-center items-center h-full'>
          <h1 className='text-4xl'>Contabilidad - Todos los Movimientos</h1>
        </div>
      </div>
    )
  }
  