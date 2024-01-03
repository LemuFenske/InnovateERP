const {Client} = require('../../db')



const deleteClient = async (req, res) => {
    const {id} = req.params
    try {
        const deletedClient = await Client.destroy({
            where: { id }
          });
      
        if (deletedClient === 0) throw new Error('El client no existe en la base de datos');
          
        res.status(200).json({ message: 'Client eliminado correctamente' });
    } catch (error) {
        res.status(404).json(error.message)
    }

}

module.exports = deleteClient;