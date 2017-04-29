var express = require('express')
var router = express.Router()

// htpp://localhost:3000/december?year=2015
router.get('/', function(req, res, next) {
  var year = req.query.year;
  var timestamp = req.query.timestamp;

  if(year.match(/^[12][0-9]{3}/i)){
    var date = new Date(year);
    res.json({
      year: year
    })
  }

  else {
    res.render(404);
  }
})

module.exports = router
