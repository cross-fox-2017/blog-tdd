var express = require('express')
var router = express.Router()
const articleController = require('../controllers/articles')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send({
    message: 'You are in home'
  })
})

router.get('/api', function (req, res, next) {
  res.send({
    endpoints: [
      '/api/articles',
      '/api/articles/:id'
    ]
  })
})

router.get('/api/articles', articleController.getArticles)

router.post('/api/articles', articleController.createArticle)

router.put('/api/articles/:id', articleController.updateArticle)

router.delete('/api/articles/:id', articleController.deleteArticle)

module.exports = router
