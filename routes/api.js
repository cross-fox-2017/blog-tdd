const express = require('express')
const router = express.Router()
const controller = require('../controllers/users')

// User Routes
router.get('/', controller.path)
router.post('/users', controller.addUsers)
router.get('/users', controller.getAllUsers)
router.delete('/users/:id', controller.deleteUser)

// Blog Routes
router.post('/blogs', controller.addBlog)
router.get('/blogs', controller.getAllBlogs)
router.delete('/blogs/:id', controller.deleteBlog)
router.put('/blogs/:id', controller.updateBlog)

module.exports = router
