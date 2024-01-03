const { Client, Production } = require('../db');

const conection = async (clientId, productId) => {
   try {
      // Buscar el cliente y el producto en la base de datos
      const cliente = await Client.findByPk(clientId);
      const producto = await Production.findByPk(productId);

      if (!cliente || !producto) {
         console.error("Cliente o producto no encontrado");
         return;
      }

      // Crear la conexión entre el cliente y el producto
      await cliente.addProduction(producto);

      return `Producto conectado al cliente con ID ${clientId}`;
   } catch (error) {
      console.error("Error al conectar el producto con el cliente:", error);
   }
};


const ClientProduction = async (req, res)=> {
    const {clientId, productId} = req.body
    try {
        const newConection = await conection(clientId, productId)
        res.status(200).json(newConection)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports = ClientProduction
