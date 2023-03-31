const express = require('express')
const router = express.Router()
const Controller = require('../controllers')
const authenthication = require('../middlewares/authentication')

router.post('/registeradmin', Controller.registerAdmin)
router.post('/registerstaff', Controller.registerStaff)
router.post('/login', Controller.login)
router.use(authenthication)
router.get('/products', Controller.getProducts)
router.get('/categories', Controller.getCategories)
router.get('/user', Controller.currentUser)
router.delete('/products/:id', Controller.deleteProducts)

module.exports = router