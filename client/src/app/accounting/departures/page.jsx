import NavAccounting from "@/components/NavFolder/NavAccounting/NavAccounting"

export default function Departures() {
    return (
      <div className='relative h-screen'>
        <NavAccounting/>
        <div className='flex justify-center items-center h-full'>
          <h1 className='text-4xl'>Contabilidad - Egresos</h1>
        </div>
      </div>
    )
  }
  