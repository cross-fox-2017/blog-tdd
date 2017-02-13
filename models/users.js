const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: String,
  password: String,
  created_at: Date,
  updated_at: Date
})

const Users = mongoose.model('users', userSchema)

module.exports = Users
