var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/artikel', function(req, res, next) {

});

router.post('/artikel', function(req, res, next) {

});
router.delete('/artikel', function(req, res, next) {

});
router.post('/login', function(req, res, next) {

});
module.exports = router;
