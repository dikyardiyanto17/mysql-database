const express = require('express')
const router = express.Router()
const Controller = require('../controllers')

router.post('/registeradmin', Controller.registerAdmin)
router.post('/registerstaff', Controller.registerStaff)

module.exports = router