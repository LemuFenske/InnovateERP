const {RawMaterial} = require('../../db')



const deleteRawMaterial = async (req, res) => {
    const {id} = req.params
    try {
        const deletedRawMaterial = await RawMaterial.destroy({
            where: { id }
          });
      
        if (deletedRawMaterial === 0) throw new Error('El RawMaterial no existe en la base de datos');
          
        res.status(200).json({ message: 'RawMaterial eliminado correctamente' });
    } catch (error) {
        res.status(404).json(error.message)
    }

}

module.exports = deleteRawMaterial;