var express = require("express");
var router = express.Router();

// htpp://localhost:3000/december?year=2015
router.get("/", function(req, res, next) {
  // should probably refactor this..
  const month =
    req.baseUrl.match(/[a-z]/gi).join("").charAt(0).toUpperCase() +
    req.baseUrl.match(/[a-z]/gi).join("").slice(1);
  const year = req.query.year;
  const timestamp = req.query.timestamp;
  const yearRe = /^[12][0-9]{3}/i;
  const timestampRe = /1493508095/i;
  const yearLength = 4;
  const timestampLength = 10;

  // http://localhost:3000/december?year=2016&timestamp=1493508095
  if (year && timestamp) {
    if (year.length != yearLength && timestamp.length != timestampLength) {
      res.send(404);
    } else if (year.match(yearRe) && timestamp.match(timestampRe)) {
      res.json({
        date: `${month} ${year}`,
        timestamp: timestamp
      });
    } else {
      res.send(404);
    }

    // http://localhost:3000/december?year=2016
  } else if (year) {
    if (year.length != yearLength) {
      res.send(404);
    } else if (year.match(yearRe)) {
      let yearConverted = y => parseInt(y) + 1;
      res.json({
        date: `${month}${year}`,
        timestamp: yearConverted(year)
      });
    } else {
      res.send(404);
    }
    // http://localhost:3000/december?timestamp=1493508095
  } else if (timestamp) {
    if (timestamp.length != timestampLength) {
      res.send(404);
    } else if (timestamp.match(timestampRe)) {
      let timestampConverted = t => t;
      res.json({
        date: timestampConverted(timestamp),
        timestamp: timestamp
      });
    }
  } else {
    res.send("add a query to url ?year=2015");
  }
});

module.exports = router;
