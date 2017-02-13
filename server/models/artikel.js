`use strict`
const mongoose = require('mongoose')
const Schema = mongoose.Schema

var artikelSchema = new Schema({
  
},
  {
    timestamp: true
  })

var Artikel = mongoose.model('Item', artikelSchema)

module.exports = Artikel
