const mongoose = require('mongoose')
const Users = require('../models/users')

const userController = {
  read: (req, res) => {
    const path = {
      users_url: 'http://localhost:3000/api/users',
      blogs_url: 'http://localhost:3000/api/blogs'
    }
    res.json(path)
  },
  add: (req, res) => {
    Users.create({
      username: req.body.username,
      password: req.body.password
    }, (err, user) => {
      if (err) throw err
      res.json(user)
    })
  }
}

module.exports = userController
