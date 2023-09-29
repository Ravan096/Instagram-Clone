const express = require('express');
const cookieParser = require('cookie-parser')
const userRoute= require('./route/userRoute');
const userPost= require('./route/userPost');

const bodyParser = require('body-parser');

const app= express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.json());



app.use("/api/v1",userRoute);
app.use("/api/v1",userPost);




module.exports= app;