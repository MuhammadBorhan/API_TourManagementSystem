const mongoose=require('mongoose');
const dotenv=require('dotenv').config();
const colors=require('colors');

// import app
const app=require('./app');

// Database Connection
mongoose.connect(process.env.DATABASE_LOCAL).then(()=>{
    console.log(`Database connection is successful`.bgMagenta.bold);
});

// Server Connection
const port=process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`App is running on port http://localhost:${port}`.blue.bold);
});
