var express = require('express')
var router = express.Router()

// htpp://localhost:3000/december?year=2015
router.get('/', function(req, res, next) {
  var year = req.query.year
  var timestamp = req.query.timestamp
  const yearLength = 4
  const timestampLength = 10


  if (year && timestamp) {
    if (year.length != yearLength && timestamp.length != timestampLength) {
      res.send(404)
    }

    else if(year.match(/^[12][0-9]{3}/i)) {
      res.json({
        year: year,
        timestamp: timestamp
      })
    }

    else {
      res.send(404)
    }
  }

  else if (year) {

    if (year.length !=  yearLength) {
      res.send(404)
    }

    else if (year.match(/^[12][0-9]{3}/i)) {
      res.json({
        year: year
      })
    }

    else {
      res.send(404)
    }
  }

  else if(timestamp) {
    if (timestamp.length != timestampLength) {
      res.send(404)
    }

    else if (timestamp.match(/1234/i)) {
      res.json({
        timestamp: timestamp
      })
    }
  }

  else {
    res.send('add a query to url ?year=2015')
  }
})

module.exports = router
