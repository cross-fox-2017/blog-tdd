const modelsArtikel = require('../models/artikel');

var Artikels = {
  add: function(req, res, next) {
    var addArtikel = new modelsArtikel({
      title: req.body.title,
      isi: req.body.isi,
      author: req.body.author
    })
    addArtikel.save(function(err, result) {
        if(err){
          res.send(err)
        }else{
          res.send(result)
        }
    })
  },
  show: function(req, res, next) {
    modelsArtikel.find({},function(err, data) {
        res.send(data)
    })
  },
  delete: function(req, res, next) {
    modelsArtikel.find({
      title: req.body.title
    },function(err, result) {
      if(err){
        res.send(err)
      }else{
        result[0].remove(function(err) {
          if(err){
            res.send(err)
          }else{
            res.send({
              status:"Data Terhapus"
            })
          }
        })
        
      }
    })
  }
}

module.exports = Artikels
