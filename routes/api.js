const express = require('express')
const router = express.Router()
const controller = require('../controllers/users')

router.get('/', controller.read)
router.post('/users', controller.add)

module.exports = router
