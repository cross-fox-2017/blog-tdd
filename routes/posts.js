var express = require('express');
var router = express.Router();
const Post = require('../models/post');

/* GET home page. */
router.post('/new', function(req, res) {
  let newPost = Post({
    subject: req.body.subject,
    text: req.body.text
  })
  newPost.save().then(function(post){
    res.send(post)
  })
});

router.get('/post/:id', function(req, res) {
  Post.findOne({_id:req.params.id}).then(function(post){
    res.send(post)
  })
})

router.put('/edit/post/:id', function(req, res) {
  Post.findOneAndUpdate({_id: req.params.id},{
    subject:req.body.subject,
    updatedAt: new Date()
  },{new:true}).then(function(post) {
    res.send(post)
  })
})

router.delete('/delete/post/:id', function(req, res) {
  Post.findOneAndRemove({_id: req.params.id}).then(function(post) {
    res.send(`Post with id ${req.params.id} has been deleted`)
  })
})

module.exports = router;
