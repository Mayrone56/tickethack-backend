
//Conssole.log('hello')
var express = require('express');
var router = express.Router();
const Trip = require("../models/trips");
var moment = require('moment');


console.log("coucou 2")

/* GET users listing. */
router.get('/findTrips/:departure/:arrival/:date', (request, response) => {
    //Module moment
    // const { departure, arrival, date } = req.params;

    const date = moment(request.params.date); 
    // Comment tu choisis les elements à recuperer dans ta DB, clause de recherche dans les {}
    Trip.find({
        //new RegExp permet de gerer la classe
        // departure: request.params.departure,
        // arrival: request.params.arrival,
        //^et $ dans la regex permet de dire que le nom de la ville commence et termine par le caractere qu'il faut en BDD
        departure: {$regex: `^${request.params.departure}$`, $options: "i"},
        arrival: {$regex: `^${request.params.arrival}$`, $options: "i"},
        //Moment module cf doc moment
        //date:{$gte:date.startOf('day').format(),$lt:date.endOf('day').format()};
        //Update avec moment en dessous
        //$gte greater than or equal plus grand que la date et $lte lower than plus petit que la date
        date: {$gte:moment(date).startOf('day'), $lte: moment(date).endOf('day')}
    })
    //Reponse de la BDD stocké dans trips
    .then((trips) => {
        //Ce response.json permet d'ajouter un body dans la reponse
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
