
var express = require('express');
var router = express.Router();
const Trip = require("../models/trips");
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/date', (reques, response) => {
//   const date = new Date();
//   console.log(response.json({now: date}));
//   //console.log(date)
// })

//DECLARATION CURRENT DATE
const currentDate = moment().format("DD MM YYYY");
// console.log(currentDate);

module.exports = router;


/////////////////////////////////




//DATE
router.get("/date", (req, res) => {
  res.json({ message: "Current date => ", now: currentDate });
});

module.exports = router;



