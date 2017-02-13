const Blog = require('../model/artikel');
module.exports = {
  create : function(req, res, next){
    Blog.create({judul : req.body.judul, isi : req.body.isi }, function (err, data){
      res.send(data);
    })
  },

  find : function(req, res, next) {
    Blog.find({}, function (err, data){
      res.send(data);
    })
  },

  delete : function(req, res, next) {
    Blog.remove({_id: req.params.id}, function (err, data){
        if (err) throw err
      res.send({message:`artikel dengan id ${req.params.id} berhasil dihapus`})
    })
  }
}
