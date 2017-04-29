var express = require('express')
var router = express.Router()

// htpp://localhost:3000/december?year=2015
router.get('/', function(req, res, next) {
  var year = req.query.year;
  var timestamp = req.query.timestamp;
  const yearLength = 4

  if (year) {
    if (year.length !=  yearLength) {
      res.send(404)
    }

    else if (year.match(/^[12][0-9]{3}/i) || timestamp.match(/1234/i)) {
      res.json({
        year: year,
        timestamp: timestamp
      })
    }
  }

  else {
    res.send('add a query to url ?year=2015')
  }

})

module.exports = router
