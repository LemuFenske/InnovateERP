const { RawMaterial, Production } = require('../db');

const conection = async (rawMaterialId, productId) => {
   try {
      // Buscar el cliente y el producto en la base de datos
      const rawMaterial = await RawMaterial.findByPk(rawMaterialId);
      const producto = await Production.findByPk(productId);

      if (!rawMaterial || !producto) {
         console.error("Material o producto no encontrado");
         return;
      }

      // Crear la conexión entre el cliente y el producto
      await rawMaterial.addProduction(producto);

      return `Producto conectado al Material con ID ${rawMaterialId}`;
   } catch (error) {
      console.error("Error al conectar el producto con el Material:", error);
   }
};


const RawMaterialIdProduction = async (req, res)=> {
    const {rawMaterialId, productId} = req.body
    try {
        const newConection = await conection(rawMaterialId, productId)
        res.status(200).json(newConection)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports = RawMaterialIdProduction
