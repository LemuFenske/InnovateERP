const {Supplier} = require('../../db')



const getSupplier = async (req, res) => {
    try {
        const suppliers = await Supplier.findAll()
        res.status(200).json(suppliers)
    } catch (error) {
        res.status(500).json(error.message)
    } 
}

module.exports = getSupplier;