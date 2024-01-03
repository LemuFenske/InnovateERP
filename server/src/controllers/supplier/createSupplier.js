const {Supplier} = require('../../db')


const supplierCreator = async (supplier) => {
    const newSupplier = await Supplier.create(supplier)
    return newSupplier;

}


const createSupplier = async (req, res)=> {
    const supplier = req.body
    try {
        const newSupplier = await supplierCreator(supplier)
        res.status(200).json(newSupplier)
    } catch (error) {
        res.status(404).json(error.message)
    }
}
module.exports = createSupplier;