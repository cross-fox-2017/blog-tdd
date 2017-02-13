const Users = require('../models/users')

module.exports = {
  createUser: (req, res) => {
    Users.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    }).then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.send(err)
    })
  },

  getUsers: (req, res) => {
    Users.find().then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.send(err)
    })
  },

  updateUser: (req, res) => {
    Users.findOneAndUpdate({
      _id: req.params.id
    }, req.body, {
      new: true
    }).then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.send(err)
    })
  },

  deleteUser: (req, res) => {
    Users.findOneAndRemove({
      _id: req.params.id
    }).then(function (data) {
      res.send({m: `Deleted User with ID: ${req.params.id}`})
    }).catch(function (err) {
      res.send({m: 'Error data not found'})
    })
  }
}
