const {Production} = require('../../db')



const getProduction = async (req, res) => {
    try {
        const productions = await Production.findAll()
        res.status(200).json(productions)
    } catch (error) {
        res.status(500).json(error.message)
    } 
}

module.exports = getProduction;