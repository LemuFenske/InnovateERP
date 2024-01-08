import NavShopping from "@/components/NavFolder/NavShopping/NavShopping"
import SupplierCreate from "@/components/SupplierFolder/SupplierCreate/SupplierCreate"

export default function InitialCahrge() {
    return (
      <div className='relative h-screen'>
        <NavShopping/>
        <div className='flex justify-center items-center h-full'>
          <SupplierCreate/>
        </div>
      </div>
    )
  }
  