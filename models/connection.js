const mongoose = require('mongoose');

//URI MongoDB
const connectionString = 'mongodb+srv://mayrone:WdRCMNqVC1VEWzUN@cluster0.3ult3vz.mongodb.net/tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Database tickethack connected'))
  .catch(error => console.error(error));