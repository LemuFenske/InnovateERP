const {Client} = require('../../db')



const getClient = async (req, res) => {
    try {
        const clients = await Client.findAll()
        res.status(200).json(clients)
    } catch (error) {
        res.status(500).json(error.message)
    } 
}

module.exports = getClient;