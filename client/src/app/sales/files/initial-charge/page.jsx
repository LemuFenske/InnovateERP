import NavSales from "@/components/NavFolder/NavSales/NavSales"
import ClientCreate from "../../../../components/ClientFolder/ClientCreate/ClientCreate"

export default function InitialCahrge() {
    return (
      <div className='relative h-screen'>
        <NavSales/>
        <div className='flex justify-center items-center h-full'>
          <ClientCreate/>
        </div>
      </div>
    )
  }
  