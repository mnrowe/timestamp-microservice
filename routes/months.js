var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next) {
  res.json({
    date: '10'
  });
})

module.exports = router
