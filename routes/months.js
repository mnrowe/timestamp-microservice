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
  const timestampRe = /[0-9]{10}/i;
  const yearLength = 4;
  const timestampLength = 10;

  // http://localhost:3000/december?year=2016&timestamp=1493508095
  if (year && timestamp) {
    if (year.length != yearLength && timestamp.length != timestampLength) {
      res.send(404);
    } else if (year.match(yearRe) && timestamp.match(timestampRe)) {
      res.json({
        unix: parseInt(timestamp),
        natural: `${month} ${year}`
      });
    } else {
      res.send(404);
    }

    // http://localhost:3000/december?year=2016
  } else if (year) {
    if (year.length != yearLength) {
      res.send(404);
    } else if (year.match(yearRe)) {
      const months = [
        "January",
        "Febuary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      let date = new Date().getDate();
      let unix = new Date(year, months.indexOf(month), parseInt(date));
      res.json({
        unix: unix.getTime() / 1000,
        natural: `${month} ${date} ${year}`
      });
    } else {
      res.send(404);
    }
    // http://localhost:3000/december?timestamp=1493508095
  } else if (timestamp) {
    if (timestamp.length != timestampLength) {
      res.send(404);
    } else if (timestamp.match(timestampRe)) {
      let timestampConverted = t => {
        let date = new Date(t * 1000);
        const months = [
          "January",
          "Febuary",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ];
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        const day = date.getDate();
        return `${month} ${day} ${year}`;
      };
      res.json({
        unix: timestamp,
        natural: timestampConverted(timestamp)
      });
    }
  } else {
    res.send("add a query to url ?year=2015");
  }
});

module.exports = router;
