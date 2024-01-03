const {Supplier} = require('../../db')



const deleteSupplier = async (req, res) => {
    const {id} = req.params
    try {
        const deletedSupplier = await Supplier.destroy({
            where: { id }
          });
      
        if (deletedSupplier === 0) throw new Error('El Supplier no existe en la base de datos');
          
        res.status(200).json({ message: 'Supplier eliminado correctamente' });
    } catch (error) {
        res.status(404).json(error.message)
    }

}

module.exports = deleteSupplier;