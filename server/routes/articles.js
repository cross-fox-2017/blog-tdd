var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var content = "ada"
  res.send({content: content});
});

module.exports = router;
