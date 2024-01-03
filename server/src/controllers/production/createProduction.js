const {Production} = require('../../db')



const productionCreator = async (production) => {
    const newProduction = await Production.create(production)
    return newProduction;

}


const createProduction = async (req, res)=> {
    const production = req.body
    try {
        const newProduction = await productionCreator(production)
        res.status(200).json(newProduction)
    } catch (error) {
        res.status(404).json(error.message)
    }
}
module.exports = createProduction;