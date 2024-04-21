var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

const Cart = require('../models/carts');
//const { checkBody } = require('../modules/checkBody');

router.get('/', (request, response) => {
    Cart.find()
    //Recuperer du model trip, afin de l'exploiter car les données apparaissent uniquement en id sans
    .populate('trip')
    .then((cartsArray) => {
        response.json(cartsArray);
        console.log(cartsArray);
    })
})

router.post('/newCart/:tripId', (request, response) => {
    const newCart =   new Cart({trip: request.params.tripId});
    newCart.save().then(() => {
        console.log(request.params.tripId);
        response.end();
    })
})

router.delete('/deleteCart/:cartId', (request, response) => {
    Cart.deleteOne({_id:request.params.cartId})
        .then(() => {
        console.log("delete", request.params.cardId);
        response.end();
    })
})







module.exports = router;