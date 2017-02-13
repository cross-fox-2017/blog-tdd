const articles = require('../models/articles')

let articleController = {
  read: function(req, res){
    articles.find({}, function(err, articles){
      if (err) throw err;
      res.json(articles)
    })
  },
  create: function(req, res){
    let data = {
      content :  req.body.content,
      author : req.body.author,
      title : req.body.title
    }
    let newarticles = articles(data)
    newarticles.save(function(err){
      if(err) throw err;
      res.json(newarticles)
    })
  },
  delete: function(req, res){
    let id = req.params.id
    articles.find({ _id: id }, function(err, article) {
      console.log(article);
      if (err) throw err;
      if(!article){res.send('article not found')}
      article.remove(function(err) {
        if (err) throw err;
        res.json(article);
      });
    });
  },
  update: function(req, res){
    let id = req.params.id
    let content = req.body.content
    articles.findOneAndUpdate({_id: id}, {content: content}, {new: true}, function(err, article){
      if (err) throw err;
      res.json(article)
    })
  }
}
module.exports = articleController
