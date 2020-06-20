const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const clients = require('./routes/api/clients');
var cors = require('cors');


const myApp = express(); 
const db = require('./config/keys').mongoURI;

mongoose.connect(db, {useNewUrlParser: true})
.then(()=> console.log('Connected to Database...'))
.catch(err=>console.log(err + "Error connecting to DataBase"));


myApp.use(cors());
myApp.use(bodyParser.json());
myApp.use(express.static(path.join(__dirname, 'public')));
myApp.use('/api/clients', clients);

if(process.env.NODE_ENV === 'production'){
    myApp.use(express.static(path.join(__dirname, 'client/build')));
    myApp.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}


const PORT = process.env.PORT || 5000;

myApp.listen(PORT, ()=>{console.log("RUNNING ON " + PORT)});