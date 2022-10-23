const express=require('express');
const app=express();
const cors=require('cors');

const tourRoute=require('./routes/Tour.route');

// Middleware
app.use(cors());
app.use(express.json());

// Home Page
app.get('/',(req,res)=>{
    res.send('Yeah..!!! Route is working for Tour Management System');
});

//post and read data from database
app.use("/api/v1/tour",tourRoute);

module.exports=app;