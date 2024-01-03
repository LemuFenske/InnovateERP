const {RawMaterial} = require('../../db')



const productionCreator = async (rawMaterial) => {
    const newRawMaterial = await RawMaterial.create(rawMaterial)
    return newRawMaterial;

}


const createRawMaterial = async (req, res)=> {
    const rawMaterial = req.body
    try {
        const newRawMaterial = await productionCreator(rawMaterial)
        res.status(200).json(newRawMaterial)
    } catch (error) {
        res.status(404).json(error.message)
    }
}
module.exports = createRawMaterial;