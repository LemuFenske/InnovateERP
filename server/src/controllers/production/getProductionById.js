const {Production} = require('../../db')


const getProductionById = async (req, res) => {
    try {
        const {id} = req.params
        const dbResults = await Production.findByPk(id);
        return res.status(200).json(dbResults)
    } catch (error) {
        res.status(404).json(error.message)
    }
    
}


module.exports = getProductionById;