
import NavShopping from "@/components/NavFolder/NavShopping/NavShopping"
import Suppliers from "@/components/SupplierFolder/Suppliers/Suppliers"

export default function Update() {
    return (
      <div className='relative h-screen'>
        <NavShopping/>
        <div className='flex justify-center items-center h-full'>
          <Suppliers/>
        </div>
      </div>
    )
  }
  