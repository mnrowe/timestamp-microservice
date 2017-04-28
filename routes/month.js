var express = require('express')
var router = express.Router()

router.get('/:month/', function(req, res, next) {
  res.send('respon with a month')
})

module.exports = router
