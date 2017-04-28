var express = require('express')
var router = express.Router()

router.get('/:month', function(req, res, next) {
  res.send('I got a month');
})

module.exports = router
