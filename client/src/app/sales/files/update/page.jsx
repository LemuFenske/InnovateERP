import Clients from '../../../../components/Clients/Clients'
import NavSales from "@/components/NavSales/NavSales"

export default function Update() {
    return (
      <div className='relative h-screen'>
        <NavSales/>
        <div className='flex justify-center items-center h-full'>
          <Clients/>
        </div>
      </div>
    )
  }
  