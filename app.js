const express=require('express');
const app=express();
const cors=require('cors');

// Middleware
app.use(cors());
app.use(express.json());

// Home Page
app.get('/',(req,res)=>{
    res.send('Yeah..!!! Route is working for Tour Management');
});

module.exports=app;