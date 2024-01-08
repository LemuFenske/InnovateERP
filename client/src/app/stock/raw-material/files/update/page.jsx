import NavRawMaterial from "@/components/NavFolder/NavRawMaterial/NavRawMaterial"
import RawMaterials from "@/components/RawMaterialFolder/RawMaterials/RawMaterials"

export default function Update() {
    return (
      <div className='relative h-screen'>
        <NavRawMaterial/>
        <div className='flex justify-center items-center h-full'>
          <RawMaterials/>
        </div>
      </div>
    )
  }
  