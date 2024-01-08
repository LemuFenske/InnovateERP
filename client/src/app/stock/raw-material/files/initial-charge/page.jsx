import NavRawMaterial from "@/components/NavFolder/NavRawMaterial/NavRawMaterial"
import RawMaterialCreate from "@/components/RawMaterialFolder/RawMaterialCreate/RawMaterialCreate"

export default function InitialCahrge() {
    return (
      <div className='relative h-screen'>
        <NavRawMaterial/>
        <div className='flex justify-center items-center h-full'>
          <RawMaterialCreate/>
        </div>
      </div>
    )
  }
  