var express = require('express');
var router = express.Router();
var users = require('../controllers/userController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  var token = "1234"
  res.send({token: token});
});

module.exports = router;
