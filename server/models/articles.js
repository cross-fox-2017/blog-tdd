var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ArticlesSchema = new Schema({
  title : String,
  content: String,
  author: Number
},{
  timestamps: true
})

var articles = mongoose.model('Articles', ArticlesSchema);

module.exports = articles
