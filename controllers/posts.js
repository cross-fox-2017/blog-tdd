const Post = require('../models/post');

module.exports = {
  newPost: function(req, res) {
    let newPost = Post({
      userid: "58a192a2a010362d858a5eaf",
      subject: req.body.subject,
      text: req.body.text
    })
    newPost.save().then(function(post){
      res.send(post)
    })
  },
  getPost: function(req, res) {
    Post.findOne({_id:req.params.id}).then(function(post){
      res.send(post)
    })
  },
  updatePost: function(req, res) {
    Post.findOneAndUpdate({_id: req.params.id},{
      subject:req.body.subject,
      updatedAt: new Date()
    },{new:true}).then(function(post) {
      res.send(post)
    })
  },
  deletePost: function(req, res) {
    Post.findOneAndRemove({_id: req.params.id}).then(function(post) {
      res.send(`Post with id ${req.params.id} has been deleted`)
    })
  }
}
