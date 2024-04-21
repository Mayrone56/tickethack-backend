const mongoose = require('mongoose');

//URI MongoDB
const connectionString = process.env.CONNECTION_STRING;

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Database tickethack connected'))
  .catch(error => console.error(error));
