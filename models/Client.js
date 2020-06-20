const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const path = require('path');
const URL = "http://localhost:5000";


const ClientSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    compName:{
        type: String,
        required: true
    },
    imageURL:{
        type: String,
        default: URL + "/image/clients/" + this.title 
    }
}, { collection : 'clients' });

module.exports = Client = mongoose.model('client', ClientSchema);