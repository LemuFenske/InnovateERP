const {Client} = require('../../db')


const clientCreator = async (client) => {
    const newClient = await Client.create(client)
    return newClient;

}


const createClient = async (req, res)=> {
    const client = req.body
    console.log(client);
    try {
        const newClient = await clientCreator(client)
        res.status(200).json(newClient)
    } catch (error) {
        res.status(404).json(error.message)
    }
}
module.exports = createClient;