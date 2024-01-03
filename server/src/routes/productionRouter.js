const updateProduction = require ('../controllers/production/updateProduction')
const getProduction = require ('../controllers/production/getProduction')
const getProductionById = require ('../controllers/production/getProductionById')
const getProductionByName = require ('../controllers/production/getProductionByName')
const deleteProduction = require ('../controllers/production/deleteProduction')
const createProduction = require ('../controllers/production/createProduction')


const { Router } = require('express')
const productionRouter = Router()



productionRouter.get('/', getProduction)
productionRouter.get('/name', getProductionByName)
productionRouter.get('/:id', getProductionById)
productionRouter.put('/:id', updateProduction)
productionRouter.delete('/:id', deleteProduction)
productionRouter.post('/', createProduction)


module.exports = productionRouter