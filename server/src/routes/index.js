const { Router } = require('express');
const supplierRouter = require ('./supplierRouter')
const clientRouter = require ('./clientRouter')
const productionRouter = require ('./productionRouter')
const rawMaterialRouter = require ('./rawMaterialRouter')



const router = Router();


router.use('/client', clientRouter)
router.use('/supplier', supplierRouter)
router.use('/rawMaterial', rawMaterialRouter)
router.use('/production', productionRouter)



module.exports = router;