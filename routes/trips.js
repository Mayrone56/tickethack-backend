
var express = require('express');
var router = express.Router();
const Trip = require("../models/trips");
var moment = require('moment');


console.log("coucou 2")

/* GET users listing. */
router.get('/findTrips/:departure/:arrival/:date', (request, response) => {
    //Module moment
    const date = moment(request.params.date); 
    Trip.find({
        departure: request.params.departure,
        arrival: request.params.arrival,
        //Moment module cf doc moment
        date:{$gte:date.startOf('day').format(),$lt:date.endOf('day').format()}
    })
    .then((trips) => {
        response.json(trips);
    })
});

router.get('/findTrips/:departure/:arrival', (request, response) => {
    Trip.find({
        departure: request.params.departure,
        arrival: request.params.arrival, 
    })
    .then((trips) => {
        response.json(trips);
    })
});


router.get('/date', (reques, response) => {
    const date = new Date();
    console.log(response.json({now: date}));
    //console.log(date)
  })

module.exports = router;
