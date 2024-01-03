const updateClient = require ('../controllers/client/updateClient')
const getClient = require ('../controllers/client/getClient')
const getClientById = require ('../controllers/client/getClientById')
const getClientByName = require ('../controllers/client/getClientByName')
const deleteClient = require ('../controllers/client/deleteClient')
const createClient = require ('../controllers/client/createClient')
const ClientProduction = require ('../controllers/ClientProduction')


const { Router } = require('express')
const clientRouter = Router()



clientRouter.get('/', getClient)
clientRouter.post('/client-production', ClientProduction)
clientRouter.get('/name', getClientByName)
clientRouter.get('/:id', getClientById)
clientRouter.put('/:id', updateClient)
clientRouter.delete('/:id', deleteClient)
clientRouter.post('/', createClient)


module.exports = clientRouter