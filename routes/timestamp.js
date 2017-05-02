var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  const timestamp = parseInt(req.baseUrl.match(/[0-9]{10}/i));
  const timestampLength = timestamp.length;

  if (timestamp.length != timestampLength) {
    rese.send(404);
  } else {
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
      const day = date.getDay();
      return `${month} ${day} ${year}`;
    };
    res.json({
      unix: timestamp,
      natrual: timestampConverted(timestamp)
    });
  }
});

module.exports = router;
