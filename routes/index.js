var express = require('express');
var router = express.Router();
var artikelController = require("../controllers/artikel")

router.post('/artikel', artikelController.create)

router.get('/artikel', artikelController.find)

router.delete('/artikel/:id', artikelController.delete)

module.exports = router;
