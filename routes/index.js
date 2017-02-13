var express = require('express');
var router = express.Router();
const Blog = require('../model/artikel');

/* GET home page. */
router.post('/artikel', function(req, res, next) {
  Blog.create({judul : req.body.judul, isi : req.body.isi }, function (err, data){
    res.send(data);
  })
});
router.get('/artikel', function(req, res, next) {
  Blog.find({}, function (err, data){
    res.send(data);
  })
});
router.delete('/artikel/:id', function(req, res, next) {
  Blog.remove({_id: req.params.id}, function (err, data){
      if (err) throw err
    res.send({message:`artikel dengan id ${req.params.id} berhasil dihapus`})
  })
});


module.exports = router;
