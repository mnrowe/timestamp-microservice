var express = require('express')
var router = express.Router()

// htpp://localhost:3000/december?year=2015
router.get('/', function(req, res, next) {
  var year = req.query.year;

  if(year){
    if(year.match(/^[12][0-9]{3}/i)) {
      res.json({
        year: year
      })
    }
  }

  else {
    res.send('add a query to url ?year=2015')
  }

})

module.exports = router
