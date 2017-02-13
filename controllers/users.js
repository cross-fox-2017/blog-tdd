const mongoose = require('mongoose')
const Users = require('../models/users')

const userController = {
  path: (req, res) => {
    const path = {
      users_url: 'http://localhost:3000/api/users',
      blogs_url: 'http://localhost:3000/api/blogs'
    }
    res.json(path)
  },
  addUsers: (req, res) => {
    Users.create({
      username: req.body.username,
      password: req.body.password
    }, (err, user) => {
      if (err) throw err
      res.json(user)
    })
  },
  getAllUsers: (req,res) => {
    Users.find((err, users) => {
      if (err) throw err
      res.json(users)
    })
  },
  deleteUser: (req, res) => {
    Users.findByIdAndRemove(req.params.id, (err, user) => {
      if (err) throw err
      res.json(user)
    })
  }
}

module.exports = userController
