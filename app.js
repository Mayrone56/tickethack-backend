require('./models/connection');

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const nocache = require('nocache');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tripRouter = require('./routes/trips');
var cartRouter = require('./routes/carts');
var bookingRouter = require('./routes/bookings');

var app = express();
//CORS
const cors = require('cors');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(nocache());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/trips', tripRouter);
app.use('/carts', cartRouter);
app.use('/bookings', bookingRouter);


console.log("coucou")

module.exports = app;
