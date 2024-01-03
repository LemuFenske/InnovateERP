const {Production} = require('../../db')



const deleteProduction = async (req, res) => {
    const {id} = req.params
    try {
        const deletedProduction = await Production.destroy({
            where: { id }
          });
      
        if (deletedProduction === 0) throw new Error('El Production no existe en la base de datos');
          
        res.status(200).json({ message: 'Production eliminado correctamente' });
    } catch (error) {
        res.status(404).json(error.message)
    }

}

module.exports = deleteProduction;