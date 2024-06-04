var express = require('express');
var router = express.Router();
const Booking = require("../models/bookings");
const Cart = require("../models/carts");
const fetch = require('node-fetch');

//console.log("coucou bookings routes")



router.get('/', (request, response) => {
    //console.log("REQUEST LOG => ", request.params);
    Booking.find()
        //Recuperer du model trip, afin de l'exploiter car les données apparaissent uniquement en id sans
        .populate('trip')
        .then((bookingArray) => {
            response.json({ message: "tableau bookings", bookingArray });
            console.log(bookingArray);
        })
})

router.post('/newBooking', (request, response) => {
    // const newBooking =   new Booking({trip: request.params.tripId});
    // newBooking.save().then(() => {
    //     console.log(request.params.tripId);
    //     response.end();
    // })
    Cart.find()
        //Recuperer du model trip, afin de l'exploiter car les données apparaissent uniquement en id sans
        .then((cartsArray) => {
            //Map permet d'iterer tableau d'objet, cartsArray est la recuperation du tableau d'objet dans la bdd carts
            //Pour chaqun des cart on crée un nouveau Booking dont le trip est egal au trip du cart
            const bookings = cartsArray.map((cart) => new Booking({ trip: cart.trip }))
            Booking.insertMany(bookings)
                .then(() => {
                    //.end() donne une reponse qui dit rien de nouveau
                    //response.end();
                    Cart.deleteMany()
                        .then(() => {
                            console.log("delete", request.params.cardId);
                            response.json({message:"delete ok"});
                        })
                })
        })
})


module.exports = router;