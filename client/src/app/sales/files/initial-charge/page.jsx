import NavSales from "@/components/NavSales/NavSales"
import ClientCreate from "../../../../components/ClientCreate/ClientCreate"

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
  