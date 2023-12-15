import NavProduction from "@/components/NavProduction/NavProduction"

export default function InitialCahrge() {
    return (
      <div className='relative h-screen'>
        <NavProduction/>
        <div className='flex justify-center items-center h-full'>
          <h1 className='text-4xl'>Carga Inicial</h1>
        </div>
      </div>
    )
  }
  