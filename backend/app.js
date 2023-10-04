const express = require('express');
const cookieParser = require('cookie-parser')
const userRoute= require('./route/userRoute');
const userPost= require('./route/userPost');
const cors= require('cors');

const bodyParser = require('body-parser');

const app= express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.json());
app.use(cors());



app.use("/api/v1",cors(),userRoute);
app.use("/api/v1",userPost);




module.exports= app;