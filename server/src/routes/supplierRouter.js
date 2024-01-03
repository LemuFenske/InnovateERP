const updateSupplier = require ('../controllers/supplier/updateSupplier')
const getSupplier = require ('../controllers/supplier/getSupplier')
const getSupplierById = require ('../controllers/supplier/getSupplierById')
const getSupplierByName = require ('../controllers/supplier/getSupplierByName')
const deleteSupplier = require ('../controllers/supplier/deleteSupplier')
const createSupplier = require ('../controllers/supplier/createSupplier')


const { Router } = require('express')
const supplierRouter = Router()


supplierRouter.get('/', getSupplier)
supplierRouter.get('/name', getSupplierByName)
supplierRouter.get('/:id', getSupplierById)
supplierRouter.put('/:id', updateSupplier)
supplierRouter.delete('/:id', deleteSupplier)
supplierRouter.post('/', createSupplier)


module.exports = supplierRouter