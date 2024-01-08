import NavProduction from "@/components/NavFolder/NavProduction/NavProduction"
import ProductCreate from "@/components/ProductFolder/ProductCreate/ProductCreate"

export default function InitialCahrge() {
    return (
      <div className='relative h-screen'>
        <NavProduction/>
        <div className='flex justify-center items-center h-full'>
          <ProductCreate/>
        </div>
      </div>
    )
  }
  