var express = require('express')
var router = express.Router()
var MODEL = require('../models/article')

/* GET home page. */

router.post('/article', function (req, res) {
  let article = {
    author: req.body.author,
    title: req.body.title,
    body: req.body.body,
    is_deleted: 0
  }
  MODEL.create(article)
    .then(function (data) {
      res.send(data)
    }).catch(function (err) {
    res.send(err)
  })
})

router.get('/articles', function (req, res) {
  MODEL.find({is_deleted: 0})
    .then(function (data) {
      res.send(data)
    }).catch(function (err) {
    res.send(err)
  })
})

router.delete('/article', function (req, res) {
  let query = {
    title: req.body.title
  }
  MODEL.find(query)
    .then(function (data) {
      data[0].is_deleted = 1
      data[0].save(function (err) {
        if (err)
          console.log(err)
      })
      res.send('Successfully Deleted')
    }).catch(function (err) {
    res.send(err)
  })
})

module.exports = router
