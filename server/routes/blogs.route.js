var express    = require('express');
var router     = express.Router();
var controller = require('../controllers/blogs.controller.js')

router.get('/', controller.getBlog)

router.post('/new', controller.createBlog)

router.put('/:title', controller.updateBlog)

router.delete('/:title', controller.deleteBlog)

module.exports = router;
