import Clients from '../../../../components/ClientFolder/Clients/Clients'
import NavSales from "@/components/NavFolder/NavSales/NavSales"

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
  