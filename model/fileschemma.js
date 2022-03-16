const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config')
// const Schema = mongoose.schema

const filesschema = new mongoose.Schema ({

    Name : {
        type : String,
        required :  true
    },

    Filename : {
        type : String,
        required : true
    },
    FileImage :{
        type : String
    }
},{Timestamp: true})

const files = mongoose.model('Files',filesschema)
module.exports = files