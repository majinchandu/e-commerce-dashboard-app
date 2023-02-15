const mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://GOFOOD:chauhan20@cluster0.vyzojrl.mongodb.net/e-commerce'; //apne cluster ka link bhejdoo
mongoose.connect(mongoDB, { useNewUrlParser: true }); // connecting mongodb with backend
// var db = mongoose.connection;
// //Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.set('strictQuery', false);