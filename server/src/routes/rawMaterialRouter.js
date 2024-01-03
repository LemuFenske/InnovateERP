const updateRawMaterial = require ('../controllers/rawMaterial/updateRawMaterial')
const getRawMaterial = require ('../controllers/rawMaterial/getRawMaterial')
const getRawMaterialById = require ('../controllers/rawMaterial/getRawMaterialById')
const getRawMaterialByName = require ('../controllers/rawMaterial/getRawMaterialByName')
const deleteRawMaterial = require ('../controllers/rawMaterial/deleteRawMaterial')
const createRawMaterial = require ('../controllers/rawMaterial/createRawMaterial')
const RawMaterialProduction = require ('../controllers/RawMaterialProduction')


const { Router } = require('express')
const rawMaterialRouter = Router()


rawMaterialRouter.get('/', getRawMaterial)
rawMaterialRouter.get('/name', getRawMaterialByName)
rawMaterialRouter.get('/:id', getRawMaterialById)
rawMaterialRouter.put('/:id', updateRawMaterial)
rawMaterialRouter.delete('/:id', deleteRawMaterial)
rawMaterialRouter.post('/', createRawMaterial)

rawMaterialRouter.post('/rawMaterial-production', RawMaterialProduction)


module.exports = rawMaterialRouter