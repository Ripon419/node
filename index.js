const express = require("express");
const mongoose = require('mongoose');

const app = express();

const port = 3002;

mongoose.connect('mongodb://localhost:27017/test')
.then(()=>console.log('db server is started'))
.catch((error)=>{
    console.log('db server is not started');
    console.log(error);
    process.exit(1);
});


app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});

app.get("/",(req, res)=>{
    res.send("Welcome to home page");
});