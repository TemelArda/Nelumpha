const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const path = require('path');


const InquerySchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true 
    }
}, { collection : 'inqueries' });

module.exports = Client = mongoose.model('inqueries', InquerySchema);