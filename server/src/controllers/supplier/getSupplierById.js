const {Supplier} = require('../../db')


const getSupplierById = async (req, res) => {
    try {
        const {id} = req.params
        const dbResults = await Supplier.findByPk(id);
        return res.status(200).json(dbResults)
    } catch (error) {
        res.status(404).json(error.message)
    }
    
}


module.exports = getSupplierById;