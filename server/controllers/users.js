const modelsUsers = require('../models/users')
const jwt = require('jsonwebtoken');
const passwordHash = require('password-hash');


var Users = {
  login: function(req, res, next) {
    modelsUsers.find({
      email: req.body.email
    }).then(function(result) {
        res.send(result)
    })


  },
  register: function(req, res, next) {
    var register = new modelsUsers({
      name: req.body.name,
      email: req.body.email,
      password: passwordHash.generate(req.body.password)
    })
    register.save(function(err, result) {
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })

  }
}

module.exports = Users
