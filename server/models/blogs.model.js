"use strict"

const mongoose = require('mongoose');
var Schema     = mongoose.Schema;

var blogsSchema = new Schema({
  title: String,
  author: String,
  article: String
},
{
  timestamps : true
})

var Blogs = mongoose.model('Blogs', blogsSchema)

module.exports = Blogs;
