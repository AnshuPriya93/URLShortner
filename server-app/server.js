//***********/ Using Node.js `require()` ********

//const express = require('express');
//var cors = require('cors');
//const mongoose = require('mongoose');
//require('dotenv').config()


// --------Using ES6 imports------------//

import express from 'express';
import cors from 'cors';
import http from 'http';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import shortURL from './routes/shorturl.js';



// You can use environment variables for port configuration
const port = process.env.PORT || 5001; 

const app = express()
dotenv.config(); 

app.use(express.json()); // to get JSON response
app.use(express.urlencoded({ extended: true}))// inbuild 
// app.use(cookieParser());
app.use(cors({
    origin:'http://localhost:3000',
    methods: ['*'],// to allow all methods
    credentials:true
}));

app.use("/api/", shortURL);

const connectMongoose = async () => {
    try {
        await mongoose.connect(`${process.env.CONNECTION_STRING}`);           
        console.log("Connect to Database oaky!:");
    } catch (error) {
        console.error('Error connecting to Mongo', error);
        process.exit(1)
    }
}

// Example specifying the port and starting the server
app.listen(port, () => {
    console.log(port);
    connectMongoose();    
});