const express = require('express')
const router = express.Router()
const controller = require('../controllers/users')

router.get('/', controller.path)
router.post('/users', controller.addUsers)
router.get('/users', controller.getAllUsers)
router.delete('/users/:id', controller.deleteUser)

module.exports = router
