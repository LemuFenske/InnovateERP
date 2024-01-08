import NavProduction from "@/components/NavFolder/NavProduction/NavProduction"
import Products from "@/components/ProductFolder/Products/Products"

export default function Update() {
    return (
      <div className='relative h-screen'>
        <NavProduction/>
        <div className='flex justify-center items-center h-full'>
          <Products/>
        </div>
      </div>
    )
  }
  