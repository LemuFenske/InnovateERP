const {RawMaterial} = require('../../db')



const getRawMaterial = async (req, res) => {
    try {
        const rawMaterials = await RawMaterial.findAll()
        res.status(200).json(rawMaterials)
    } catch (error) {
        res.status(500).json(error.message)
    } 
}

module.exports = getRawMaterial;