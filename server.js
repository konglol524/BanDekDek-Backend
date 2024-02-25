const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');

//Load env vars
dotenv.config({path:'./config/config.env'});

//connect to database
connectDB();

const app=express();
//add body parser
app.use(express.json());
//Cookie parser
app.use(cookieParser());


//router files
const rentals = require('./routes/rentals');
/*
const auth = require('./routes/auth');
const carBooking = require('./routes/carBookings');
*/

//Mount routers
app.use('/api/v1/rentals', rentals);
/*

app.use('/api/v1/auth', auth);
app.use('/api/v1/carBookings', carBooking);
*/


const PORT=process.env.PORT || 5000;
const server = app.listen(PORT, console.log('Server running in ', process.env.NODE_ENV, ' mode on port ', PORT));

//Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    //close server and exit process
    server.close(()=>process.exit(1));
});